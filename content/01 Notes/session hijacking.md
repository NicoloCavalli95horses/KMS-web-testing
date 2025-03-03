---
ID: 2025-03-03-16:54
tags:
  - "#definition"
  - cyberSecurity
  - clientSideAttacks
---
## Definition

**Session hijacking**
This is when a user’s session identifier is stolen and used by the an hacker to assume the identity of the user. The stealing of the session identifier can be executed several different ways, but [[XSS (cross site scripting)]] is the most common.

**Session fixation**
This is when an attacker is assigned a valid session identifier by the application and then feeds this session to an unknowing user.
This is usually done with a web URL that the user must click on the link:
- Once the user clicks the link and signs into the application, the a hacker can then use the same session identifier to assume the identity of the user
- This a hack also occurs when the web server accepts any session from a user and does not assign a new session upon authentication. In this case, the a hacker will use his or her own, pre-chosen session, to send to the victim.
- These a hacks work because the session identifier is allowed to be reused (or replayed) in multiple sessions.

**Session donation**
This is very similar to session fixation, but instead of assuming the identity of the user, the a hacker will feed the session identifier of the a hacker’s session to the user in hopes that the user completes an action unknowingly.
- The classic example is to feed the user a valid session identifier that ties back to the a hacker’s profile page that has no information populated
- When the user populates the form (with password, credit card info, and other goodies), the information is actually tied to the a hacker’s account

**Session ID in the URL**
This is when session identifiers are passed as URL parameters during the request and response cycle. If this functionality is present, an a hacker can feed such a URL to the user to conduct any of the a hacks described above (see also [[forced browsing]])

---
#### References
- [[(Pauli, 2013)]]