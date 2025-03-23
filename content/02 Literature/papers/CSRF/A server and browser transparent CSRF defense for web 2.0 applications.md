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
- the user’s browser will automatically include `bank.com`’s cookies with this request, thus enabling [[CSRF (cross-site request forgery)]]

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
- It can protect requests for
	- (i) *resources that are already present* in the web page served to a client
	- (ii) requests that are dynamically created (as a result of script execution on the client)
- It can authorize
	- (i) same-origin domain requests
	- (ii) cross-domain requests (for example, a page served by A contains a form that legitimately target a server B)
- jCSRF protects all `POST` requests automatically but does not deal with `GET` requests, which should not be vulnerable to CSRF as they (should) be free of side-effects, as per RFC2616

## Implementation overview

jCSRF operates as follows:
- Server-side, a new cookie (auth token) is added in the HTTP server response
- Client-side, a scripts is added  after the `<head>` tag to handle the auth process
- jCSRF uses the authentication token to verify that the page from which the request originated is an authorized page
	- If so, the request is forwarded to the web server
	- Otherwise, the ==request is forwarded to the server after stripping all the cookies==. This means that possibly malicious POST requests are not blocked but are sent to the server without the cookie, therefore the server itself should reject or redirect to a login page, them because are from an unauthenticated user 

### Same-origin protocol

- Initially, an authentication token needs to be issued to authorized pages. Since jCSRF permits POST requests only from authorized pages, the very first request from a user has to be a GET request. In this first GET request from the client, the auth cookie is not yet set
- The server’s response to this request is modified by jCSRF to set an auth cookie to a cryptographically secure random value
- jCSRF-proxy also injects a jCSRF-script into the response. The script will be executed browser-side and will make sure that every new POST request will have this auth cookie

### Cross-origin protocol

- Legitimate cross-origin scenarios include, for example, a website served by A, which has a form that targets server B
- JS code executing on page served by server A communicates with server B to obtain an authentication token and communicates it to jCSRF before sending the request to server A. This enables jCSRF-script to include the auth token when it makes its cross-origin request to server B


---
#### References
- [[(Pelizzi, Sekar, et al., 2011)]]
