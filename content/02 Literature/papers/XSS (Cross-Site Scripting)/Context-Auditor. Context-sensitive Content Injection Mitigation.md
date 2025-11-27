---
ID: 2025-11-27T07:36:23.915Z
tags:
  - paper
  - XSS
  - injectionAttacks
  - webApplication
  - CSS
Rank: A
---
## Context

Research into [[XSS (cross site scripting)]] prevention and mitigation has continued since XSS was first discovered. Existing approaches
- use [[static analysis]] identify XSS vulnerabilities in server-side code
- analyze the use of server-side sanitization functions
- filter out JavaScript code on the server side
- attempt to detect the presence of vulnerabilities from the client’s viewpoint

A different class of solutions attempt to mitigate XSS exploits rather than detect the underlying vulnerabilities. These solutions include:
- XSS filters in browsers (e.g., NoScript for Firefox)
- [[CSP (Content Security Policy)]].
- web application firewalls (e.g., ModSecurity)
- server-side HTML sanitizers

These mitigations are widely adopted in practice however it is possible to bypass these defenses (see [[Scriptless attacks. Stealing the pie without touching the sill]])

**Insight**
- Web apps embed untrusted user input as pure data, such as strings and text. This data is not supposed to be interpreted as code
- Client-side parses *mutate* the context: suddenly, the string `<script>` is interpreted as executable code (we call this "context switch")
- Unintended context switches are the root cause of a series of vulnerabilities, including [[SQLIA (SQL injection attack)]], XSS, scriptless attacks, template injection, etc.
- Since the root cause is common, the solution can be the same for all of these attacks

We introduce Context-Auditor, as shell wrapper, an nginx module, a web proxy, and a Chrome extension, to detect content injection exploits in shell commands, HTML, CSS, and JavaScript.
We tested our prototypes on reputable testing suites and comprehensive real-world data sets, where Context-Auditor successfully detected and blocked all reflected XSS, scriptless, and command injection exploits in a number of web applications.
Context-Auditor demonstrated negligible false positive rate in a live crawl of the Alexa top-1000 websites.
## Approach

Parsers (e.g., HTML parser, JavaScript parser, shell parser, etc.) are the entities that eventually parse an exploit, yet ==they do not know if a context switch is triggered by attacker content or was intended by the developer.== With Context-Auditor, we suggest a fundamentally different approach
- we model parsers and detect any context switching caused by attacker-controlled input as a potential content injection exploit

**Motivation**
- State-of-the-art mitigations attempt to identify characteristics of common exploits as malicious: NoScript and XSS-Auditor operate based on regular expression matching
- ModSecurity searches for known malicious-looking directives inside HTTP traffic
- DOMPurify identifies known potentially harmful characters or patterns

These approaches try to identify attack payload, but they cannot distinguish between malicious and intended payloads because they do not know what is the intended execution context. These approaches operate based on patterns, making them unprepared for unfamiliar exploits. Also, detecting known pattern requires preparation of advanced [[RegEx (Regular Expression)]], which is also error-prone.

Ultimately, all these attempts are ==imperfect because they fail to detect unintended context switch caused by unfamiliar attack payloads.==

## Evaluation


## Results


## Limits


---
#### References
- [[(Kalantari, Zaeifi, et al., 2022)]]
