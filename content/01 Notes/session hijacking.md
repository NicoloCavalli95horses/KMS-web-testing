---
ID: 2025-03-03-16:54
tags:
  - "#definition"
  - cyberSecurity
  - clientSideAttacks
---
### Session hijacking by cookie theft

This is when a user’s session identifier is stolen and used by the an hacker to assume the identity of the user. The stealing of the session identifier can be executed several different ways, but [[XSS (cross site scripting)]] is the most common.

### Session fixation

Session fixation is an attack in which an attacker forces a legitimate user to use a default session ID chosen by the attacker. If the user authenticates with that session ID, the attacker can then reuse it to take control of the authenticated session. Most session fixation rely on session identifiers being accepted from URLs (query string) or POST data.
- the attacker has a valid session ID, that ==mark his session with the target website even if he is not logged in==
- this session ID may be provided by the web server, or even guessed/created by the attacker
- the attacker send a [[phishing]] link to the victim. The link is a URL that contains the session ID as a query string
- the user clicks the link and signs into the application, creating an account with valid username and password
- the hacker ==can access the victime profile== because the victim credentials are bound to the session ID
- if the victim logs out, the hacker can still access his profile, provided that the session ID is not invalidated or re-generated

This a hack also occurs when a web server does not assign a new session upon authentication.

**Mitigation strategies**
- always generate new session ID after critical operations happen (login, logout, sensitive information update, etc)

### Session donation

This is very similar to session fixation, but instead of assuming the identity of the user, the a hacker will feed the session identifier of the a hacker’s session to the user in hopes that the user completes an action unknowingly.
- The classic example is to feed the user a valid session identifier that ties back to the a hacker’s profile page that has no information populated
- When the user populates the form (with password, credit card info, and other goodies), the information is actually tied to the a hacker’s account

### Clear session ID in the URL (forced browsing)

This is when session identifiers are passed as URL parameters during the request and response cycle. If this functionality is present, an a hacker can simply guess the user ID of other users (see also [[forced browsing]])

---
#### References
- [[(Pauli, 2013)]]
- [[(Calzavara, Tolomei, et al., 2014)]]