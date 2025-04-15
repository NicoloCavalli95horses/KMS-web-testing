---
ID: 2025-04-15-16:39
tags:
  - "#definition"
  - XSS
---
## Definition

A third-party XSS can occur if a malicious API is used without sanification. If an application consume a corrupted API and displays its data without properly sanitize it, the application would execute remote code each time the API is called.