---
ID: 2025-04-30T16:55:46.089Z
tags:
  - paper
  - projectSLR
  - authentication
  - logicFlaw
  - logicVulnerability
  - sessionHijacking
Rank: B
Project:
  - SLR
---
This work is a continuation of: [[Quite a mess in my cookie jar! leveraging machine learning to protect web authentication]]
## Context

**Authentication cookie**: [[cookie]] registered in response to the user presenting her authentication credentials

This cookies are the primary target of web attacks such as [[session hijacking]] 

**Defense against session hijacking**
- **HTTP-Only** flag in HTTP headers: tells the browser to prevent any access from JavaScript (server-side)
- If the server omits this flag, it can be set client-side by browser plugins, but you must detect auth cookies first (no support from the server)

Auth cookie detection: balance between security and usability
- **security**: be careful not to lose any relevant cookies
- **usability**: be careful not to overly restrict JavaScript access to cookies, as this may limit legitimate access

State of art cookie detectors just take for granted that any long cookie is an auth cookie. This can be false

**Contribution**
- design of a semi automatic method to build a ground truth of auth cookies. The output is 2464 real-world cookies derived from 215 most popular websites
- rigorous evaluation of 4 existing authentication cookie detectors. We discovered a significant degree of misclassification
- development of a set of binary classifiers aimed at automatically and accurately identifying authentication cookies, based on supervised learning techniques

Difference compared to [[(Calzavara, Tolomei, et al., 2014)]]:
- experiment performed on larger set of cookies (2465 vs 327)
- optimization of the original algorithm
- confirmation of the hypothesis according to which cookies set by JS are a minority
- optimized the [[machine learning]] approach to classify cookies

## Approach

- collecting sets of cookies from different websites (manual process that require manual login)
- marking each cookie with a binary label to identify cookie it as part of the minimum set of auth cookies, or not. An algorithm is developed to identify the minimum subset (p.9)

Login form detection (p.11): a form is a login form if contains a text/email field and a password field

## Results

Identified 255 authentication tokens distributed across 215 websites:
- 191 tokens (74.9%) contain just one cookie
- 64 tokens (25.1%) are larger. Among these, 53 tokens are composed of two cookies
- common practice for web authentication is to ==store the username in one cookie and some random session information in the other cookie==

**Evaluation of client-side auth cookie detectors** (p.14)
- SessionShield
- Serene
- CookiExt
- Zan

---
#### References
- Set of auth cookies: http://bit.ly/1u8Qfiz
- [[(Calzavara, Tolomei, et al., 2015)]]
