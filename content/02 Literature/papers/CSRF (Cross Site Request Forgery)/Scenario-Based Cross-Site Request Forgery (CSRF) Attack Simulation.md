---
ID: 2025-03-28T09:47:59.261Z
tags:
  - paper
  - projectSLR
  - CSFR
Project:
  - SLR
---
## Context

This study explored the complexities of [[CSRF (cross-site request forgery)]] attacks through the development of a scenario-driven simulations, with the goal of raising awareness on the problem.

## Approach

Two websites were developed to test a CSRF scenario (fake_site, legitimate_site),using Flask
- A user who has an active session in the legitimate_site, visits the fake_site as a result of a [[phishing]] attack transmitted via email
- the fake_site that the user visits, launches a script that makes an unwanted request to the legitimate_site

---
#### References
- [[(Saleh, Malkawi, et al., 2024)]]
