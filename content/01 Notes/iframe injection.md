---
ID: 2025-04-09-09:14
tags:
  - "#definition"
  - XSS
  - iframe
---
## Definition

In this specific stored [[XSS (cross site scripting)]] attack, a popular website's input validation is bypassed to inject an iframe into a search results page.

A passing user will inadvertently load the malicious iframe, which may contain malicious code that can lead to:
- codec installation
- ActiveX objects
- [[drive-by download]]

---
#### References
-  [[(Stamm, Sterne, et al., 2010)]]