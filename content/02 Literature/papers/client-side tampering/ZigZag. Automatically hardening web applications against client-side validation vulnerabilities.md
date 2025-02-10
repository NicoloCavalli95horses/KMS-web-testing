---
ID: 2025-02-10-10:42
tags:
  - paper
  - cyberSecurity
  - clientSideAttacks
  - inputValidation
---
## Context

The growth of the JavaScript ecosystem has created a shift in business logic from the backend to the client side. This created also new attack opportunities:
- [[C2C (client-to-client) communication]] can be exploited to get access to sensitive information
- client-side validation flaws are closely tied to the intended behavior of the system. Therefore, they are hard to identify

Client-side validation attacks are completely invisible to the server.

ZigZag is a system for hardening JavaScript-based web applications against client-side validation attacks.
- ZigZag transparently instruments (see [[instrumentation]]) client-side code to perform dynamic invariant detection over live browser executions. 
- From this, it derives models of the behavior of client-side code that capture how, and with whom, it can interact
- Using these models, ZigZag can then automatically detect deviations from these models that are highly correlated with client-side validation attacks
## Approach

ZigZag sits between web servers and browsers to instrument client-side programs. This is possible thanks to a:
- **learning phase**: ZigZag add to the client-side source code some monitoring functions to collect execution traces. From these traces, [[dynamic invariants]] or models are extracted. Instrumentation is done once and reuses of the same application are faster thanks to caching mechanisms
- **enforcement phase**: the invariants that were extracted are now hardened. The target web application is hardened, preserving the original functional behavior, but incorporating runtime checks

---
#### References
- [[ref_zigzag_web_app_csv]]
