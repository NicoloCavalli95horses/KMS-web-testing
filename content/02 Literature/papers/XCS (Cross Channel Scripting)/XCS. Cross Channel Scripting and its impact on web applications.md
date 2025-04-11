---
ID: 2025-04-11T07:27:22.088Z
tags:
  - paper
  - projectSLR
  - XSS
  - XCS
  - embeddedSystem
  - embeddedWebServer
  - clientDefense
Project:
  - SLR
---
## Context

Electronic devices are often shipped with an embedded web server used for system management. Why providing a web UI for a fridge or a camera?
- improved UX for the client
- no need to ship a client-side software embedded in a physical screen

Securing Web applications on a consumer electronics device can be difficult due to the *large number of supported network protocols and the interactions between them.*
- a user might upload a file to a network storage using the SMB protocol, manage its permission through the web interface, and then share it with his friends via FTP

23 devices evaluated were vulnerable to several types of Web attacks, including [[XSS (cross site scripting)]] and [[CSRF (cross-site request forgery)]]
- many devices vulnerable to XSS exploiting another protocol (e.g., SNMP to HTTP). In this case, the persistent XSS was due to a [[XCS (Cross Channel Scripting)]]

## Approach

- 5 [[NAS (Network Attached Storage)]] devices were evaluated against XCS
- a browser-side mechanism is proposed to defend against certain types of XCS exploits

## Evaluation


## Results


## Limits



---
#### References
- [[(Bojinov, Bursztein, et al., 2009)]]
