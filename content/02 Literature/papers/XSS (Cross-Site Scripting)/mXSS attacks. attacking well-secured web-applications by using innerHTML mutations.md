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
- in mXSS, a ==harmless string that passes deployed XSS filters is transformed by filters themselves or by browser's engine into an active XSS attack vector==

Mutation-based XSS (mXSS) vectors affects all major browser families.

We were able to place stored mXSS vectors in high-profile applications like Yahoo! Mail, Rediff Mail, OpenExchange, Zimbra, Roundcube, and several commercial products.

mXSS vectors bypassed
- widely deployed server-side XSS protection techniques (like HTML Purifier, kses, htmlLawed, Blueprint and Google Caja)
- client-side filters (XSS Auditor, IE XSS Filter)
- Web Application Firewall (WAF) systems
- Intrusion Detection and Intrusion Prevention Systems (IDS/IPS).

**Webmail clients**
Webmail constitutes a class of web applications particularly affected by mutation-based XSS, because they visualize HTML provided by the sender of the email.
- collaborative editing of complex HTML based documents are also vulnerable to mXSS

> [!NOTE] mXSS due to performance-enhancement actions
> Performance-enhancement peculiarities present in all major browsers mutate a given HTML string before it is rendered. This can be exploited to bypass XSS filters, leading to external JavaScript being executed

These performance-enhancement may include:
- removing empty CSS classes
- resolving HTML entities
- extra white space is removed

**New tags**
`innerHTML` access to an unknown DOM elements may cause mutations and unsolicited JavaScript execution

```txt
<!-- Attacker input -->
<article xmlns ="urn:img src=x onerror=xss()//" >123

<!-- Browser Output -->
<img src=x onerror=xss()//:article xmlns="urn:img src=x onerror=xss()//">123 </img src=x onerror=xss()//: article>
```

In order to initiate the mutation, ==all of the exploits shown here require a single access to the innerHTML property of a surrounding container==
## Approach

We propose and evaluate an in-browser protection script, entirely composed in JavaScript, which is practical, feasible and has low-overhead.

With this script, a web application developer can implement a fix against mXSS attacks without relying on server-side changes or browser updates

## Limits

Difficult to statistically evaluate the number of websites affected by this attack vectors, since automated testing fails to reliably detect all these attack prerequisites

---
#### References
- [[(Heiderich, Schwenk, et al., 2013)]]
