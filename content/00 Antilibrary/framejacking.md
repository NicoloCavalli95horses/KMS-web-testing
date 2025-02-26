---
ID: 2025-02-26-10:24
tags:
  - "#definition"
  - clientSideAttacks
  - cyberSecurity
  - webApplication
---
## Definition

Framejacking is an attack technique that uses iframes on a web page to ==trick a user into interacting with content they shouldn't see or control==. It's a variation of clickjacking, but focuses on manipulating content that's embedded within a frame.

🔹 How does framejacking work?
The attacker embeds a legitimate web page inside an iframe (an HTML element that loads another page within a page) and overlays it with transparent or deceptive elements to manipulate the user's actions. Here are some scenarios:

Forced interaction: The user clicks a seemingly harmless button, but is actually interacting with content that's hidden in the frame, such as a payment button or a settings option.
Sensitive data exfiltration: The victim site is loaded in a frame and the content is altered using overlay techniques to trick the user into entering credentials or sensitive data.
Bypassing security restrictions: Some sites prevent direct access to certain sections (e.g. administrative settings), but if the site is loaded in an iframe on a malicious domain, the attacker may try to exploit vulnerabilities to interact with it.
🔹 Mitigations against framejacking
HTTP header X-Frame-Options: Blocks the page from being placed in an iframe. Main options:
DENY: Prevents loading in a frame entirely.
SAMEORIGIN: Allows loading only if the frame is from the same domain.
HTTP header Content-Security-Policy (CSP) with frame-ancestors: Specifies from which domains content in a frame can be loaded.
JavaScript Frame Busting: Client-side techniques to detect and prevent page loading in an iframe.
Clickjacking defenses: Implement measures such as transparency or overlays that prevent fraudulent interactions.
🔹 Difference between framejacking and clickjacking
Clickjacking: The attack relies on visual deception and overlaying elements to trick the user into performing unwanted actions.
Framejacking: The attack directly exploits iframes to manipulate external content or steal information.
Framejacking is particularly dangerous for web applications that handle sensitive data, such as home banking, online payments, and administration platforms.

---
#### References
