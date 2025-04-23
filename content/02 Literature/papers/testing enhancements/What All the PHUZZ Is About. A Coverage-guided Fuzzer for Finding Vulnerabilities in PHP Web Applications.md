---
ID: 2025-03-25T09:18:49.425Z
tags:
  - paper
  - projectSLR
  - remoteCommandExecution
  - XSS
  - SQLIA
  - [[[[fuzzing]]]]
  - greyBox
  - PHP
  - cyberSecurity
Project:
  - SLR
---
## Context

To this day, PHP is the server-side language that drives *over 75% of the websites.* Automated [[security testing]] tools promise to facilitate the discovery of vulnerabilities.
- One such approach is [[fuzzing]] testing, in which a fuzzer generates seemingly random inputs fed to the target application to trigger unintended behavior, potentially leading to vulnerabilities

Little work exists on grey box coverage-guided [[fuzzing]] to web applications due to the research strong focus on low-level applications ([[fuzzing]] is mostly used with binary)

**Contributions**
- A novel crawler-free approach to seeding the fuzzer with endpoints, allowing more fine-grained control over the [[fuzzing]] scope
- A novel [[instrumentation]] approach without modifications to the fuzzed application’s source code or related components (i.e., databases), capable of intercepting PHP exceptions or errors, and bypassing authentication and authorization functionality to collect more code coverage
- A novel vulnerability detection approach to discover web vulnerability, supporting parallel [[fuzzing]] out-of-the-box, making it suitable for large-scale [[fuzzing]] testing
- Two [[zero-day vulnerability]] found and approved by Certified Numbering Authority (CNA) WPScan

## Background

This work focuses on ==user-supplied input (HTTP headers, cookies, query, body parameters), to PHP functions== that result in a vulnerability.

**Vulnerabilities covered by PHUZZ**
- [[SQLIA (SQL injection attack)]]: attacker-controlled input becomes part of a SQL-query sent to a database
- [[RCE (Remote Code Execution)]]: attacker-controlled input is executed as part of a shell command
- Insecure deserialization (IDes):  deserialization functions are called with attacker-controlled input
- [[directory traversal (path traversal)]]: the attacker controls parts of the file path passed to file related functions
- [[XXE (XML external entities)]]: the attacker can pass XML to vulnerable XML parsers
- [[XSS (cross site scripting)]]: the attacker can include HTML markup or JavaScript in a vulnerable website due to missing sanitation. Only ==reflected and stored XSS are detected by Phuzz==
- [[redirect attack]]: the attacker can manipulate the location to which a browser is redirected

### Phuzz implementation

![[phuzz_implementation.png]]
- **browser and crawler**: the process begins with obtaining endpoints that are to be fuzzed. We define an endpoint as a URL path, and request method with a specific set parameters (HTTP headers, query, body, and [[cookie]] parameters). We implement a crawling component to discover fuzzable endpoints automatically, with Playwright. Browser DevTools are used to capture and save all HTTP requests performed while interacting with the application
- **HARgen**: this component generates configuration files for Phuzz from a given [[HAR file]], which is the output of the previous step.
- **Composegen**: in order to orchestrate all components and their respective [[Docker]] containers to launch Phuzz with the desired configuration in a reproducible manner, we use the [[Docker]]-compose extension
- **Login script**: to support [[fuzzing]] of endpoints that require authentication or authorization, a login script can be executed during Phuzz startup to obtain session cookies, which will be used in all subsequent [[fuzzing]] requests to the target
- **Fuzzer**: The Fuzzer component is the centerpiece of the Phuzz framework
	- It takes the endpoints to be fuzzed from the loaded configuration files and generates test cases, which we call *candidates*
	- The mutation-based candidate generation follows a basic [[energy-based algorithm]]
	- The new candidate and its parameters are then converted to a valid HTTP request in the Request preparation step, which is then sent to the web server with a specific ID
	- After receiving an HTTP response, the fuzzer evaluates the associated coverage and debug information
	- This information is then processed by multiple vulnerability detectors to identify security issues and rate the candidate
	- The candidate with the highest rating is chosen for the next mutation iteration
	- Multiple instances of the fuzzer can run in parallel and synchronize generated test cases
- **Shared volume**: Phuzz uses an in-memory [[Docker]] volume to provide a shared filesystem for information exchange between all containers
- **Web server**: Apache by default
- **Database**: MySQL by default

### Instrumentation of PHP interpreter

The PHP interpreter was instrumented using a function hooker. UOPZ is a PHP extension that provides functionality to manipulate PHP functions on the interpreter level. Phuzz makes extensive use of the uopz_set_return feature to instrument native and non-native PHP functions

### Evaluation

Phuzz was compared with a set of state-of-the-art vulnerability scanners or fuzzers against a set of six different web applications with a diverse set of vulnerabilities. About the [[benchmark testing]]:
- The buggy web app (bWAPP), provided 30 vulnerabilities usable for our comparison
- The Damn Vulnerable Web Application (DVWA), offered 18 suitable vulnerabilities with varying difficulty levels
- The Xtreme Vulnerable Web Application (XVWA), that implements 10 vulnerabilities, including insecure deserialization
- WackoPicko, that had 7 suitable vulnerabilities, after being modified for PHP8 compatibility
- 22 real-world WordPress plugins with known vulnerabilities. Except for some commercial plugins, a plugin’s source code is open, allowing us to download and install it in our environment.

Phuzz ==identifies 99% of the vulnerabilities== and thus outperforms the state-of-the-art black-box vulnerability scanners BurpSuite, ZAP, Wapiti, and WFuzz

For client-side vulnerabilities, Phuzz finds up to 26% more vulnerabilities than the other fuzzers, although BurpSuite finds almost the same amount (95%).

---
#### References
- [[(Neef, Kleissner, et al., 2024)]]
