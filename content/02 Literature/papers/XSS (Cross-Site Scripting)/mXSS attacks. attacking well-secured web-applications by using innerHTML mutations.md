---
ID: 2025-06-16T11:38:36.949Z
tags:
  - paper
  - XSS
  - mXSS
Rank: A*
---
## Context

Server- and client-side XSS filters share the assumption that their HTML output and the browser-rendered HTML content are mostly identical.
- This premise is false and can lead to a form of [[XSS (cross site scripting)]] called mutation-based XSS
- in mXSS, a harmless string that passes deployed XSS filters is transformed by filters themselves or by browser's engine into an active XSS attack vector

Mutation-based XSS (mXSS) vectors affects all major browser families.

We were able to place stored mXSS vectors in high-profile applications like Yahoo! Mail, Rediff Mail, OpenExchange, Zimbra, Roundcube, and several commercial products.

mXSS vectors bypassed
- widely deployed server-side XSS protection techniques (like HTML Purifier, kses, htmlLawed, Blueprint and Google Caja)
- client-side filters (XSS Auditor, IE XSS Filter)
- Web Application Firewall (WAF) systems
- Intrusion Detection and Intrusion Prevention Systems (IDS/IPS).

**Webmail clients**
Webmail constitutes a class of web applications particularly affected by mutation-based XSS

## Limits

Difficult to statistically evaluate the number of websites affected by this attack vectors, since automated testing fails to reliably detect all these attack prerequisites

---
#### References
- [[(Heiderich, Schwenk, et al., 2013)]]
