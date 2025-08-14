---
ID: 2025-08-14-11:25
tags:
  - "#definition"
  - browserFingerprinting
  - userModels
---
## Definition

A digital fingerprint is essentially a list of characteristics that are unique to a single user, their browser, and their particular hardware setup. This includes information the browser needs to send to access websites, like the location of the website the user is requesting. But it also includes a host of seemingly insignificant data (like screen resolution and installed fonts) gathered by tracking scripts. Tracking sites can stitch all the small pieces together to form a unique picture, or "fingerprint," of your device.

In the context of browsers, fingerprinting refers to using javascript to collect a variety of information that makes you unique. Without script, sites get your IP address, `userAgent`, and not much else. If you enable script they can track your movements in a webpage, enumerate installed fonts, check your monitor size, and so on. From that they create a unique ID. They not only track you between sites but also see what you were interested in on the last webpage you visited.

---
#### References
- https://coveryourtracks.eff.org/learn
- [[(Laperdrix, Starov, et al., 2021)]]