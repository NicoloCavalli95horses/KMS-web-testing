---
ID: 2025-04-08T08:35:16.426Z
tags:
  - paper
  - projectSLR
  - serverMisconfiguration
  - PHP
Project:
  - SLR
---
## Context

[[security misconfiguration]] has become a real concern for the security of web applications. Misconfiguration may happen at different layers of the web architecture
- misconfiguration at environment and application levels, are the common ones

In PHP web applications, the global configuration settings of Apache and PHP could be redefined either
- at the level of directories (e.g., using `htaccess` files)
- at the source code level in scripts (e.g., using the `ini_set()` function)

**Contribution**
A novel approach to supplement existing web vulnerability analysis techniques by automatically scanning web application directory hierarchy and application source code to ==detect, quantify, and fix configuration vulnerabilities before deployment==

A standard metrics based on the Common Configuration Scoring System (CCSS) can be used to *quantify the severity of configuration* vulnerabilities

 Vulnerability scanners are precise at pinpointing configuration vulnerabilities at the environment level but fell short at the application level
 
## Approach

Given a web application and a deployment environment, our approach
- **configuration parsing**: scans configuration of the environment and the application (through exhaustive traversal of application directory and preliminary source code analysis)
- analyzes configuration vulnerabilities using a standard vulnerability scoring metrics
- generates fine-grained vulnerability report
- facilitates automated fixing of configuration vulnerabilities.

## Evaluation

Confeagle was evaluated on 14 widely deployed open source PHP applications


---
#### References
- [[(Eshete, Villafiorita, et al., 2013)]]
