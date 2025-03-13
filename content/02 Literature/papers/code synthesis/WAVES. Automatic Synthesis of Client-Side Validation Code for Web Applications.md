---
ID: 2025-03-13T13:50:54.107Z
tags:
  - paper
  - inputValidation
Project:
  - SLR
---
## Context

In web development often client and server are built separately, by different teams, in different programming languages and platforms. When the client and server are supposed to share application logic but do not, an “*impedance mismatch*” occurs
- [[client-side input validations]] should be in sync with server-side input validation

## Approach

Automatically examine the source code of a web application, identify the server-side input validation logic, and replicate that logic on the client. This simplifies the development process and also improve security

**WAVES (Web Application Validation Extraction and Synthesis)**: automatically synthesizes the client-side validation code through:
- 


---
#### References
- [[(Skrupsky, Monshizadeh, et al., 2012)]]
