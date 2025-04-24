---
ID: 2025-03-25T16:26:51.549Z
tags:
  - paper
  - PenetrationTesting
  - CSFR
  - JWT
---
Poorly written and not clear in the experimental phase

## Context

Common authentication techniques used in web applications include session-based authentication (with [[cookie]]) and token based authentication.

The purpose of this study is to perform ==penetration testing of the security of JWT token storage in cookie storage using [[CSRF (cross-site request forgery)]] techniques.==

### Session-Based Authentication

- The user sends credentials (username and password) to the server
- The server verifies the credentials and, if valid, creates a session
- The server generates a session identifier (session ID) and stores it in the database or memory
- The session ID is sent to the client in the form of a cookie
- ==On each subsequent request==, the client sends the cookie containing the session ID
- The server checks the session ID to verify if the user is authenticated. If is not, the user should be redirected to the login page

The server needs to keep a state of the user's session (*statefulness approach*), usually saving user data in a database

### Token based authentication

- The user sends credentials to the server
- The server verifies the credentials and, if valid, generates a token (it may be a random sequence of characters, or a [[JWT (JSON Web Token)]]
- The token is returned to the client and stored locally, using [[Web Storage API (localStorage, sessionStorage)]]
- On each subsequent request, the client includes the token in the HTTP request header (e.g. `Authorization: Bearer <token>`)
- The server ==validates the token without needing to maintain server-side state== (*statelessness approach*). This because the token contains all the user information, especially in the JWT case.

Token-based authentication have proved to be more performant than session-based authentication, because in the first case no session is created every time a user logs in but only the time between login and logout

## Approach

An experimental research is design to prove that is ==possible to steal a user session using the JWT token of the victim.== 
- User logs in and server sends JWT as cookie
- User visits a malicious site containing a hidden form or an automatic request to a legitimate site's API
- Browser sees JWT cookie as valid and automatically attaches it to the request, because cookies are automatically sent in requests to the domain it belongs to
- Server accepts CSRF request, because JWT is valid.
- Attacker can performs actions with victim's account (e.g. password change, transfers, etc.).

---
#### References
- [[(Darmawan, Karim, et al., 2021)]]
