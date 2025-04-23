---
ID: 2025-01-29-11:05
tags:
  - "#definition"
  - businessFlowTampering
---
## Definition

Business flow tampering or exploiting [[logic vulnerability]], is a significant security issue in web security. BFT exploits defects that permit to circumvent the expected functionality of an application. The attacks exploiting these defects are legitimate application transactions used to carry out an undesirable operation that is not part of usual business practice [[(Deepa, Thilagam, et al., 2018)]]

Limited work on this field because [[(Li, Xue, et al., 2013)]]:
- logic flaws are often application-specific
- identifying logic flaws requires understanding the intended behavior (specifications) and the actual behavior
- [[black-box testing]] approaches are scalable but challenging to implement in this context

Logic flaws can be modeled as the differences between a [[FSM (finite-state machine)]] of the specifications and a FSM of their actual implementation [[(Li, Xue, et al., 2013)]]

### Categories 

[[(Deepa, Thilagam, et al., 2018)]]:
- **parameter manipulation**: modification of values of critical variables, and favor the attackers to cause serious damage to the application by bypassing the client-side validation
- **access-control**: these vulnerabilities allow attackers to acquire access to a restricted resource, which is exclusively intended for a highly privileged user of the application
- **workflow bypass**: disturb the intended workflow of the application, consequently breaking the business-specific functionality 

### Root causes

[[(Deepa, Thilagam, et al., 2018)]]:
- **missing server-side validation**: misuses of client-side scripting to process and validate the user-supplied input for quick processing and for bringing down the server-side loads. A ==parameter manipulation attack== is based on faulty [[string validation]]
- **missing/Incomplete access check**: inadequate session variables checks that can be tampered with to access restricted content or resources. If [[RBAC (role-based access control)]] is not well implemented, ==authentication/authorization bypass attacks== can occur
- **Overloading session variables**: uncontrolled creation/population of session objects or usage of identical session variables at various application entry points is called overloading of session variables, and may lead to [[session puzzling]] attacks
- **Missing sequence check**: In some business workflows, the user must follow a specific sequence of operations. For example, the user is expected to reach page C only after completing actions on pages A and B. However, if the application relies solely on a [[CSRF (cross-site request forgery) token]] without enforcing the sequence of visited pages, an attacker might directly request page C after page A, bypassing page B. ==This happens because the CSRF token validation does not ensure that the expected steps were followed in the correct order.== This is called **workflow bypass attack**

### Tampering techniques

- changing the style classes
- changing the references objects (images, audio, video, etc)
- changing the source code of the page itself
- changing the interface state (or components state, in component-based GUIs)
- skip/repeat function execution
- force a conditional branch
- mix together values obtained by running several parallel sessions of the same web application
- intercept a page send by the server and modify it before the client receives it
- [[DOM clobbering]]

### Tampering consequences

- bypass [[paywalls]]
- skip advertisements
- earn reward points illegally
- financial loss for the business

> [!ERROR] Client-side tampering
>  Attackers can bypass paywalls and read an unlimited number of articles without paying on NYTimes and WashingtonPost. Detected flaws on Youtube and CWTV enable attackers to skip in-stream video ads. We also discover a flaw in the popular reward-earning website InboxDollars; attackers can illegitimately earn rewards points without finishing the required steps (e.g. watch videos). In our experiments, we are able to stack $3.44 reward for an hour attack with a single machine without watching videos, and ==if we continue this attack, we could steal around $80 per day==

### Client-side tampering. Why relying on client-side logic for critical business operations?

Although [[OWASP (Open Web Application Security Project)]] strongly recommend enforcing business logic on the server-side, client-side implementation are commonly seen in practice. This because:
- in certain scenario is not feasible or would be really impractical to keep all the business logic on the back-end
- third-party integration (e.g., payment services), require the client-side to have an active role
- large scale web applications which have a huge number of users need to rely on the client-side to ease the server's work
- often, paywall are added on an existing codebase. To avoid expensive and risky code refactors, third-party services that rely on the client-side are used. Rewrite all the codebase from scratch maintaining the current database in order not to lose any user requires extensive effort and resources

### Mitigation techniques

- implement more complicated authentication schemes
- deploying on-the-fly attack detection on the server-side
- performing sophisticated client-side obfuscation

[[(Deepa, Thilagam, et al., 2018)]]:
- rely on secure web framework
- white-box and black-box approaches to mitigate logic vulnerabilities/attacks in legacy applications
- tools to prevent a malicious execution during runtime

### Tools used to automate tampering

- [Greasemonkey](https://addons.mozilla.org/it/firefox/addon/greasemonkey/)
- [Tampermonkey](https://www.tampermonkey.net/)

---
## References
- [[(Kim, Zheng, Park, et al., 2020)]]
- [[(Pellegrino, Balzarotti, 2014)]]
- [[(Viticchie, Basile, Avancini, et al., 2016)]]
- [[(Khodayari, Pellegrino, 2023)]]
- [[(Deepa, Thilagam, et al., 2018)]]
- [[(Li, Xue, et al., 2013)]]
- [[(Ndiaye, Barais, et al., 2019)]]

See also [[direct graph-based logic flow analysis]]: how to define and identify "critical" pages in a web application