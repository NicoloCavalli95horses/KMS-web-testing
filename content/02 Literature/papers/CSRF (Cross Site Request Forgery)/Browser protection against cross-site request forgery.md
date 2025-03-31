---
ID: 2025-03-31T09:10:09.151Z
tags:
  - paper
  - projectSLR
  - CSFR
  - clientDefense
  - crossDomainPolicy
Project:
  - SLR
---
## Context

[[CSRF (cross-site request forgery)]] is a web application attack vector with which an attacker forces an unwitting user’s browser to perform actions on a third party website, possibly reusing all cached authentication credentials of that user.

In 2008, Zeller and Felten documented a number of serious CSRF vulnerabilities in high-profile websites, among which a vulnerability on the home banking website of ING Direct, which allowed an attacker to transfer funds from any user account to an account chosen by the attacker

**Contributions**
1. client-side mitigation technique against CSRF that intercepts outgoing requests within the browser and enforces a configurable cross-domain policy
2. expressive, server-side cross-domain policies to improve the accuracy of client-side policy enforcement
3. proof-of-concept Firefox extension

## Approach


---
#### References
- [[(Maes, Heyman, et al., 2009)]]
