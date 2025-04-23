---
ID: 2025-02-17-13:24
tags:
  - "#definition"
  - cyberSecurity
---
## Definition

> [![[[[error]]]]] The most dangerous threat to web client-side

Man in the middle attacks (MiTM) are one of the well-known and very severe network-level security issue, even when secure communication protocol like SSL/TLS is used.

In the context of web client-side security, MiTM attacks can compromise the browser’s networking APIs.
- Modern browsers use a set of APIs to access OS level networking services
- This threat allows an attacker to intercept and modify all HTTP(s) requests and responses from a user’s browser affected by this attack
- The attacker can modify any data sent and received by the victims
- This modification can also affect TCP/IP headers: it is possible to modify IP addresses and TCP ports to redirect HTTP requests and responses to and from [[phishing]] sites controlled by the attacker. Thus, allowing theft of sensitive and confidential user’s data.
 
---
#### References
- [[(Sadqi, Maleh, 2022)]]