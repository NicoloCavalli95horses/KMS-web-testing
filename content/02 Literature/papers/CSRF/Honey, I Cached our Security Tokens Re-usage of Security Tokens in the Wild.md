---
ID: 2025-03-21T09:00:37.373Z
tags:
  - paper
  - CSFR
  - CDN
Project:
  - SLR
---
## Context

With [[CSRF (cross-site request forgery)]], the attacker performs an action on a Web application on which the victim is authenticated, without the knowledge or consent of that victim. To mitigate this attack, [[CSRF (cross-site request forgery) token]] are used.

With [[CDN (Content Delivery Network)]], security tokens are often cached (accidentally or intentionally). This can highly undermines the security of the token itself, which might be used (i) by multiple applications and (ii) by the same application multiple times.

RQ: *how is randomness used on the Web to aid sites in mitigating Cross-Site Scripting and stopping Cross-Site Request Forgery attacks?*
## Approach

We measure the prevalence of reoccurring [[CSP (Content Security Policy)]] nonces and Anti-CSRF tokens for the 10,000 highest-ranking sites based on Tranco. 7210 sites were reached

## Results

- 7,210 sites we reached, only 446 sites use CSPs that include nonces (6.18%). 74 of them use nonces that are reoccuring or event static
- 1,058 sites use Anti-CSRF tokens in their Web applications. However, there are reoccurring tokens on 152 (14%) sites.
- there is a connection between reoccurring security tokens and the usage of CDNs for caching. In fact, the majority (88% for nonces, 89% for anti-CSRF) of reoccurring or static security tokens were present on websites that were likely served via a CDN
- CSRF mitigations offered by web frameworks are common, as opposed to the use of a CSP
- we noticed that cache or CDN misconfiguration is likely one of the root causes of reoccurring tokens in the wild
- all `.edu` sites have reoccurring tokens on subdomains such as events.example.edu or calendar.example.edu.
- Interestingly, CSP usage ==steadily declines with the rank of domains==. The less a website is known and visited, the less usage of CSP policy is found

## Recommendations

- CDN providers should place more emphasis on the implications of caching dynamic content
 - add caching directives via the Cache-Control header to responses to prevent dynamic content to be cached
 - responses are not cached if they contain `set-cookie` header
 - JS and CSS are cached by default, while HTML is not
 
---
#### References
- [[(Trampert, Stock, et al., 2023)]]
