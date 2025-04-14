---
ID: 2025-02-25-11:40
tags:
  - "#definition"
  - cyberSecurity
  - cookie
  - webApplication
---
## Definition

SameSite cookies are a security feature that allows website owners to specify ==how a cookie should be handled== by the browser.
- This attribute is used to protect against a type of attack called [[CSRF (cross-site request forgery)]]
- With the SameSite attribute, website owners can specify whether a cookie should be sent to the website that has the same domain (first party) or if it can be sent to websites with different domains (third party) as well

This helps to prevent unauthorized access to a website by controlling the passing of the cookie from one website to another.

In simple terms, it’s a way to limit the sharing of cookies between different websites

### Accepted values

- **Lax**: browsers will not attach cookies to requests that originate from a different site, except for [[top-level navigation]] through safe HTTP methods such as GET
- **Strict**: cookies will not be sent on any type of cross-site request.

### Drawbacks

- ==legacy browsers== do not support it
- ==do not protect from cross-origin yet same-site attack== (i.e., the target website is `banking.bank.com` and the attacker manage to compromise a sub-domain which is legitimate, such as `dev.bank.com`, and to perform an attack from the latest)
- restricting cookies to SameSite ==may hurt third-party business models==
- SameSite cookies cannot stop top-level requests including `location.assign()`  [[(Khodayari, Barber, et al., 2024)]]

---
#### References
- [[(Trampert, Stock, et al., 2023)]]
- https://www.cookieyes.com/knowledge-base/cookies-101/what-are-samesite-cookies/#:~:text=SameSite%20cookies%20are%20a%20security,Site%20Request%20Forgery%20(CSRF).