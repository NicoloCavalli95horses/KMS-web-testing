---
ID: 2025-03-21T15:31:55.878Z
tags:
  - paper
  - CSFR
  - attackMitigation
  - SOP
Project:
  - SLR
---
## Context

The [[SOP (Same-Origin Policy)]], enforced by browsers, ensures confidentiality of cookies: in particular, it prevents one web site (say, `evil.com`) from reading or writing cookies for another site (say, `bank.com`). However, browsers enforce *no restrictions on outgoing requests*:
- if a user visits `evil.com`, possibly because of a [[phishing]] email, a script on this page can send a request to `bank.com`
- Moreover, the user’s browser will automatically include `bank.com`’s cookies with this request, thus enabling [[CSRF (cross-site request forgery)]]

Existing CSRF defenses suffer from one or more of the following drawbacks:
- *need for programmer effort and or server-side modification*
- *incompatibility with existing browsers*
- *inability to protect dynamically generated requests* (requests that are the output of a JavaScript function)
- *lack of support for legitimate cross-origin request* (sometimes a cross-origin request is legitimate and you don't want to stop it)
## Approach

- jCSRF, is implemented in the form of a server-side proxy
- jCSRF operates by interposing transparently on the communication between clients and servers, modifying them as needed to protect against CSRF attacks
- ==it avoids any need for server-side changes== but simply add extra-functionality on top of the existing server-side implementation
- ==jCSRF also avoids client-side changes== by implementing client-side processing using a *script that it injects* into outgoing pages
- It can protect requests for *resources that are already present* in the web page served to a client, as well as *requests that are dynamically constructed* subsequently within the browser by scripts
- It incorporates a new protocol that enables support of legitimate cross-domain requests
- jCSRF protects all `POST` requests automatically but does not deal with `GET` requests, which should not be vulnerable to CSRF as they (should) be free of side-effects, as per RFC2616

## Implementation

- When an HTML page is served by a web server that use jCSRF, jCSRF injects some JavaScript code into this page, adding it immediately after the `<head>` tag
- A new cookie (auth token) is added in the HTTP server response (unless it already exists), giving the client a way to identify itself as a legitimate user in subsequent same-origin requests
- jCSRF verify the authentication token for each POST requests, to assess if the page from which the request originated is an authorized page
	- If so, the request is forwarded to the web server
	- Otherwise, the request is forwarded to the server ==after stripping all the cookies.== This means that possibly malicious POST requests are not blocked but are sent to the server without the cookie, therefore the server itself should reject them because are from an unauthenticated user 
- to allow legitimate cross-origin POST requests, ... TO DO (p. 5)

---
#### References
- [[(Pelizzi, Sekar, et al., 2011)]]
