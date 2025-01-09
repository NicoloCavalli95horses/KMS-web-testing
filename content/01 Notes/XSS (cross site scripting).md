---
ID: 2025-01-09-11:47
tags:
  - "#definition"
  - cyberSecurity
---
## Definition

Cross-site scripting vulnerabilities (XSS henceforth) are a security problem that occurs in web applications. They were discovered in the 1990s in the early days of the World Wide Web.
- They are among the most common and most serious security problems affecting web applications
- They are injection problems that enable malicious scripts to be injected into trusted websites
- Most of the time it is a result of a ==failed tentative to validate the user input==

Successful XSS can:
- steal session information stored in a [[cookie]]
- transfer private information
- hijack a user's account
- manipulate the web content
- cause a [[DOS (Denial of Service)]]

**Types of XSS attacks**
1. **reflected**: executed by the victim's browser. Occur when the user provides input to the target website. Is executed on the server-side. It is the easiest XSS type to detect and most of the literature works on this type of issues.
2. **stored**: malicious inputs are stored in databases, message forums, comments fields of the attacked server. The malicious code is executed by visiting users. Is executed on the server-side. This is the most dangerous XSS attack
3. **DOM-based**: executed on the client-side. Attackers are able to collect sensitive information from the user's computer. ==It is the least know type of XSS==

### How to find to find XSS vulnerabilities

Multiple techniques and approaches are often used at the same time to tackle XSS issues:

[[static analysis]]: reviewing the source code of an application to find XSS issues Techniques:
- [[static taint analysis]]
- [[symbolic execution]]
- string analysis
- [[GA (genetic algorithm)]]
- [[program slicing]]
- data flow analysis
- [[precise alias analysis]]


 [[dynamic analysis]]: examining the behavior of an application in runtime. Techniques:
- [[black-box testing]]
- [[taint tracking]]
- flow analysis
- monitoring
- filtering

**Secure programming**: ensuring that programming guidelines and rules are followed during the development of an application. Techniques:
- type system: a technique used to automatically enforce programming guidelines
- [[ELET (Embedded Language Encapsulation Type)]]

**Modelling**. Techniques and approaches: abstractions, model checking, model inference and evolutionary fuzzing, input validation, simulation, signature based model, deferred loading, one-time URLs, subdomain watching, threading, control flow graph, data mining, hybrid approach, TTCN-3, [[FSM (finite-state machine)]], primitive and advanced models

### Mitigate XSS vulnerabilities

Dynamic analysis remains the leading approach to tackle XSS vulnerabilities, with techniques such as: monitoring, taint-tracking and filtering.
- this because to eliminate the XSS issue we should patch the source code. In many case, access the source code or implementing patches can be difficult



## References
[[ref_current_state_research_xss]]