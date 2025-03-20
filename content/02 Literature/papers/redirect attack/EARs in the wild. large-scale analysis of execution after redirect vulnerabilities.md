---
ID: 2025-03-20T10:30:32.187Z
tags:
  - paper
  - redirectAttack
  - blackBoxTesting
  - Http
  - webCrawler
Project:
  - SLR
---
## Context

[[EAR (Execution After Redirect)]] is a [[redirect attack]] where unintended code is executed after a redirect.

## Approach

- We developed a black-box classification system to detect different types of EAR vulnerabilities by analyzing the HTTP response
- large-scale analysis to determine the prevalence of EARs on the Internet
- crawled 8,097,283 URLs from 255,957 domains and found ==2173 security critical EARs among 416 domains==

### Detecting EAR

For an HTTP response to indicate an EAR vulnerability, two things are needed:
- the response must be an HTTP redirect response
- the HTTP redirect response content must divulge confidential information about the web application

**Distinguish between vulnerable and legitimate HTTP redirect response**
- legitimate responses are often empty or simply report the current HTML of the page
- string patterns that match text commonly used in legitimate redirections can be used
- pattern are recognizable because HTTP redirect responses often respect rules

### Classification of non-EARs

- **generic redirect**: the content of a redirect message aims to warn a user of a changed location
- **irrelevant or broken content**: here is a bit of information but it is not sensitive or relevant
- **near duplicate**: the HTTP body returned is similar to the content of the redirect location's content. A [[NCD (Normalized Compression Distance)]] is used to calculate the textual similarity

### Classification of EARs

- **error message**: some content sent by the server contains error messages, which can reveal sensitive information about the web server (paths of the server, details about the framework, the language and often the version number)
- **HTTPS redirect**: HTTP redirect response contains a full web page with sensitive content and the redirect leads to a page served through a secure channel. This is a security-critical EAR because, ==by redirecting to a secure channel, the web application is signaling that the content is sensitive==
- **Pre-login access**: HTTP redirect response redirect to a login page
- **Transparent barrier**: web application developers sometimes want the user to visit a certain page prior to allowing access to the full content of the web application. For example the user is redirected to the same page until she has “signed” a Terms of Use form.
- **Other**: body content not included in the previous categories

The classification follows a ==progressive and ordered approach,== meaning that the HTTP response is categorized on the last category whose criteria are met (if a response matches the criteria for pre-login, it is not classified as near duplicate even if both criteria are met)

![[ears_in_the_wild.png]]

---
#### References
- [[(Payet, Doupe, et al., 2013)]]
