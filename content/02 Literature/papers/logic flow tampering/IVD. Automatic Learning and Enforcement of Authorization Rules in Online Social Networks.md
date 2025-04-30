---
ID: 2025-04-30T09:52:24.845Z
tags:
  - paper
  - projectSLR
  - dataSecurity
  - authorization
  - socialNetworkSecurity
  - parameterTampering
Project:
  - SLR
---
Collaboration with Facebook engineers to develop a tool that prevents malicious HTTP requests from accessing sensitive resources in large-scale web applications. Likely invariants are automatically identified from testing or pre-release stages to prevent authorization bugs. White-box approach that sits between back-end code and database

==Front-end software role in HTTP requests tampering==: *API discovery* (legitimate use of the web application allows an attacker to understand the arguments of requests and subsequent responses). This can be a manual trial and error process, or can be automated.

## Context

In very large scale web applications (e.g., online social networks), many types of user interactions, with different levels of permissions coexists (user, group administrators, business, etc).
- Manually maintaining and enforcing [[RBAC (role-based access control)]] rules is complicated and human errors are possible, especially with time and resource constraints

**Authorization bugs**: can lead to identity theft, data leakage, business losses, brand reputation damage.
- auth bugs are among OWASP top 10 vulnerabilities and are very easy to exploit

**Contributions**
- A scalable distributed dynamic invariant detection system for highly interconnected data
- A two-step invariant generation mechanism and a set of design and implementation choices that allow the system to scale and to achieve negligible runtime overhead
- A set of domain-specific enforcement excuses that tackle the inherent susceptibility to false positives of invariant detection systems
- Results showing that dynamic invariant detection can effectively identify incorrect authorization checks and prevent attackers from exploiting them in a real-world OSN

## Approach

- Invariant Detector (IVD) provides a safety net against missing or incorrect authorization checks, supporting the developer's job
- It mines likely invariants from legitimate *database writes*, and blocks HTTP requests which break existing invariants
- IVD has a short learning period, usually covered by internal testing, [[dogfooding]], or a pre-release period, making it ready to act by the time a new product feature is made available to users
- IVD adapt automatically to the application growth, by continuously learning invariants with no manual intervention
- Our white-box approach infers invariants at the database layer, allowing more expressiveness and unprecedented scalability

![[IVD_invariant_detector_facebook.png]]

## Evaluation


## Limits


---
#### References
- [[(Marinescu, Parry, et al., 2017)]]
