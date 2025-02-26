---
ID: 2025-02-26-10:24
tags:
  - "#definition"
  - clientSideAttacks
  - cyberSecurity
  - webApplication
---
## Definition

Framejacking is an attack technique that uses iframes on a web page to ==trick a user into interacting with content they shouldn't see or control==. It's a variation of [[clickjacking]], but focuses on manipulating content that's embedded within a frame.

### How does framejacking work?

The attacker embeds a legitimate web page inside an iframe and overlays it with transparent or deceptive elements to manipulate the user's actions

- **Forced interaction**: the user clicks a seemingly harmless button, but is actually interacting with content that's hidden in the frame, such as a payment button or a settings option
- **Sensitive data exfiltration**: the victim site is loaded in a frame and the content is altered using overlay techniques to trick the user into entering credentials or sensitive data
- **Bypassing security restrictions**: Some sites prevent direct access to certain sections (e.g. administrative settings), but if the site is loaded in an iframe on a malicious domain, the attacker may try to exploit vulnerabilities to interact with it

### Mitigations against framejacking

- **HTTP header X-Frame-Options**: blocks the page from being placed in an iframe. Main options used are *DENY* (prevents loading in a frame entirely) and *SAMEORIGIN* (allows loading only if the frame is from the same domain)
- **HTTP header** [[Content-security Policy (CSP)]]: specifies from which domains content in a frame can be loaded
- **JavaScript Frame Busting**: client-side techniques to detect and prevent page loading in an iframe.
- **Custom clickjacking defenses**: Implement measures to prevent fraudulent interactions


> [!WARNING] targeted website
> Framejacking is particularly dangerous for web applications that handle sensitive data, such as home banking, online payments, and administration platforms.


---
#### References
