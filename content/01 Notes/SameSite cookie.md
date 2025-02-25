---
ID: 2025-02-25-11:40
tags:
  - "#definition"
  - cyberSecurity
  - cookie
  - webApplication
---
## Definition

SameSite cookies are a security feature that allows website owners to specify how a cookie should be handled by the browser.
- This attribute is used to protect against a type of attack called [[CSRF (cross-site request forgery)]]
- With the SameSite attribute, website owners can specify whether a cookie should be sent to the website that has the same domain (first party) or if it can be sent to websites with different domains (third party) as well

This helps to prevent unauthorized access to a website by controlling the passing of the cookie from one website to another.

In simple terms, it’s a way ==to limit the sharing of cookies between different websites.==

---
#### References
- https://www.cookieyes.com/knowledge-base/cookies-101/what-are-samesite-cookies/#:~:text=SameSite%20cookies%20are%20a%20security,Site%20Request%20Forgery%20(CSRF).