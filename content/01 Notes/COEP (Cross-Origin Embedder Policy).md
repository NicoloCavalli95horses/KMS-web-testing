---
ID: 2025-03-21-13:48
tags:
  - "#definition"
  - crossDomainPolicy
---
### Cross-Origin Embedder Policy (COEP)

Prevent a website from ==embedding resources from external domains==, unless explicitly authorized
- It is set with the HTTP header: `Cross-Origin-Embedder-Policy: require-corp`

It can protect from embedding unwanted:
- `<script src="https://example.com/script.js"></script>`
- `<img src="https://example.com/image.png">`
- `<iframe src="https://example.com"></iframe>`
- `<video>, <audio>, <link rel="stylesheet">, <object>, <embed>`


---
## References
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy