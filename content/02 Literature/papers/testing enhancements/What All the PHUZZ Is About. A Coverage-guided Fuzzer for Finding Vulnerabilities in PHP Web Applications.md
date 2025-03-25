---
ID: 2025-03-25T09:18:49.425Z
tags:
  - paper
  - projectSLR
  - remoteCommandExecution
  - XSS
  - SQLIA
  - fuzzing
  - greyBox
  - PHP
  - cyberSecurity
Project:
  - SLR
---
## Context

To this day, PHP is the server-side language that drives *over 75% of the websites.* Automated security testing tools promise to facilitate the discovery of vulnerabilities.
- One such approach is [[fuzzing]] testing, in which a fuzzer generates seemingly random inputs fed to the target application to trigger unintended behavior, potentially leading to vulnerabilities

Little work exists on grey box coverage-guided fuzzing to web applications due to the research strong focus on low-level applications (fuzzing is mostly used with binary)

**Contributions**
- A novel crawler-free approach to seeding the fuzzer with endpoints, allowing more fine-grained control over the fuzzing scope
- A novel [[instrumentation]] approach without modifications to the fuzzed application’s source code or related components (i.e., databases), capable of intercepting PHP exceptions or errors, and bypassing authentication and authorization functionality to collect more code coverage
- A novel vulnerability detection approach to discover web vulnerability, supporting parallel fuzzing out-of-the-box, making it suitable for large-scale fuzzing testing
## Background

This work focuses on ==user-supplied input (HTTP headers, cookies, query, body parameters), to PHP functions== that result in a vulnerability.

**Vulnerabilities covered by PHUZZ**
- [[SQLIA (SQL injection attack)]]: attacker-controlled input becomes part of a SQL-query sent to a database
- [[RCE (Remote Code Execution)]]: attacker-controlled input is executed as part of a shell command
- Insecure deserialization (IDes):  deserialization functions are called with attacker-controlled input
- [[directory traversal (path traversal)]]: the attacker controls parts of the file path passed to file related functions
- [[XXE (XML external entities)]]: the attacker can pass XML to vulnerable XML parsers
- [[XSS (cross site scripting)]]: the attacker can include HTML markup or JavaScript in a vulnerable website due to missing sanitation
- [[redirect attack]]: the attacker can manipulate the location to which a browser is redirected

## Challenges 

- using the PHP interpreter to instrument the high-level PHP code at runtime
- coverage information must be shared using a shared filesystem
- errors and vulnerabilities do not actually cause a crash, because they are handled by PHP, which emits exceptions or error message and abort the execution
- a web application may display multi-step actions for specific functionality (e.g., multiple step forms). In this case, a chain of input values must be provided
- with web fuzzing, the input generated must consider a number of constraints (e.g., the HTTP request structure, body content, POST parameters). Phuzz approaches this challenging task by performing byte-level mutations on the input parameters and not the entire HTTP request, thus ensuring that the request is valid

### Phuzz implementation

---
#### References
- [[(Neef, Kleissner, et al., 2024)]]
