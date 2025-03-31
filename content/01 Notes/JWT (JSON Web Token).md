---
ID: 2025-03-25-17:35
tags:
  - "#definition"
  - JWT
---
## Definition

JWT is a JSON-based credential that provides an open and secure way to represent claims between two parties cryptographically signed design not to be counterfeited.

In token-based authentication:
- The user sends credentials to the server
- The server verifies the credentials and, if valid, generates a token (it may be a random sequence of characters, or a JWT token)
- The token is returned to the client and stored locally, using [[Web Storage API (localStorage, sessionStorage)]]
- On each subsequent request, the client includes the token in the HTTP request header (e.g. `Authorization: Bearer <token>`)
- The server validates the token without needing to maintain server-side state  (*statelessness approach*). This because the token contains all the user information, especially in the JWT case.

---
#### References
- [[(Darmawan, Karim, et al., 2021)]]