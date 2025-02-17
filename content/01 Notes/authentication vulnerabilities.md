---
ID: 2025-02-12-10:09
tags:
  - "#definition"
  - cyberSecurity
  - authentication
---
Authentication vulnerabilities described by [[OWASP (Open Web Application Security Project)]]

| Name                                           | Category                              | Description                                                                                                                                                                                              |
| ---------------------------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Improper certificate validation                | Insecure Communication                | A mobile app is potentially vulnerable if the Authentication Server accepts the user auth request even if the communication with the<br>client is not established over an SSL/TSL secure<br>channel.<br> |
| Insufficient session expiration                | Insecure Communication                | A mobile app is potentially vulnerable if the auth token is not refreshed or destroyed after a long user´s<br>inactivity time                                                                            |
| Session fixation                               | Insecure Communication                | A mobile app is potentially vulnerable if the auth token is not destroyed after the user has signed out.<br>                                                                                             |
| Missing Encryption of Sensitive Data           | Insecure Communication                | A mobile application is potentially vulnerable if the auth server accepts the user auth request even if the communication with the client is not established through an HTTPS-CC protocol                |
| Auth bypass using an alternate path or channel | Insecure Authentication/Authorization | A mobile application is potentially vulnerable if it does not limit the access to functionalities and screens, collecting sensible data, for only auth users                                             |


---
#### References
- [[(Amalfitano, Misael, et al., 2025)]]