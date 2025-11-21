---
ID: 2025-03-05-11:00
tags:
  - webinar
  - cyberAttack
  - vulnerabilityManagement
  - vulnerability
speaker:
  - Henrik Plate
abstract: "Vulnerability databases play a crucial role in modern software security, serving as the backbone for Application Security (AppSec) and Software Composition Analysis (SCA) tools. However, the accuracy and reliability of these databases vary significantly, often leading to misinformed security decisions. This talk explores the challenges associated with vulnerability databases, including incomplete data, inconsistent reporting, and the rapid evolution of software ecosystems.\r\rWhile tools like SBOM (Software Bill of Materials) and VEX (Vulnerability Exploitability eXchange) aim to improve vulnerability management, their effectiveness is heavily dependent on the quality of the underlying vulnerability data. Real-world examples from the Java/Maven ecosystem will illustrate how flaws in vulnerability databases can propagate through AppSec and SCA solutions, leading to false positives, missed vulnerabilities, and inefficient remediation efforts.\r\rThis presentation will provide insights into the limitations of current vulnerability databases and offer guidance on how consumers of AppSec and SCA tools can better evaluate and mitigate these risks."
---
 What is a SBOM in cyber security?
 - [[SBOM (Software Bill of Materials)]] is a detailed inventory of all components, libraries, and dependencies used in a software application, providing visibility into potential security vulnerabilities and licensing issues

SBOM is about vulnerability prevention and management

VEX (Vulnerability Exploitability Exchange): are part of SBOM docs, or provided separately. They assert the status of a product with respect to a known vulnerability
- it connects `[status]` of a `[product it]` with respect to `[vuln id]`

A VEX statement must provide an impact statement or a justification with possible values (eg., from 0 to 10)

Does a VEX really matters if the database on which it is based, is flawed?

The important Q are:
- is there any vulnerable code in my app?
- can it run in my app context?
- can it be exploited?

It is difficult to describe a vulnerability
- currently we report info about the vulnerable app (what libraries does it use? what dependencies) and the affected code
- abstract modelization of the vulnerability is not always available

[[OSV (open source vulnerabilities)]]: aggregator of DB of vulnerabilities. Run by Google

Vulnerability DBs ==rarely provide function-level details==

Fix commit are good starting point to detect the vulnerable code, but:
- commits are not always very descriptive (no info about the vulnerability being fixed)
- commits often include other irrelevant modifications to other part of the code, which create noise

Often when reporting a vulnerability, they clam that "all the previous software versions" were affected, just because:
- it can be extremely difficult to pin point the exact software version from which the vulnerability appears

Take home messages:
- fragile links between vulnerability and vulnerable code in an app
- high quality vulnerability databases require significant manual work

---
#### References
- 