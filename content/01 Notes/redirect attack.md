---
ID: 2025-02-24-09:50
tags:
  - "#definition"
  - redirectAttack
  - cyberSecurity
---
### Open redirect attack

Unvalidated redirects and forwards are possible ==when a web application accepts untrusted input== that could cause the web application to redirect the request to a URL contained within untrusted input
- in this case, th
- By modifying untrusted URL input to a malicious site, an attacker may successfully launch a phishing scam and steal user credentials.

**Never trust input data without validation**

```java
response.sendRedirect(request.getParameter("url"));
```

---
#### References
- [[(Chen, Shi, 2018)]]
- Included in literature review, by [[(Onukrane, Skrodelis, et al., 2023)]]
- https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html