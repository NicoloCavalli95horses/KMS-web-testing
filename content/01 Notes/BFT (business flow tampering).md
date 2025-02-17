---
ID: 2025-01-29-11:05
tags:
  - "#definition"
---
## Definition

Business flow tampering, or client-side tampering, or exploiting logical flaws, is a significant security issue in web security. Although client-side code is most often minified and obscured, it is still public and can be exploited.

### Tampering techniques

- changing the style classes
- changing the references objects (images, audio, video, etc)
- changing the source code of the page itself
- changing the interface state (or components state, in component-based GUIs)
- skip/repeat function execution
- force a conditional branch
- mix together values obtained by running several parallel sessions of the same web application
- intercept a page send by the server and modify it before the client receives it
- [[DOM clobbering]]

### Tampering consequences

- bypass [[paywalls]]
- skip advertisements
- earn reward points illegally

> [!ERROR] Client-side tampering
>  Attackers can bypass paywalls and read an unlimited number of articles without paying on NYTimes and WashingtonPost. Detected flaws on Youtube and CWTV enable attackers to skip in-stream video ads. We also discover a flaw in the popular reward-earning website InboxDollars; attackers can illegitimately earn rewards points without finishing the required steps (e.g. watch videos). In our experiments, we are able to stack $3.44 reward for an hour attack with a single machine without watching videos, and ==if we continue this attack, we could steal around $80 per day==

### Why relying on client-side logic for critical business operations?

Although [[OWASP (Open Web Application Security Project)]] strongly recommend enforcing business logic on the server-side, client-side implementation are commonly seen in practice. This because:
- in certain scenario is not feasible or would be really impractical to keep all the business logic on the back-end
- third-party integration (e.g., payment services), require the client-side to have an active role
- large scale web applications which have a huge number of users need to rely on the client-side to ease the server's work
- often, paywall are added on an existing codebase. To avoid expensive and risky code refactors, third-party services that rely on the client-side are used. Rewrite all the codebase from scratch maintaining the current database in order not to lose any user requires extensive effort and resources

### Mitigation of client-side tampering

- implement more complicated authentication schemes
- deploying on-the-fly attack detection on the server-side
- performing sophisticated client-side obfuscation

### Tools used to automate tampering

- **Greasemonkey** (https://addons.mozilla.org/it/firefox/addon/greasemonkey/)
- **Tampermonkey** (https://www.tampermonkey.net/)

---
## References
- [[(Kim, Zheng, Park, et al., 2020)]]
- [[(Pellegrino, Balzarotti, 2014)]]
- [[(Viticchie, Basile, Avancini, et al., 2016)]]
- [[(Khodayari, Pellegrino, 2023)]]
