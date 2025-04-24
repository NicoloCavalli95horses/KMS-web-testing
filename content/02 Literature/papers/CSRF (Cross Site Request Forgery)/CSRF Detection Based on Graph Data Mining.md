---
ID: 2025-04-02T08:57:18.900Z
tags:
  - paper
  - CSFR
  - HTTP
---
A proxy is proposed to filter HTTP requests likely related to CSRF. Simple approach and tested only on toy app (DVWA) 

## Context

[[CSRF (cross-site request forgery)]] refers to an attacker who pretends to be a legitimate user and sends a malicious request in the name of the legitimate user.

## Approach

- a proxy-server is proposed to classify HTTP requests
- user actions (URLs visited, input values), HTTP messages (analyzed with proxy2 plugin) and PHP function calls (with Xdebug lib) are analyzed by the proxy to classify the request
- graph properties are exploited to identify malicious requests

## Evaluation

[[benchmark testing]] was done on DVWA (Damn Vulnerable Web Application)
- 34 (possible) CSRF were detected

## Limits

- manual phase is required to collect user interactions
- supports only for MySQL database and PHP language
- no clear formalization of the solution, not clear how graph property were leveraged on
- poor benchmark testing
- no scalable solution

---
#### References
- [[(Liu, Shen, et al., 2020)]]
