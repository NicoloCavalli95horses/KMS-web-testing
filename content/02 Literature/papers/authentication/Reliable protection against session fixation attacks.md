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
- explain session fixation prevention at development phase
- transparent, light-weight protection on the framework level that enable patching a web application without accessing its source code but acting to the underlying framework

**Background**
Given that HTTP is stateless, client-side storage technologies such as [[cookie]] and [[Web Storage API (localStorage, sessionStorage)]] were created to store session identifiers (SID) or authentication token ([[JWT (JSON Web Token)]]).

A SID can be illegitimately set on the victim's browser:
- via [[XSS (cross site scripting)]]
- through a [[phishing]] attack
- [[XPA (Cross Protocol Attack)]] can be performed to set a cookie from a different domain (ref \[22])
- via **HTTP Header Injection attack**: it enables the attacker to control parts of the HTTP response header that is retrieved by the user. This in turn allows the attacker to craft a Set-Cookie header which contains the fixed SID value
- legacy browser may mistakenly allow cross-origin-scripting, permitting the attacker to se the cookie from another domain

## Approach



---
#### References
- [[(Johns, Braun, et al., 2011)]]
