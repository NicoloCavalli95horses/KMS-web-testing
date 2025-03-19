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

This research is based on an analysis of the traffic flow of major bank websites in order to ==understand how declarative security is being deployed in online banking== ([[cross-domain policies]])
- Banking websites were selected from a list of the world’s top 40-plus safest banks of 2010 as provided by Global Finance
- RQ: Banks with greater assets tend to have more rigorous security mechanisms?

---
#### References
- [[(Aditya Sood, Richard Enbody, et al., 2011)]]
