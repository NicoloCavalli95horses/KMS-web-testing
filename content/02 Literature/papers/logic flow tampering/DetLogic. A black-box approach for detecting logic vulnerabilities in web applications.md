---
ID: 2025-03-24T08:23:24.051Z
tags:
  - paper
  - businessFlowTampering
  - blackBox
  - projectSLR
Project:
  - SLR
---
## Context

According to Symantec Internet Security Threat report (April 2016), 75% of legitimate applications had unpatched vulnerabilities, and one million attacks were reported on web applications in 2015. A report from Trustwave (2016) states that 97% of the applications tested by Trustwave had security vulnerabilities, with a median of 14 vulnerabilities

Since a number of solutions have been proposed to deal with injection-related vulnerabilities, the focus of the attackers seems to have shifted towards the exploitation of **logic vulnerabilities**. [[BFT (business flow tampering)]] is mostly related to financial loss.

### Limits of existing works

- black-box approaches do not take into consideration the interaction between multiple pages
- ad-hoc solutions that are not scalable
- literature on workflow bypass considers session variables but neglect other parameters such as the role of the [[CSRF (cross-site request forgery) token]]

## Approach

In order to identify logic vulnerabilities, the intended behavior must be analyzed and a way to bypass it must be found
1. The requirements placed on user-input are inferred by analyzing the HTML/JavaScript code available at the client-side
2. The access-control policies related to the application are *derived from the session variables* defined for maintaining state of the application
3. The intended workflows in the application are *derived from a model which is constructed out of the navigations done **manually** in the application*

An in-house pseudo-application is used as reference to explain the modelization of the problem. The example application implement a [[RBAC (role-based access control)]] system and presents a number of bugs and logic flaws. A FSM is proposed to model this app

### DetLogic prototype

The prototype works in three phases:
1. extraction of the intended behavior of the web application under test in a black-box fashion ([[black-box testing]]), creating a [[FSM (finite-state machine)]]. The FSM is built from an [[HTTP trace collection]], using a proxy server that intercepts the HTTP requests and provide details regarding parameters and session variables used
2. construction of concrete attack vectors based on the information gathered. For example, the FSM helps *identify vulnerable flows* where `userID` is null or a user with a certain role tries to access a specific resource. Three types of logic vulnerabilities are considered:
	 - parameter manipulation,
	 - access-control,
	 - workflow bypass vulnerabilities
3. comparison of the responses (DOM objects) obtained during normal and attack executions. Example: forcefully brows a page with a null `userID`
4. reporting vulnerabilities accordingly.

DetLogic acts a proxy intercepting the HTTP requests and responses to the application under test during **learning phase** (i), generate attacks (ii) and places attacks (iii), assessing the security (iv) of the [[SUT (system under test)]]

> [!WARNING] Limits
> The modelling phase strictly depends on a manual navigation of the target application

### Evaluation

DetLogic was implemented in Django using Redis as data structure server. It was tested:
- on 4 open source applications: BookStore, Classifieds, Employee Directory, and Events, were instrumented for testing parameter manipulation vulnerabilities (see [[instrumentation]])
- on 3 open source application: Scarf, Wackopicko, OpenIT, and Puzzlemall for testing access-control vulnerabilities
- DetLogic works effectively with a precision of 99.1% and a true positive of 97.9%

---
#### References
- [[(Deepa, Thilagam, et al., 2018)]]
