---
ID: 2025-01-28-16:34
tags:
  - paper
  - JavaScript
  - businessFlowTampering
  - codeAnalysis
  - cyberSecurity
  - clientSideAttacks
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
- often, paywall are added on an existing codebase. To avoid expensive and risky code refactors, third-party services that rely on the client-side are used. Rewrite all the codebase from scratch maintaining the current database in order not to lose any user requires extensive effort and resources

### Examination method

1. Starting with business operation descriptions, we navigate the website and collect a set of functions that may be relevant to the business logic
2. We analyze each candidate function and look for potential tampering locations, which may perturb the intended behavior if modified
3. We develop techniques to select functions that are more likely to be vulnerable and generate tampering proposals for each selected function
4. We revisit the website with the tampering proposals and confirm if the detection results are indeed business flow tampering vulnerabilities

200 real-world website were evaluated

> [!ERROR] Client-side tampering
>  Attackers can bypass paywalls and read an unlimited number of articles without paying on NYTimes and WashingtonPost. Detected flaws on Youtube and CWTV enable attackers to skip in-stream video ads. We also discover a flaw in the popular reward-earning website InboxDollars; attackers can illegitimately earn rewards points without finishing the required steps (e.g. watch videos). In our experiments, we are able to stack $3.44 reward for an hour attack with a single machine without watching videos, and ==if we continue this attack, we could steal around $80 per day==

### Mitigation of client-side tampering

- implement more complicated authentication schemes
- deploying on-the-fly attack detection on the server-side
- performing sophisticated client-side obfuscation

### Tampering proposal generation

1. **site information collection**: by recording and inspecting user interactions we collect information about DOM objects that should be monitored for mutation event
2. **identify potential JS tampering opportunities**: we generated candidates that represent functions related to business logic
3. **vulnerability scanning by tampering testing**: false positives were excluded 

## References
[[ref_business_tampering_vulnerabilities]]
https://sites.google.com/view/tampering-cases (examples of tampering)