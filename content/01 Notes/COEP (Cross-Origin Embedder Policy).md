---
ID: 2025-03-21-13:48
tags:
  - "#definition"
  - crossDomainPolicy
---
### Cross-Origin Embedder Policy (COEP)

COEP ensures ==that resources loaded from other sources have explicitly given permission to be embedded.==
- It is set with the HTTP header: `Cross-Origin-Embedder-Policy: require-corp`
- with COEP, you can make sure that your website would embed *only resources that have [[CORS (Cross-Origin Resource Sharing)]] or [[CORP (Cross-Origin Resource Policy)]] headers*

It can protect from embedding unwanted:
- `<script src="https://example.com/script.js"></script>`
- `<img src="https://example.com/image.png">`
- `<iframe src="https://example.com"></iframe>`
- `<video>, <audio>, <link rel="stylesheet">, <object>, <embed>`


---
## References
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy