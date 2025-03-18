---
ID: 2025-03-18T09:07:42.050Z
tags:
  - paper
  - SocialNetworkSecurity
  - Cross-domainAttack
  - FlashSecurity
  - Http
Project:
  - SLR
---
## Context

In this paper, we present the technical background of the cross-domain mechanisms and the security implications. Several recent studies have demonstrated the weakness of the cross-domain policy, leading to [[session hijacking]] or the leakage of sensitive information

Current solutions to detect these vulnerabilities use a client-side approach.
- The purpose of our work is to present a new approach based on **network flows analysis** to detect malicious behavior

## Main ideas

- In 2012, social media were rapidly acquiring importance and became very attractive targets for cybercrimes
- [[XSS (cross site scripting)]], spam, [[phishing]] and other attacks related to [[Flash]][^1] vulnerabilities can be carried out on social media
- In 2012, Flash was used by 95% of web applications. Youtube used Flash by default and HTML5 on mobile devices
- Flash worked generating client-side requests to fetch content from various remote locations



---
#### References
- [[(Bernard, Debar, et al., 2012)]]

[^1]: Flash has been deprecated and then has been officially disabled by browser, since 2021
