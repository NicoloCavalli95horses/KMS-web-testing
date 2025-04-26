---
ID: 2025-04-26T09:34:22.463Z
tags:
  - paper
  - projectSLR
  - CSFR
  - clientDefense
  - clientSideAttacks
Project:
  - SLR
---
## Context

[[CSRF (cross-site request forgery)]] is a web application attack vector that can be leveraged by an attacker to force an unwitting user’s browser to perform actions on a third party website, possibly reusing all cached authentication credentials of that user.

In 2008, the home banking website of ING Direct was found vulnerable to CSRF

Current solutions do not take into account modern web 2.0 needs, such as AJAX requests, SSO login (which implies cross-domain requests), mashup websites[^1]

**Contributions**
- A policy to prevent malicious cross-site requests, extensible at the server-side 
- Firefox extension (CsFire) to mitigate CSRF issues by blocking malicious cross-domain requests
- An estimation of the prevalence of the CSRF vulnerability in the wild

## Approach


## Evaluation


## Limits



---
#### References
- [[(De Ryck, Desmet, et al., 2010)]]

[^1]: A mashup website contains elements from different other websites, for example embedded maps, social media or payment services
