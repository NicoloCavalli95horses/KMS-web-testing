---
ID: 2024-12-10-16:02
tags:
  - paper
  - JavaScript
  - cyberSecurity
  - React
---
## Main concepts

Third-party packages offer several benefits to the application development, but comes also with challenges and security vulnerabilities. These vulnerabilities have been studied mostly in the context of the hosting software ecosystem (e.g., npm package).

JavaScript popularity is due to:
- enabling interactive, real-time, on-demand responses to the end user
- large support for most of programming paradigms
- weakly typed and beginner friendly
- lots of frameworks and large community support

Risks associated to third party dependencies:
- since JS is loosely coupled, security flaws are common
- [[DoS (Denial of Service)]]
- [[prototype pollution]] issues
- asynchronous evolution between third-party packages and client projects
	- this may lead to adding extra packages to solve the issues
	- that may lead to security gaps and conflicts

Goals of the paper:
- investigate the impact of third-party dependencies on the security of client application
- check for the availability of fixes/patches released by third party packages
- examine correlation between: third-party dependencies update, dependencies impact, availability of updates

==A link has been found between the source code size and the risk of vulnerabilities==. The greater the number of dependencies the higher the risk

In React, dependency smells are introduced more frequently than they are fixed

![[dependencies_variables_classiification.png]]

### Most common security vulnerabilities introduced by third-party dependencies

42 vulnerability types with 10 vulnerability that cover over 90% of the observed variance.
- ==[[DoS (Denial of Service)]] (40%):== overwhelms the service or app to render it unusable
- ==[[prototype pollution]] (25%):== allows manipulation of JavaScript's objects and properties
- ==[[code-injection]] (6%): ==enables an attacker to run malicious commands on the target OS
- ==Arbitrary-file access (5%):== unauthorized manipulation of files
- ==Open-Redirect (4%):== accepts user-controlled input leading to link redirect. This facilitate phishing attacks
- ==Information exposure (4%):== information that should be encrypted are exposed
- ==Improper input validation (3%):== enabling malicious code-injection
- ==Improper verification of cryptographic signature (2%)==: allows constructuring signatures that are verified by any public key leading to [[signature forgery]]
- ==Remote-code execution (1%):== enable malicious attackers to execute arbitrary code ([[RCE (Remote Code Execution)]])
- ==Authorization bypass (1%)==: enable attackers to access sensitive information

The vulnerabilities are classified as high-risk, medium risk and low risk

The ability to fix the issues are determined based on dependency update

Developer often ignore low-risk vulnerability

**Threats to validity**
- ==construct validity==: the vulnerabilities were found using Snyk.io. The paper is based on the assumption that the database records all the relevant vulnerabilities introduced by third-party packages
- ==internal validity==: the results cannot be generalized since the research focuses on React.js

---
## References
- [[(Anastasia, Stamatia, 2024)]]
