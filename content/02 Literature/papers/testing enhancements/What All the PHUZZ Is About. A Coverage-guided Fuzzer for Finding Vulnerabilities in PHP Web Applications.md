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

To this day, PHP is the server-side language that drives over 75% of the websites. Automated security testing tools promise to facilitate the discovery of vulnerabilities. One such approach is [[fuzzling]] testing, in which a fuzzer generates seemingly random inputs fed to the target application to trigger unintended behavior, potentially leading to vulnerabilities

**Contributions**
- A novel crawler-free approach to seeding the fuzzer with endpoints, allowing more fine-grained control over the fuzzing scope
- A novel [[instrumentation]] approach without modifications to the fuzzed application’s source code or related components (i.e., databases), capable of intercepting PHP exceptions or errors, and bypassing authentication and authorization functionality to collect more code coverage
- A novel vulnerability detection approach to discover web vulnerability, supporting parallel fuzzing out-of-the-box, making it suitable for large-scale fuzzing testing
## Approach


---
#### References
- [[(Neef, Kleissner, et al., 2024)]]
