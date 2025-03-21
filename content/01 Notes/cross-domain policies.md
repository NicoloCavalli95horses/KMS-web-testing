---
ID: 2025-03-18-11:07
tags:
  - "#definition"
  - cyberSecurity
  - clientDefense
  - crossDomainPolicy
---
## Definition

Cross-domain policy refers to restrictions that ==govern how resources ==(e.g., scripts, data, APIs) ==can be requested== from a domain other than the one where the resource originates. It is a security measure to prevent attacks.

There are a number of policies that can be enabled and configured:
- [[SOP (Same-Origin Policy)
- [[CORS (Cross-Origin Resource Sharing)]]]]
- [[CSP (Content Security Policy)]]
- [[COEP (Cross-Origin Embedder Policy)]]
- [[COOP (Cross-Origin Opener Policy)]]

### Other policies

- `Strict-Transport-Security` is a declarative header that is used by websites to force browsers to send all types of data over HTTPS [[(Aditya Sood, Richard Enbody, et al., 2011)]]

## Risks in not using cross-domain policies

The malicious exploitation of the cross-domain requests enables a range of attacks such as:
- [[XSS (cross site scripting)]]
- [[SQLIA (SQL injection attack)]]
- [[session hijacking]]
- [[CSRF (cross-site request forgery)]]
- [[clickjacking]]

---
#### References
- Discussed by [[(Bernard, Debar, et al., 2012)]]
- [[(Trampert, Stock, et al., 2023)]]