---
ID: 2024-12-03-11:26
tags:
  - definition
  - cyberSecurity
---
## What is a session token

Session tokens are essential components of session management in web application

### Life cycle of a session token

**Token generation**
- As soon an user log in, the server identifies the user by checking username and password (or other data)
- the server generates an unique token that may include identification data (user id, role, permissions), meta data (expiring time, IAT for creation timestamp). This information may be directly coded in the token (e.g., [[JWT (JSON Web Token)]] with digital signature) or referenced (e.g., the token is just a key to access a record memorized in a database table)

**Token storage (client side)**
- the token is send by the server to the client, as part of the HTTP response
- the client stores the token, generally in a [[cookie]] or in [[LocalStorage]] or [[SessionStorage]] (not recommended because of exposure to [[XSS (cross site scripting)]]). This allows the user to avoid a manual login each time

**Subsequent requests**
- the client sends the token at each new HTTP requests (e.g., to access a particular section of the application or to get resources), usually in the header (as bearer token), or as cookie (cookies are automatically sent by the browser (no manual operation is needed)
- the server validate the token, analyzing the token integrity (the token should be signed) and the expiration time
- if the token is valid, the server uses the information embedded in the token itself (JWT case), or a reference table, to get user permissions and roles
- with the user permissions and the user roles, the server can answer the client request properly

**Token transmission**
- sessions token are transmitted on HTTPS requests to prevent [[man-in-the-middle attacks]]
- the options "secure" and "HttpOnly" prevent the client to access the cookie content with JavaScript

```
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

A cookie with the **Secure** attribute is only sent to the server with an encrypted request over the HTTPS protocol. It's never sent with unsecured HTTP, so insecure sites (with http: in the URL) can't set cookies with the Secure attribute. However, don't assume that "Secure" prevents all access to sensitive information in cookies.
- For example, someone with access to the client's hard disk (or JavaScript if the HttpOnly attribute isn't set) can read and modify the information.

A cookie with the "HttpOnly" attribute can't be accessed by JavaScript, for example using Document.cookie; it can only be accessed when it reaches the server. Cookies that persist user sessions for example should have the HttpOnly attribute set) it would be really insecure to make them available to JavaScript). This precaution helps mitigate [[XSS (cross site scripting)]].

## References

https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
https://sencode.co.uk/glossary/session-token/