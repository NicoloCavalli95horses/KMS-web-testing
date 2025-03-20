---
ID: 2025-02-24-09:50
tags:
  - "#definition"
  - redirectAttack
  - cyberSecurity
---
### Open redirect attack

Unvalidated redirects and forwards are possible ==when a web application accepts untrusted input== that could cause the web application to redirect the request to a URL contained within untrusted input
- in this case, the user expect a redirect, but the actual URL is hijacked
- by modifying untrusted URL input to a malicious site, an attacker may successfully launch a [[phishing]] attack

**Never trust input data without validation**

```java
response.sendRedirect(request.getParameter("url"));
```

### Hidden redirect attack

A Hidden Redirect Attack is a more sophisticated attack where the redirect is hidden so that it is less obvious to the victim. It can be done via:
- JavaScript (e.g. `window.location = "malicious-site.com"`)
- HTML metatag `<meta http-equiv="refresh">`
- Invisible Iframe or spoofed links
- Use of shortened URLs to hide the real destination

A legitimate website could contain a link like that:

```html
<a href="https://example.com/secure">Clicca qui</a>
```

But as soon as the victim clicks, an hidden redirect is executed:

```javascript
window.location.href = "https://malicious-site.com";
```

See also: [[EAR (Execution After Redirect)]]

---
#### References
- [[(Chen, Shi, 2018)]]
- Included in literature review, by [[(Onukrane, Skrodelis, et al., 2023)]]
- https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html
- [[(Payet, Doupe, et al., 2013)]]