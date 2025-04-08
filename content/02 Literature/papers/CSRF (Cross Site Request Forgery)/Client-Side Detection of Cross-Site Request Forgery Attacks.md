---
ID: 2025-04-08T10:02:33.329Z
tags:
  - paper
  - projectSLR
  - CSFR
  - clientDefense
Project:
  - SLR
---
## Context

In practice, [[CSRF (cross-site request forgery)]] attacks are mounted on top of [[XSS (cross site scripting)]] vulnerabilities.
- An XSS vulnerability allows one to inject arbitrary HTML or JS code
- JS code or HTML specific attribute values with arbitrary URLs perform then unexpected activities

**Contributions**
- Firefox extension to defend against CSRF
- benchmark test suite that can be used to emulate CSRF attacks from browsers

## Approach

prototype plug-in for the Firefox browser

## Evaluation

The plugin was evaluated on three real world programs that are vulnerable to the CSRF attacks

---
#### References
- [[(Shahriar, Zulkernine, et al., 2010)]]
