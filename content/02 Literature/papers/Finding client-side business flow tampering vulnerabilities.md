---
ID: 2025-01-28-16:34
tags:
  - paper
  - JavaScript
  - businessFlowTampering
  - codeAnalysis
  - cyberSecurity
---
## Introduction

Exploiting client-side business logic can lead to devastating consequences:
- bypass [[paywalls]]
- skip advertisements
- earn reward points illegally

Client-side logic tampering could be automated with tools like:
- **Greasemonkey** (https://addons.mozilla.org/it/firefox/addon/greasemonkey/)
- **Tampermonkey** (https://www.tampermonkey.net/)

Although OWASP strongly recommend enforcing business logic on the server-side, client-side implementation are commonly seen in practice. 

This because:
- in certain scenario is not feasible or would be really impractical to keep all the business logic on the back-end
- third-party integration (e.g., payment services), require the client-side to have an active role
- large scale web applications which have a huge number of users need to rely on the client-side to ease the server's work

### Examination method

1. Starting with business operation descriptions, we navigate the website and collect a set of functions that may be relevant to the business logic
2. We analyze each candidate function and look for potential tampering locations, which may perturb the intended behavior if modified
3. We develop techniques to select functions that are more likely to be vulnerable and generate tampering proposals for each selected function
4. We revisit the website with the tampering proposals and confirm if the detection results are indeed business flow tampering vulnerabilities

200 real-world website were evaluated


## References
[[ref_business_tampering_vulnerabilities]]