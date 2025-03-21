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

There are a number of policies that can be enabled and configured

### Same-Origin Policy (SOP)

Same-Origin Policy (SOP) is a client-side security policy, implemented by browsers, that prevents a website from accessing resources from another domain unless explicitly allowed:
- For example, if http://example.com/index.html tries to load a video from http://www.youtube.com/mov.swf, the user agent will disallow access since the domains are different. The SOP rule applies an access control to local resources (within the browser) but also to network resources.
- It is usually implemented by browsers by default and it is not easily editable
- Access is granted only if the domains share the same protocol, hostname and port [[(Trampert, Stock, et al., 2023)]]

### Cross-Origin Resource Sharing (CORS)

[[CORS (Cross-Origin Resource Sharing)]] allows a ==server to specify which external domains can access its resources==. The policy is implemented as an HTTP header. For example, if `api.example.com` wants to accept requests from `frontend.com`, the server has to include this in the HTTP header:
- `Access-Control-Allow-Origin: https://frontend.com`

### Content security policy (CSP)

[[CSP (Content-security Policy)]] was designed to prevents attacks such as [[XSS (cross site scripting)]] and data injection by ==limiting the allowed script, style or image sources== 
- `Content-Security-Policy: script-src 'self' https://trusted-cdn.com`
- can be implemented by the client, using the `meta` tag (not recommended) or using script nonce, and by the server as HTTP header

With hashes, developers can specify the cryptographic hash of their intended inline scripts in the CSP [[(Trampert, Stock, et al., 2023)]]

```html
<script nonce="ABCDEF0123456789"> benignJSFunction () ; </script >
```

The browser then determines for a given script (both inline and external) if the nonce provided in the `nonce` attribute of the `script` tag matches with the CSP-specified one.
### Cross-Origin Embedder Policy (COEP)

Prevent a website from loading resources from external domains, unless explicitly authorized
- `Cross-Origin-Embedder-Policy: require-corp`
- can be implemented by the client, using the `meta` tag (not recommended) and by the server as HTTP header

### Cross-Origin Opener Policy (COOP)

Prevent a website from cross-origin window reference manipulation ([[tabnabbing]]), isolating the current window
- `Cross-Origin-Opener-Policy: same-origin`
- can be implemented by the client, using the `meta` tag (not recommended) and by the server as HTTP header

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