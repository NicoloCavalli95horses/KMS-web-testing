---
ID: 2025-04-14-10:29
tags:
  - "#definition"
  - CSRH
  - CSFR
---
## Definition

Client-side request hijacking vulnerabilities arise when attackers can ==trick the client-side JavaScript program into manipulating request-sending APIs== with attacker-controlled inputs

It is a generalization of the [[CSRF (cross-site request forgery)]] issue that consider input validation problems.

If CSRH involves URL manipulation, it is basically a reflected [[XSS (cross site scripting)]]. For example:

```js
var params = (new URL(window.location)).searchParams;
var t = params.get("request");
if(t != null && t.length){
 // post message to opener
 opener && opener.postMessage("reauthPopupOpened", t);
 // listen for signal
 window.onmessage = function(){
   if (event.origin !== opener.origin) return;
   if (event.data === "sendRequest"){
   // top-level navigation request
   document.location.assign(t);}
  }
}
```

An attacker here can craft a malicious URL making a victim performing an unintended POST request. The victim has to click on the link, for example as part of a [[phishing]] attack

## Mitigation

- These types of request hijacking attacks could be mitigated by constraining request APIs with security policies. For example, using the [[CSP (Content Security Policy)]] `connect-src` directive

---
#### References
- [[(Khodayari, Barber, et al., 2024)]]