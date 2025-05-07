---
ID: 2025-04-02T12:14:43.707Z
tags:
  - paper
  - projectSLR
  - authentication
  - sessionHijacking
  - cookie
  - authenticationCookies
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
- [[XCS (Cross Channel Scripting)]] can be performed to set a [[cookie]] from a different protocol
- via **HTTP Header Injection attack**: it enables the attacker to control parts of the HTTP response header that is retrieved by the user. This in turn allows the attacker to craft a Set-[[cookie]] header which contains the fixed SID value
- legacy browser may mistakenly allow cross-origin-scripting, permitting the attacker to se the [[cookie]] from another [[domain]]

![[session_fixation_graph.png]]

## Approach

Three strategies against session fixation are proposed:

**During development**: renewing the SID after critical operations happen (login, logout, sensitive information update, etc) (preferable option)

**On a deployed application**:
- **apply a framework level fix** (if applicable): for example, for Java application based on the J2EE framework, it necessary to modify just the `web.xml` config file by adding the name of the HTTP parameter that stores the SID [[cookie]]
- **use a server-side reverse-proxy**: that intercept HTTP requests and renew the SID after critical operations (second level session identifier - PSID). This approach was tested with Python using CherryPy lib (for the client) and Urllib2 (for the server). This mitigation can be implemented in a [[WAF (web application firewall)]]

## Evaluation

An application vulnerable to session fixation (JAMWiki) was tested for the scenarios that concern a deployed application

---
#### References
- [[(Johns, Braun, et al., 2011)]]
