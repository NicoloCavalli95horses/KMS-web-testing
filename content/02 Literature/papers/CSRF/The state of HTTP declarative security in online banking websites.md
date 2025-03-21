---
ID: 2025-03-19T14:13:46.276Z
tags:
  - paper
  - XSS
  - CSFR
  - Http
Project:
  - SLR
---
## Context

The banking industry is grappling with the problem of malware infections in clients. The exploitation of web vulnerabilities in a bank’s website can expose online monetary transactions to fraud. Vulnerabilities such as [[XSS (cross site scripting)]], [[clickjacking]], MIME sniffing and [[CSRF (cross-site request forgery)]] allow information in one session to be stolen from another.

## Approach

This research is based on an analysis of the traffic flow of major bank websites in order to ==understand how declarative security is being deployed in online banking== (see [[cross-domain policies]])
- Banking websites were selected from a list of the world’s top 40-plus safest banks of 2010 as provided by Global Finance
- RQ: Banks with greater assets tend to have more rigorous security mechanisms?
- The testing involved Perl-based HTTP response enumeration scripts which sent a crafted HTTP request to the web server and detected required HTTP declarative security response headers
- They used the Firefox add-on HttpFox, which is an HTTP traffic analyser for scrutinizing the state of different HTTP headers
- The tests were conducted in Internet Explorer, Firefox and Google Chrome
- The ==outcome of this experiment is the detection of different HTTP declarative security response headers==

## Results

- At the time of running these tests, not a single bank website out of the top 50 banks is using declarative security in HTTP response headers
- A number of XSS issues were found

---
#### References
- [[(Aditya Sood, Richard Enbody, et al., 2011)]]
