---
ID: 2025-03-24-16:07
tags:
  - "#definition"
  - cyberSecurity
  - Http
---
## Definition

Standard web browsers attach all the cookies registered by a given domain to any HTTP(S) request transmitted to that domain.

Thus, ==whenever a page loaded over HTTPS retrieves additional contents (e.g., an image) through an HTTP connection to the same domain, authentication cookies are leaked over HTTP== to any attacker who is able to eavesdrop the unencrypted web traffic

The `Secure` flag can be used by a web server to designate a cookie that should only be sent over HTTPS connections and never be attached to HTTP requests

Similarly to the `HTTP-Only` flag, the `Secure` flag can be selectively applied to authentication cookies at the client-side, thus achieving additional protection against powerful network attackers

---
#### References
- [[(Calzavara, Tolomei, et al., 2014)]]