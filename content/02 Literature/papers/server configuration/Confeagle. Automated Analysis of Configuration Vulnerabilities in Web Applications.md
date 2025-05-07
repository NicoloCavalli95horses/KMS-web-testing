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

[[web server misconfiguration]] has become a real concern for the security of web applications. Misconfiguration may happen at different layers of the web architecture
- misconfiguration at environment and application levels, are the common ones
- the application level (business code) has received the least attention so far

In PHP web applications, the global configuration settings of Apache and PHP could be redefined either
- at the level of directories (e.g., using `htaccess` files)
- at the source code level in scripts (e.g., using the `ini_set()` function)

**Contribution**
- An approach to supplement existing web vulnerability analysis techniques by scanning web application directory hierarchy and application source code to ==detect, quantify, and fix configuration vulnerabilities before deployment==
- A standard metrics based on the Common Configuration Scoring System (CCSS) can be used to *quantify the severity of configuration* vulnerabilities

 Vulnerability scanners are precise at pinpointing configuration vulnerabilities at the environment level but fell short at the application level
 
## Approach

- **configuration parsing**: we scan the configuration of the environment and the application through exhaustive traversal of application directory and preliminary source code analysis. File parsed:
	- directory specific configurations (`htaccess` files)
	- run time configuration (located in different scripts in the app). Functions like `ini_set()` were considered.
	- environment specific configuration from Apache config files
- **configuration vulnerability analysis**: The output of the previous step is analyzed and compared to a gold standard (CCSS and expert recommendations), that include exploitability metrics. Potential configuration vulnerabilities are then quantified
	- Exploitability (Exp) is composed of three sub-metrics: Access Vector (AV ), Authentication (Au), and Access Complexity (AC)
- generates fine-grained vulnerability report
- **configuration fixing**: Patches are applied with respect to recommended configurations. This phase is not 100% automatic given platform-specific features

## Evaluation

- Confeagle was evaluated on 14 widely deployed open source PHP applications: Information Disclosure, [[DoS (Denial of Service)]] due to [[buffer overflow]] and [[session hijacking]] vulnerabilities were found in 10 out of 14 apps
- 3 popular web application vulnerability scanners were compared to Confeagle (see [[benchmark testing]])

## Limits

- Only PHP web application are considered

---
#### References
- [[(Eshete, Villafiorita, et al., 2013)]]
