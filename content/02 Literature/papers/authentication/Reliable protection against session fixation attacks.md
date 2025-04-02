---
ID: 2025-04-02T12:14:43.707Z
tags:
  - paper
  - projectSLR
  - authentication
  - sessionHijacking
Project:
  - SLR
---
## Context

[[session hijacking]] has been known for several years. While prevention is easy during development, fixing vulnerable applications is generally non-trivial.

**Contributions**
- transparent, light-weight protection on the framework level that enable patching a web application without accessing its source code but acting to the underlying framework
- explain session fixation prevention at development phase

**Background**
Given that HTTP is stateless, client-side storage technologies such as [[cookie]] and [[Web Storage API (localStorage, sessionStorage)]] were created to store session identifiers (SID) or authentication token ([[JWT (JSON Web Token)]]).

## Approach



---
#### References
- [[(Johns, Braun, et al., 2011)]]
