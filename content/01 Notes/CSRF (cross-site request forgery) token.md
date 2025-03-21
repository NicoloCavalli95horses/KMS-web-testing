---
ID: 2025-03-21-10:05
tags:
  - "#definition"
  - CSFR
  - cyberSecurity
  - attackMitigation
---
## Definition

To mitigate [[CSRF (cross-site request forgery)]] attacks, a random token is used
- the web server generates an unique random token and sends it to the web client (i)
- when the web client submit a request, the CSRF token is included
- the server must verify that the user token matches the one that it has generated. This proves that the request was made by the user and not by an attacker
- the CSRF token, if randomly generated, cannot be guessed by an attacker. Furthermore, an attacker cannot access this token saved in the user session because browsers block the attempt to access a cookie from another domain (*same-origin policy*)

**(i) How is the token sent to the client?**
- if the client is generated server-side (PHP, Laravel), the token is embedded directly into a form
- if the client is a SPA application, the token is usually sent in an HTTP header and then saved as a session [[cookie]] or using a [[Web Storage API (localStorage, sessionStorage)]]

### Challenges

- generating unique random numbers for each request introduces additional complexity as the logic has to be maintained and tested
- many Web sites use a [[CDN (Content Delivery Network)]]. Because of caching mechanisms, the protection offered by the CSRF token is undermined in this cases, because the same token can be used by multiple applications, and used multiple times by the same user.

---
#### References
- [[(Trampert, Stock, et al., 2023)]]