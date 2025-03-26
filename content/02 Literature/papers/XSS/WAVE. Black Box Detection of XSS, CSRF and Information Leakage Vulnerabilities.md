---
ID: 2025-03-26T09:59:07.436Z
tags:
  - paper
  - projectSLR
  - XSS
  - CSFR
Project:
  - SLR
---
Poorly written and not clear. The WAVE tool needs manual intervention in the crawling phase, necessary to discover the endpoints. Several initial information about the [[SUT (system under test)]] are required. WAVE is a server proxy that analyzes the HTTP traffic, modifies parameters in POST requests and evaluate the server response.
## Context

In this paper we propose a [[black-box testing]] method to detect web application vulnerabilities including [[XSS (cross site scripting)]], [[CSRF (cross-site request forgery)]] and information leakage, for which existing vulnerability scanners have little power to detect.

## Approach

We focus on information flow between users to assess the presence of vulnerabilities. To find information flow between users of a web application we need to know which user, in which page of the application, can generate an input and which users, in which page, can see the input. Three flows are considered:
- Information flow between different parameters of a user (between web pages of one user)
- Information flow between two users of the same role
- Information flow between two different roles

For each of these scenarios, a malicious input is created (using special characters or characters that may be a role in a XSS attack). 

Web server's reaction to these illegal expressions is analyzed. If dangerous characters are not sanitized or deleted, a vulnerability is found.

The "originality" of the authors approach is that while usually web vulnerability scanners inject malicious code and analyze the web server response, they inject just specific special characters 

To defend against CSFR, the authors propose to check whether a web server regenerate a session token after a logout is carried out

## Evaluation

For evaluation we used three web applications including GetBoo, Yazd, and WebCalendar, for traffic generation. Then, we analyzed these applications and found their vulnerabilities with WAVE. Also, we used Acunetix (version 10.0) as a well-known web vulnerability scanner. Finally, we manually checked vulnerabilities reported by the tools

---
#### References
- [[(Soleimani, Hadavi, et al., 2017)]]
