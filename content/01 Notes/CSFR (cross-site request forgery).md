---
ID: 2025-02-03-15:11
tags:
  - "#definition"
  - cyberSecurity
  - clientSideAttacks
---
## Definition

Cross-Site Request Forgery (CSRF) is an attack that forces an authenticated user to perform an unwanted action on a website they are logged in to, without their knowledge or consent
- This is possible stealing authentication cookies or [[sessions token]] of the victim [[(Tkachenko et al., 2024)]]
- ==Many websites trust requests from an authenticated browser, without checking whether the user actually intended them==

### CSRF Mechanism

- The user logs into a legitimate website (e.g., an online bank) and remains authenticated (via session cookies).
- The attacker tricks the user into visiting another malicious website (e.g., via a phishing email, deceptive link, embedded image, invisible form).
- The malicious website contains code that sends an HTTP request to the legitimate website, exploiting the user's active session.
- Since the user's browser is still authenticated, the legitimate website accepts the request as valid, performing the fraudulent action on behalf of the user.

### Risks and consequences

Common CSFR includes:
- changing user's credentials, making the account unusable for the user and stealing his identity
- sending fake transactions

### Mitigation techniques

- Using [[CSRF (cross-site request forgery) token]]
- verifying the source of the request (original header)
- limiting HTTP request methods
- using [[SameSite cookie]]

Similar to [[XSS (cross site scripting)]], but focused on performing actions on behalf of an unsuspecting user (see [[XSS and CSFR comparison]]).

---
#### References
- [[(Tkachenko et al., 2024)]]

