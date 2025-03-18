---
ID: 2025-01-13-13:39
tags:
  - "#definition"
  - cyberSecurity
  - testingTechniques
---
## Definition

Security testing is a process intended to detect flaws in the security mechanisms of an information system, to protect data and maintain functionality as intended.
- Passing the security testing process is not an indication that no flaws exist or that the system adequately satisfies the security requirements.

Typical security requirements may include specific elements of ==confidentiality, integrity, authentication, availability, authorization and non-repudiation==.

Actual security requirements tested depend on the security requirements implemented by the system.

### Approaches

- **security functional testing**: focuses on validating whether specified security requirements have been correctly implemented
- **security vulnerability testing**: aims to identify unintended vulnerabilities in a [[SUT (system under test)]] - defined as errors in the system design, implementation, operation, or management that can be exploited to perform improper actions in the system (e.g., collecting sensible users’ data)

 Security vulnerability testing is performed by:
 - ==simulating attacks== or conducting a [[penetration test]] to compromise the system’s security
 - ==identifying system risks and generating tests to uncover vulnerabilities ==associated with those risks

---
## References
- https://en.wikipedia.org/wiki/Security_testing
- [[(Amalfitano, Misael, et al., 2025)]]