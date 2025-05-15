---
ID: 2025-04-30T16:55:12.899Z
tags:
  - paper
  - projectSLR
  - parameterTampering
  - HTTP
  - logicVulnerability
Rank: N/A
Project:
  - SLR
---
## Context

[[parameter tampering]] attacks are dangerous to a web application whose server performs weaker data sanitization than its client

This paper presents TamperProof, a methodology and tool that offers a novel and efficient mechanism to protect Web applications from parameter tampering attacks
- TamperProof is an online defense deployed in a trusted environment between the client and server and requires no access to, or knowledge of, the server side codebase, making it effective for both new and legacy applications.

## Approach

The key idea in our approach is to dynamically infer and enforce ==sequencing, field, and value constraints== on each input submitted to the server
- sequence constraints are enforced putting an identifier in the form that submit the request. Any input that arrives at the server without such an identifier (or with a spurious identifier) is rejected. The server is expecting specific identifiers in a specific order. This is similar to the concept of [[CSRF (cross-site request forgery) token]]
- field and value constraints are enforced by versifying that every non-malicious input could have been submitted by the form associated with that input

## Evaluation

We implemented TamperProof by extending NoForge (a server-side proxy for preventing XSRF attacks) with 600 lines of PHP and 200 lines of Perl to include our algorithms
- [[benchmark testing]]: 10 medium to large PHP applications with 49 parameter tampering opportunities
- TamperProof was able to defend 100% of the known exploits

## Limits

- Dynamic approaches come at the cost of some performance
- False positives are possible if client-side validations are actually stronger than server-side validation, without a specific reason, or if client JS dynamically modifies forms or creates new input fields
- TamperProof does not currently address applications written for Web 2.0 or Web 3.0 or those that dynamically alter the client code of a web form, e.g., by employing JavaScript
- No handling of AJAX requests

---
#### References
- [[(Skrupsky, Bisht, et al., 2013)]]
