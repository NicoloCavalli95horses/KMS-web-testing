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

Current client-side solutions do not take into account modern web 2.0 needs, such as AJAX requests, SSO login (which implies cross-domain requests), mashup websites[^1]

**Contributions**
- A policy to prevent malicious cross-site requests, extensible at the server-side 
- Firefox extension (CsFire) to mitigate CSRF issues by blocking malicious cross-domain requests
- An estimation of the prevalence of the CSRF vulnerability in the wild

## Approach

Real-life traffic was collected from about 15 volunteers over a time period of 2 weeks, resulting in a total of 750334 requests.

| Cross-domain requests                           | GET             | POST          | Total           |
| ----------------------------------------------- | --------------- | ------------- | --------------- |
| strict SOP (same domain, protocol and TCL port) | 320529 (42.72%) | 1793 (0.24%)  | 322322 (42.96%) |
| relaxed SOP (same domain)                       | 242084 (32.26%) | 1503 (0.20%)  | 243587 (32.46%) |
| all                                             | 722298 (96.26%) | 28025 (3.74%) | 750334 (100%)   |
- POST requests are a minor part of all the requests (3.74%)
- approximately 24% of the GET requests contain parameters
- very small amount of the GET-requests, especially of the cross-domain GET requests, originate from direct user interaction
- [[cookie]] are a very popular authentication mechanism

**Policy definition**
- relaxed SOP is considered
- for cross-domain requests, cookies and auth header are stripped by every request except for a GET request initiated by the user (for example, after a click)

| Request | Properties                       | Decision |
| ------- | -------------------------------- | -------- |
| GET     | parameters                       | STRIP    |
| GET     | No parameter, user initiated     | SEND ALL |
| GET     | No parameter, not user initiated | STRIP    |
| POST    | User initiated                   | STRIP    |
| POST    | Not user initiated               | STRP     |

**Firefox extension**
- incoming HTTP requests are intercepted and analyzed
- auth information are stripped according to the policy
- an error is signaled to Firefox in case of a blocked request
- an optional server policy may be integrated by whitelisting a set of trusted domains from which to accept HTTP requests. The policy syntax is based on JSON

## Evaluation

- 59 specifically created scenario are instead of [[benchmark testing]] CsFire
- a group of 50 human tester (from which OWASP members) tried the Firefox extension during normal everyday browsing
- CsFire was able to detect the CSRF attacks

## Limits

- legitimate requests are blocked in multiple top-level domains scenarios (e.g., `google.service.com` and `google.api.com`)
- if multiple tabs are opened in Firefox and a user tries to log in to the same website twice, both the sessions are invalidated due to a default behavior of the browser
- Browser extension not available anymore

---
#### References
- [[(De Ryck, Desmet, et al., 2010)]]

[^1]: A mashup website contains elements from different other websites, for example embedded maps, social media or payment services
