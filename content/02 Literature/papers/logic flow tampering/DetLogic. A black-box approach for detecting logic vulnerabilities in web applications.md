---
ID: 2025-03-24T08:23:24.051Z
tags:
  - paper
  - businessFlowTampering
  - blackBoxTesting
Project:
  - SLR
---
## Context

According to Symantec Internet Security Threat report (April 2016), 75% of legitimate applications had unpatched vulnerabilities, and one million attacks were reported on web applications in 2015. A report from Trustwave (2016) states that 97% of the applications tested by Trustwave had security vulnerabilities, with a median of 14 vulnerabilities

Since a number of solutions have been proposed to deal with **injection-related** vulnerabilities, the focus of the attackers seems to have shifted towards the exploitation of **logic vulnerabilities**. [[BFT (business flow tampering)]] is mostly related to financial loss.

### Limits of existing works

- black-box approaches do not take into consideration the interaction between multiple pages
- ad-hoc solutions that are not scalable
- literature on workflow bypass considers session variables but neglect other parameters such as [[CSRF (cross-site request forgery) token]]
## Approach

In order to identify logic vulnerabilities, the intended behavior must be analyzed and a way to bypass it must be found. But how to extract the desired behavior of an unknown application?
1. The requirements placed on user-input are inferred by ==analyzing the HTML/JavaScript code available at the client-side==
2. The access-control policies related to the application are ==derived from the session variables defined for maintaining state of the application==
3. The intended workflows in the application are ==derived from a model which is constructed out of the navigations done manually in the application==

### DetLogic prototype

The prototype works in three phases:
1. extraction of the intended behavior of the web application under test in a black-box fashion ([[black-box testing]])
2. construction of concrete attack vectors based on the information gathered
3. comparison of the responses obtained during normal and attack executions, and reporting vulnerabilities accordingly. The prototype detects three types of logic vulnerabilities: parameter manipulation, access-control, and workflow bypass vulnerabilities.


---
#### References
- [[(Deepa, Thilagam, et al., 2018)]]
