---
ID: 2025-01-09-11:47
tags:
  - "#definition"
  - cyberSecurity
  - XSS
---
## Definition

Cross-site scripting vulnerabilities (XSS henceforth) are a security problem that occurs in web applications. They were discovered in the 1990s in the early days of the World Wide Web.

==Cross-site scripting works by manipulating a vulnerable web site so that it returns malicious JavaScript, which is served to users. When the malicious code executes inside a victim's browser, the attacker can fully compromise their interaction with the application.==
- They are among the most common and most serious security problems affecting web applications
- They are injection problems that enable malicious scripts to be injected into trusted websites
- Most of the time it is a result of a ==failed tentative to validate the user input==
- It is a very dangerous attack as it provides surface for other type of attacks [[(Malviya, Saurav, et al., 2013)]]

A XSS can be carried with different languages:
- JavaScript (most used)
- HTML and event handlers, for example: `<a href="#" onclick="alert('XSS!')">Click me</a>`
- SVG and JavaScript
- VBScript (on legacy browsers)
- Flash (ActionScript) (deprecated)
- CSS (with `expression()`, only on legacy browsers)
- Markdown: `[Click me](javascript:alert('XSS!'))
- JSONP: `<script src="https://malicious.com/api?callback=alert('XSS!')"></script>`
- WebAssembly (WASM), for example with `WebAssembly.instantiateStreaming(fetch('wasm_malicious.wasm')).then(instance => instance.exports.runXSS());`
- [[SW (Service Worker)]] and [[WW (Web Worker)]], for example with `navigator.serviceWorker.register("sw.js");`

Successful XSS can:
- steal session information stored in a [[cookie]] [[(Calzavara, Tolomei, et al., 2014)]]
- transfer private information
- hijack a user's account
- manipulate the web content
- cause a [[DoS (Denial of Service)]]
- hijack the push subscription to track the victim’s location [[(Chinprutthiwong, Vardhan, et al., 2021)]]

Only if the code is either embedded in (inline scripts) or loaded into the webpage, it will have read and write access to the contents of this webpage (e. g. session cookies, form fields, etc.)  [[(Felsch, Heiderich, et al., 2015)]]

XSS is similar to [[CSRF (cross-site request forgery)]] in that their harm may be similar, but CSFR exploits the browser's trust in the user to send malicious HTTP requests, while XSS involves code execution in the user's browser (see more on [[XSS and CSFR comparison]]).

[[RCE (Remote Code Execution)]] harms instead the server, using a combination of dangerous functions (`(eval(), exec(), system(), require()`)

## Prevalence

Two-third of all deployed web applications are vulnerable to XSS attacks, and Cisco 2018 Annual Security Report indicated that 40% of all attacks attempts lead to XSS attacks [[(Sadqi, Maleh, 2022)]] (p.18)

## Types of XSS attacks



**Indirect stored XSS or third-party XSS**
A third-party XSS can occur if a malicious API is used without sanification. If an application consume a corrupted API and displays its data without properly sanitize it, the application would execute remote code each time the API is called.

**DOM-based XSS (DOM XSS)**
 Occur when client-side JavaScript processes an input in an unsafe way, usually by writing the data back to the DOM without checking ([[sink function]])
```JavaScript
function writeToDOM() { //sink function
  const search = document.getElementById('search').value;
  const results = document.getElementById('results');
  results.innerHTML = 'You searched for: ' + search;
}
```

Since the search value is not checked, it is easy to construct a malicious value that can cause an external script to be executed:

```html
<p>You searched for:</p>
<img src=1 onerror='/* Bad stuff here... */'>
```
 
In this kind of attack the page doesn’t change but *the client side code gets executed in a different manner* because of the modification in the DOM environment [[(Malviya, Saurav, et al., 2013)]]. This mean that the DOM-based XSS is transparent to the server

This is ==the least know type of XSS==

**Induced XSS**
Induced XSS are possible in the web applications where web server present an [[HTTP Response Splitting]] vulnerability. As a result of this vulnerability, an attacker can manipulate the HTTP header of the server’s response, injecting a script
- This type of XSS is the less common [[(Malviya, Saurav, et al., 2013)]]

**Service-worker XSS**  [[(Chinprutthiwong, Vardhan, et al., 2021)]]
Service Worker XSS (SW-XSS) allows web attackers to compromise a benign service worker during the service worker registration process.

## Typical attacks

**Session hijacking** [[(Johns, Braun, et al., 2011)]]
[[session hijacking]]: the attacker can steal [[sessions token]] of premium users or admin, getting access to protected resource, or can set session identifier (SID) as cookie and perform a session fixation.
- If JavaScript can be injected, it is enough to write the SID using `cookie.write()`
- If JavaScript is rejected but not HTML, an attacker could inject a `<meta http-equiv="Set-Cookie">` tag
- This can be done with both stored and reflected XSS, provided that the victim clicks on the URL that includes the malicious executable code

**Content substitution** [[(Tkachenko et al., 2024)]]
Malicious forms or redirect pages are injected to steal user credentials 

## How to find to find XSS vulnerabilities

Multiple techniques and approaches are often used at the same time to tackle XSS issues:

**Static approaches**
[[static analysis]]: reviewing the source code of an application to find XSS issues, possibly before deploying it. Techniques:
- [[static taint analysis]] 
- [[symbolic execution]]
- string analysis
- [[GA (genetic algorithm)]]
- [[program slicing]]
- data flow analysis
- [[precise alias analysis]]

**Dynamic approaches**
 [[dynamic analysis]]: examining the behavior of an application in runtime. Techniques:
- [[black-box testing]]
- [[dynamic taint analysis]]
- flow analysis
- monitoring
- filtering

**Other approaches** [[(Malviya, Saurav, et al., 2013)]]
- [[supervised learning]] based approach can be implemented to identify reflected XSS, analyzing URLs. Training dataset can be found in: XSSed (positive example), ClueWeb09, Dmoz (negative examples)
- untrusted HTML may be sanitized using a tree-parser that creates a structured representation of the input and prunes unsafe code
- a XML document can be generated from the user input, and then validated against a XML schema on server side 

**Secure programming**
Ensuring that programming guidelines and rules are followed during the development of an application. Techniques:
- type system: a technique used to automatically enforce programming guidelines
- [[ELET (Embedded Language Encapsulation Type)]]

**Modelling**
Techniques and approaches: abstractions, model checking, model inference and evolutionary fuzzing, input validation, simulation, signature based model, deferred loading, one-time URLs, subdomain watching, threading, control flow graph, data mining, hybrid approach, TTCN-3, [[FSM (finite-state machine)]], primitive and advanced models

## Mitigate XSS vulnerabilities

Dynamic analysis remains the leading approach to tackle XSS vulnerabilities, with techniques such as: ==monitoring, taint-tracking and filtering.==
- this because to eliminate the XSS issue we should patch the source code
- In many case, access the source code or implementing patches can be difficult

#### Input sanitization

Consider all user input as a possible danger. If user input is included in HTML output, an XSS is conceivable. Input from verified and/or internal users should be handled similarly to input from the general public.

Four sanitizing methods [[(Malviya, Saurav, et al., 2013)]]:
- replacement of malicious characters  with safe ones
- removal of malicious characters
- escaping dangerous characters to prevent them from being interpreted in a wrong way
- if possible, restricting the user input to limited non-malicious options

 **Use escaping / encoding**
 Use the appropriate escaping/encoding technique, preferring pre-existing libraries rather than creating your own

 **Sanitise HTML** input
 If user input needs to contain HTML, parse and sanitise HTML using a trusted and proven library

#### Content security policy

Use a [[CSP (Content Security Policy)]] to mitigate the effects of a potential XSS problem.
- The headers `X-XSS-Protection` (now deprecated), `X-Content-Security-Policy` have been implemented in the past to sanitise reflective XSS attacks [[(Aditya Sood, Richard Enbody, et al., 2011)]]
- add a nonce (”number used once”) to a script tag and the header-delivered policy. Because those nonces are supposed to be random for each request, attackers can not guess them and thus not execute their malicious scripts. [[(Trampert, Stock, et al., 2023)]]

---
## References

- [[(Isatou, Abu Bakar, et al., 2015)]]
- [[(Krishnaraj, Madaan, et al., 2023)]]
- https://portswigger.net/web-security/cross-site-scripting#reflected-cross-site-scripting
- [[(Sadqi, Maleh, 2022)]]
- [[(Tkachenko et al., 2024)]]
- Included in literature review, by [[(Onukrane, Skrodelis, et al., 2023)]]
- [[cookie]] banners and XSS [[(Klein, Musch, et al., 2022)]]
- One of the first description of the attack [[(Watson, 2007)]]
- Unsystematic and short literature review by [[(Farah, Shojol, et al., 2016)]]
- [[(Trampert, Stock, et al., 2023)]]
- Identification of real session cookies, by [[(Calzavara, Tolomei, et al., 2014)]]
- [[(Soleimani, Hadavi, et al., 2017)]]
- Types of XSS and mitigation techniques: [[(Malviya, Saurav, et al., 2013)]]
- XSS in embedded web server, by [[(Bojinov, Bursztein, et al., 2009)]]
