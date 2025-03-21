---
ID: 2025-03-21T09:00:37.373Z
tags:
  - paper
  - CSFR
Project:
  - SLR
---
## Context

With [[CSRF (cross-site request forgery)]], the attacker performs an action on a Web application that the victim is authenticated on without the knowledge or consent of that victim. To mitigate this attack, [[CSRF (cross-site request forgery) token]] are used.

With [[CDN (Content Delivery Network)]], security tokens are often cached (accidentally or intentionally). This can highly undermines the security of the token itself, which might be used (i) by multiple applications and (ii) by the same application multiple times.

## Approach

We measure the prevalence of reoccurring CSP nonces and Anti-CSRF tokens for the 10,000 highest-ranking sites based on Tranco

### Results

- 10-15% of the studied websites have reoccurring tokens
- we noticed that cache or CDN misconfiguration is likely one of the root causes of reoccurring tokens in the wild

---
#### References
- [[(Trampert, Stock, et al., 2023)]]
