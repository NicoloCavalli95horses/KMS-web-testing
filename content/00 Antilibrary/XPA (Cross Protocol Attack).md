---
ID: "2025-04-02-15:11"
tags:
  - "#definition"
---
## Definition

XPA (Cross Protocol Attack) is a variant of [[XSS (cross site scripting)]] that aim at injecting code that is executed ==in the same domain but on different ports or protocols==

While [[SOP (Same-Origin Policy)]] blocks cross-origin requests in JavaScript (e.g., reading cookies from another domain it is not possible, by design), information stored in [[cookie]] is shared among different [[port]] on the same origin/domain. 

All of the following addresses have the same origin but a different protocol and/or a different port:
- `https://example.com` (port 443 by default)
- `http://example.com` (port 80 by default)
- `http://example.com:5000` (custom port 5000)
- `ftp://example.com` (port 21 by default)
- `ftp://example.com:2021` (custom port 2021)
- `smtp://example.com` (port 587 by default)

### What can you do with XPA?

**Read cookie in FTP from HTTP**: the [[SameSite cookie]] does not actually defend against XPA because the cookie is always accessible from the other protocols

**Send an email from HTTP to SMTP** (to verify)

```html
<textarea name="foo">
HELO example.com
MAIL FROM:<somebody@example.com>
RCPT TO:<recipient@example.org>
DATA
Subject: Hi there!
From: somebody@example.com
To: recipient@example.org
Hello world!
.
QUIT
</textarea>
```

---
#### References
- Cited as an example of session fixation where a cookie is set illegitimately, by [[(Johns, Braun, et al., 2011)]]
- https://www.startupdefense.io/cyberattacks/cross-protocol-attack
- https://img2.helpnetsecurity.com/dl/articles/hfpa.pdf
