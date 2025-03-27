---
ID: 2025-02-04-11:48
tags:
  - "#definition"
  - cyberSecurity
  - crossDomainPolicy
  - attackMitigation
---
## Definition

Content Security Policy (CSP) is a feature that helps to prevent or minimize the risk of certain types of security threats
- It consists of a series of instructions from a website to a browser, which ==instruct the browser to place restrictions on the things that the front-end code is allowed to do==
- It basically allows to define and control which resources (such as scripts, styles, and images) can be downloaded and executed
- The primary case for CSP is preventing [[XSS (cross site scripting)]] attacks by defining, for example, a ==limited array of paths that can be used to load a script file== (with `script-src`)
- It can be used also to defend against [[clickjacking]] or [[tabnabbing]] with `frame-ancestors 'none'`
- it is a type of [[cross-domain policies]]

A CSP can, for example:
- define the permitted sources (script, images, styles and fonts sources) 
- disable inline script tags
- allow only script tags which have the correct id or src value
- disable inline event handlers
- disable javascript: URLs
- disable dangerous APIs like `eval()`

![[CSP_directives_example.png]]
The directive `default-src` serves as a fallback for the other CSP. If there is no whitelist for other directives, the browser will get resources based on the whitelist of the  `default-src` directive [[(Lv, Shi, et al., 2023)]]

### Example

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

It sets two directives:
- `default-src` = 'self':  tells the browser to load only ==src that are same-origin with the document==, unless other more specific directives set a different policy for other resource types
- `img-src` = 'self' example.com: tells the browser to load ==images that are same-origin== or that are served from example.com.
 
### Where are the CSP defined?

Server-side, directly in `.htaccess` or `httpd.conf` files (for Apache o Nginx machines)

```txt
Header set Content-Security-Policy "default-src 'self'; script-src 'self' https://apis.example.com; style-src 'self' 'unsafe-inline';"
```


Backend code (express.js)

```Node.js
const helmet = require('helmet');

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "https://apis.example.com"],
    styleSrc: ["'self'", "'unsafe-inline'"]
  }
}));
```

Client-side (not recommended), with the `<meta>` tag. Useful in some SPA scenario when the application is pure front-end.
  
```HTML
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://apis.example.com; style-src 'self' 'unsafe-inline';">
```

### Security concerns and challenges

- The implementation of the CSP depends on the needs of the project and must be done manually
- As the project evolves, the CSP must grow in synchrony, otherwise unexpected results may occur

### Nonce

With hashes, developers can specify the cryptographic hash of their intended inline scripts in the CSP [[(Trampert, Stock, et al., 2023)]]

```html
<script nonce="ABCDEF0123456789"> benignJSFunction () ; </script >
```

The browser then determines for a given script (both inline and external) if the nonce provided in the `nonce` attribute of the `script` tag matches with the CSP-specified one.

---
#### References
- [[(Tkachenko et al., 2024)]]
- [[(Trampert, Stock, et al., 2023)]]
- [[(Lv, Shi, et al., 2023)]]
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP

