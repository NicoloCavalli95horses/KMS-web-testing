---
ID: 2025-05-09-11:18
tags:
  - "#definition"
  - clientSideAttacks
---
## Definition

Web Socket connection hijack can occur through:
- [[DOM clobbering]]  [[(Khodayari, Pellegrino, 2023)]]
- [[CSP (Content Security Policy)]] can constrain endpoints for asynchronous requests, `EventSource` and WebSockets to trusted domains. If bypassed, can lead to WSH [[(Stamm, Sterne, et al., 2010)]] [[(Lv, Shi, et al., 2023)]]

---
#### References
- [[(Khodayari, Pellegrino, 2023)]]
- [[(Lv, Shi, et al., 2023)]]