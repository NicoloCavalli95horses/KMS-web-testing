---
ID: 2025-02-04-11:48
tags:
  - "#definition"
  - cyberSecurity
---
## Definition

Content Security Policy (CSP) is a feature that helps to prevent or minimize the risk of certain types of security threats.
- It consists of a series of instructions from a website to a browser, which instruct the browser to *place restrictions on the things that the code comprising the site is allowed to do.*
- The primary case for CSP is preventing [[XSS (cross site scripting)]] attacks by defining, for example, a limited array of paths that can be used to load a script file

A CSP can, for example:
- define the permitted sources for JavaScript files and other resources, effectively blocking loads from https://evil.example.com
- disable inline script tags
- allow only script tags which have the correct nonce or hash set
- disable inline event handlers
- disable javascript: URLs
- disable dangerous APIs like eval()

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

Client-side (not recommended), with the `<meta>` tag
  
```HTML
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://apis.example.com; style-src 'self' 'unsafe-inline';">
```

---
#### References
- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

