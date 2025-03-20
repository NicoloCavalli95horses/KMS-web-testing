---
ID: 2025-03-20T10:30:32.187Z
tags:
  - paper
  - redirectAttack
  - blackBoxTesting
  - Http
Project:
  - SLR
---
## Context

[[EAR (Execution After Redirect)]] is a [[redirect attack]] where unintended code is executed after a redirect.

## Approach

- We developed a black-box classification system to detect different types of EAR vulnerabilities by analyzing the HTTP response
- large-scale analysis to determine the prevalence of EARs on the Internet
- crawled 8,097,283 URLs from 255,957 domains and found 2173 security critical EARs among 416 domains

### Detecting EAR

For an HTTP response to indicate an EAR vulnerability, two things are needed:
- the response must be an HTTP redirect response
- the HTTP redirect response content must divulge confidential information about the web application

**Distinguish between vulnerable and legitimate HTTP redirect response**
- legitimate responses are often empty or simply report the current HTML of the page
- string patterns that match text commonly used in legitimate redirections can be used
- pattern are recognizable because HTTP redirect responses often respect rules

---
#### References
- [[(Payet, Doupe, et al., 2013)]]
