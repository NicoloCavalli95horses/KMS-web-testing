---
ID: 2025-03-03-16:54
tags:
  - "#definition"
  - cyberSecurity
  - clientSideAttacks
---
### Session hijacking (authentication [[cookie]] theft)

This is when a user’s session identifier (SID) is stolen and used by the an hacker to assume the identity of the user. The stealing of the SID can be executed several different ways, but [[XSS (cross site scripting)]] is the most common.

### Session fixation (an external SID is used)

[[(Johns, Braun, et al., 2011)]] [[(Calzavara, Tolomei, et al., 2015)]]
Session fixation is an attack in which an attacker forces a legitimate user to use a default SID chosen by the attacker. If the user authenticates with that SID, the attacker can then reuse it to take control of the authenticated session. Most session fixation rely on SID being accepted from URLs (query string) or POST data.
- the attacker has a valid SID, that ==mark his session with the target website even if he is not logged in==
- this SID may be provided by the web server, or even guessed or created by the attacker if the target application allows so
- the victim access the target application using the controlled SID[^1]. This may occur if:
	- the attacker send a [[phishing]] link to the victim. The link is a URL that contains the SID as a query string. In this case, the SID is clean and it is accepted as GET parameter
	- the malicious SID is set on the victim's browser, often via XSS[^2]. in this case, SID assignment is invisible to the victim and it is due to a [[cookie]] that has been set illegitimately
- the user clicks the link and signs into the application, creating an account with valid username and password
- the hacker ==can access the victime profile== because the victim credentials are bound to the SID
- The attacker does not need to log in again since the victim has already done so.
- The attacker only needs to provide the SID to the application (this can be requested via string query or cookie)
- if the victim logs out, the hacker can still access his profile, provided that the SID is not invalidated or re-generated

This a hack also occurs when a web server does not assign a new session upon authentication.

**Causes**
- **default server-side framework behavior**: sometimes the operation of assigning a SID to a user is handled automatic by server-side frameworks. If this systems are badly implemented and existing SID are accepted for new sessions, the attack may even go unnoticed
- **SID not renewed after authentication**: sometimes a SID is correctly assign to an unknown user when he is browsing the public part of an application, for tracking the interaction. This is true especially for large scale web application. But if the SID is not renewed/regenerated when the user change its authentication state (e.g., create a profile) a session fixation may occur

**Mitigation strategies**
- always generate new SID after critical operations happen (login, logout, sensitive information update, etc)
- obviously, only the SID should be refreshed, and not other sensitive information related to the user (e.g., the shopping cart content)
- **HTTP-Only** flag in HTTP headers: tells the browser to prevent any access from JavaScript  [[(Calzavara, Tolomei, et al., 2015)]]
-  If the server does not refresh the cookie, the attack surface for session fixation can still be significantly reduced at the client-side, by requiring that authentication cookies attached to HTTP(S) requests are only registered through HTTP(S) headers [[(Calzavara, Tolomei, et al., 2015)]]
- One-time cookie techniques and origin bound certificates make the cookie theft useless [[(Calzavara, Tolomei, et al., 2015)]]
- client-side strategies are more scalable and easier to assess in research [[(Calzavara, Tolomei, et al., 2015)]]

### Session donation

This is very similar to session fixation, but instead of assuming the identity of the user, the a hacker will feed the SID of the a hacker’s session to the user in hopes that the user completes an action unknowingly.
- The classic example is to feed the user a valid SID that ties back to the a hacker’s profile page that has no information populated
- When the user populates the form (with password, credit card info, and other goodies), the information is actually tied to the a hacker’s account

### Clear session ID in the URL (forced browsing)

This is when SID are passed as URL parameters during the request and response cycle. If this functionality is present, an a hacker can simply guess the SID of other users (see also [[forced browsing]] and [[IDOR (Insecure Direct Object Reference)]])

---
#### References
- [[(Pauli, 2013)]]
- [[(Calzavara, Tolomei, et al., 2014)]]
- [[(Calzavara, Tolomei, et al., 2015)]]
- Session fixation explained by [[(Johns, Braun, et al., 2011)]]

[^1]: That is, the victim creates a new profile using new credentials and execute a POST request that includes the new credentials and the SID controlled by the attacker

[^2]: If JavaScript can be injected, it is enough to write the SID using `[[[[cookie]]]].write()`. If JavaScript is rejected but not HTML, an attacker could inject a `<meta http-equiv="Set-Cookie">` tag
