---
ID: 2025-02-03-15:11
tags:
  - "#definition"
  - cyberSecurity
  - clientSideAttacks
  - CSFR
---
## Definition

Cross-Site Request Forgery (CSRF) is an attack that forces an authenticated user to perform an unwanted action on a website they are logged in to, without their knowledge or consent
- This is possible exploiting authentication cookies or [[sessions token]] of the victim [[(Tkachenko et al., 2024)]]
- ==Many websites trust requests from an authenticated browser, without checking whether the user actually intended them==

### CSRF Mechanism

- The user logs into a legitimate website (e.g., bank.com) and remains authenticated (via session cookies).
- The attacker tricks the user into visiting another malicious website (e.g., via a [[phishing]] email, deceptive link, embedded image, invisible form).
- The malicious website contains code that sends an HTTP request to the legitimate website (bank.com), exploiting the user's active session. The HTTP request ==will automatically attach the session cookie, therefore the attacker does not have even to know it== (unless [[SameSite cookie]] are activate, which is only true in Chrome by now)
- Since the user's browser is still authenticated, the legitimate website accepts the request as valid, performing the fraudulent action on behalf of the user.

### How can the attacker know what HTTP request to send?

The hacker has to know pretty well the API structure of the target website in order to make the right HTTP request that will, for example, execute an unwanted transaction. This is possible because:
- he is using the website bank.com himself, so he can see what API are used
- he has reverse engineered the website's API structure
- he has access to technical documentation of the target website 
- he exploits common pattern such as `POST /update_profile`
- In case of private cloud CCI, the URL can be retrieved by reading company documentation, emails, or public discussion forums [[(Felsch, Heiderich, et al., 2015)]]

The attack does not have to exploit complex HTTP request configuration but it might be possible to just include this to the malicious (phishing) website [[(Felsch, Heiderich, et al., 2015)]]

```html
<img src="https://banca.com/transfer?amount=5000&to_account=123456">
```

### CSRF variants

**Login CSRF** [[(Trampert, Stock, et al., 2023)]]
- the attacker forces the victim to log into the attacker’s account on some service. While this may sound counterintuitive initially, it allows the attacker to track their victim’s activities, e.g., following their search history, since that history is now tied to the attacker’s account.

### Risks and consequences

Common CSFR includes:
- changing user's credentials, making the account unusable for the user and stealing his identity
- sending unwanted transactions

### Mitigation techniques

- Using [[CSRF (cross-site request forgery) token]], which are in essence random values embedded into form fields. If the server does not receive the token that expects, the HTTP request is rejected
- verifying the source of the request (original header)
- limiting HTTP request methods
- using [[SameSite cookie]]
- closing all the tabs except for the one you are using may be an effective mitigation strategy, but ==if you landed on a malicious website *before* reaching the target, malicious HTTP requests may have been hidden and then executed in the background (this can be done with a [[service worker]])==

Similar to [[XSS (cross site scripting)]], but focused on performing actions on behalf of an unsuspecting user (see [[XSS and CSFR comparison]]).

---
#### References
- [[(Tkachenko et al., 2024)]]
- Included in literature review, by [[(Onukrane, Skrodelis, et al., 2023)]]
- Unsystematic and short literature review by [[(Farah, Shojol, et al., 2016)]]
