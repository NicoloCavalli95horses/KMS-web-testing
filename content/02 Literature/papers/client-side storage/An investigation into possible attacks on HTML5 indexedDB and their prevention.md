---
ID: 2025-03-17T09:18:07.851Z
tags:
  - paper
  - [[[[IndexedDB]]]]
  - clientStorageAttack
---
## Context

This paper is going to investigate possible vulnerabilities and attacks, which might be possible in HTML5’s [[IndexedDB]]. 

An important aspect of HTML5 is that the web applications can run offline using local storage. This means that ==client data can be stored on client side and accessed anytime that the application requires it==
- If a network failure occurs, the data from the database will be read and the client can still use the application offline
- Pictures and text from pages could be stored in [[IndexedDB]]

The advantage of HTML5 compared to desktop programs is that web applications do not require any installation or startup configuration and will also run on any device that supports HTML5, such as laptops, phones or tablets
## Approach

Risks and benefit of [[IndexedDB]] are highlighted. Mitigations techniques are described 

---
#### References
- [[(Kimak, Ellman, et al., 2012)]]
