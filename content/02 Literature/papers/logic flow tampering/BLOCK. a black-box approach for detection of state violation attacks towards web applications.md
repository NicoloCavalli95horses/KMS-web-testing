---
ID: 2025-04-30T16:52:29.755Z
tags:
  - paper
  - projectSLR
  - sessionHijacking
  - logicVulnerability
  - logicFlaw
Rank: A
Project:
  - SLR
---
## Context

Two classes of vulnerabilities
- input validation attacks, which exploit the application’s insufficient or erroneous sanitization of user inputs, allowing malicious code to be injected
- state violation attacks, which exploit [[logic vulnerability]] 

Malicious HTTP requests can lead to
- authentication bypass or [[session hijacking]]
- parameter manipulation ([[parameter tampering]])
- [[logic workflow bypass]]
## Approach

The key idea of BLOCK is to infer the intended behavior model of the web application (i.e., specification) by observing the web request/response sequences and their associated session variable values during attack-free executions. Then, the inferred model is used for evaluating web requests and responses at runtime, combining with current session information
- Any web request or response that violates the model is identified as a potential state violation attack and blocked

## Evaluation

Set of open source web applications is used for [[benchmark testing]]

## Limits

BLOCK only observes and models the relations between web requests, web responses and the session variables. Thus it cannot handle the attacks that violate the persistent states that exist in database tables

---
#### References
- [[(Li, Xue, et al., 2011)]]
