---
ID: 2025-01-09-11:47
tags:
  - "#definition"
  - cyberSecurity
  - XSS
  - clientSideAttacks
  - webApplication
---
## Definition

Cross-site scripting vulnerabilities (XSS henceforth) are a security problem that occurs in web applications. They were discovered in the 1990s in the early days of the World Wide Web, but became publicly known only in the early 2000s.

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

## Consequences

- steal session information stored in a [[cookie]] [[(Calzavara, Tolomei, et al., 2014)]]
- transfer private information
- hijack a user's account
- manipulate the web content
- cause a [[DoS (Denial of Service)]] or [[DDoS (Distributed Denial of Service)]]
- hijack the push subscription to track the victim’s location [[(Chinprutthiwong, Vardhan, et al., 2021)]]
- the biggest danger behind XSS vulnerabilities is the ability to propagate from user to user. When the main purpose of the attack is to damage more users, and the XSS tries to automatically infect others, the XSS issue is usually called "worm"

Only if the code is either embedded in (inline scripts) or loaded into the webpage, it will have read and write access to the contents of this webpage (e. g. session cookies, form fields, etc.)  [[(Felsch, Heiderich, et al., 2015)]]

XSS is similar to [[CSRF (cross-site request forgery)]] in that their harm may be similar, but CSFR exploits the browser's trust in the user to send malicious HTTP requests, while XSS involves code execution in the user's browser (see more on [[XSS and CSFR comparison]]).

[[RCE (Remote Code Execution)]] harms instead the server, using a combination of dangerous functions (`(eval(), exec(), system(), require()`)

## Causes/preconditions

- **Injectability**: an attackers has to find and exploit an insufficient input validation (see [[string validation]]), from text, file, media or URL input fields. The more interactive an application is, the more attack vectors are possible
- **Executability**: the execution of the cross-domain script mustn't be blocked
- **Security bypass**: all the different layers of protection must be bypassed by an attacker to successfully launch an XSS (e.g., [[CSP (Content Security Policy)]])
- **Social engineering**: in case of reflected XSS, a victim has to be tricked to click on a malicious link containing the script
- **Server-side logic flaws**: in case of stored XSS, a database has to correctly store the malicious script

Example of entry points from 
[[(Upasana Sarmah, D.K. Bhattacharyya, et al., 2018)]] (pag.12-13):

````tabs
tab: URL manipulation
There are several possible ways by which the attacker may craft a malicious script in a URL:
- raw script inclusion: `https://example.com?topic=<script>alert(1)</script>`
- obfuscated URL query: `https://example.com?topic=%3C%73%33...`
- shortened URL: `https://bit.ly/32wedcaS`


tab: HTML tags
- img: `<img src="javascript:alert(’XSS′);">`
- script tag: `<script src='http://evil/xss.js?'>`
- title tag
- input tag
- body tag
- bgsound tag
- a and link tags
- style tag
- meta tag
- iframe and frame tags
- table, td tags
- div tag
- base tag
- object, embed tags

tab: event handlers
A number of event handlers can be exploited to execute JavaScript in specific situations:
- window event attributes
- form event attributes
- keyboard events
- mouse events
- drag events
- clipboard events
- media events
````
## Attack example

[[session hijacking]]: the attacker can steal [[sessions token]] of premium users or admin, getting access to protected resource, or can set session identifier (SID) as cookie and perform a session fixation [[(Johns, Braun, et al., 2011)]].
- If JavaScript can be injected, it is enough to write the SID using `cookie.write()`
- If JavaScript is rejected but not HTML, an attacker could inject a `<meta http-equiv="Set-Cookie">` tag
- This can be done with both stored and reflected XSS, provided that the victim clicks on the URL that includes the malicious executable code

## Prevalence

Two-third of all deployed web applications are vulnerable to XSS attacks, and Cisco 2018 Annual Security Report indicated that 40% of all attacks attempts lead to XSS attacks [[(Sadqi, Maleh, 2022)]] (p.18)

The number of XSS vulnerabilities have increased over the last years [[(Upasana Sarmah, D.K. Bhattacharyya, et al., 2018)]]. 199 million unique malicious URLs were found in 2019

## Types of XSS attacks

````tabs

tab: DOM-based XSS (DOM XSS)
Occur when client-side JavaScript processes an input in an unsafe way, usually by writing the data back to the DOM without checking ([[sink function]]). Attacks of this category differ significantly from the others mainly because of some vulnerabilities in the script interpreter of the client's browser. With DOM XSS, the DOM structure of the target application is modified.
<br />
```JavaScript
function writeToDOM() { //sink function
  const search = document.getElementById('search').value;
  const results = document.getElementById('results');
  results.innerHTML = 'You searched for: ' + search;
}
```
<br />
Since the search value is not checked, it is easy to construct a malicious value that can cause an external script to be executed:
<br />

```html
<p>You searched for:</p>
<img src=1 onerror='/* Bad stuff here... */'>
```

<br />In this kind of attack the page doesn’t change but *the client side code gets executed in a different manner* because of the modification in the DOM environment [[(Malviya, Saurav, et al., 2013)]]. On top of that, objects such as `document.url`, `document.location`, `document.referrer`, `location.href` or `window.location` may be exploited. This mean that the DOM-based XSS is transparent to the server.
<br />This is the least know type of XSS



tab: Reflected (I order) XSS
Reflected XSS is the simplest variety of cross-site scripting. It arises when an application ==receives an input and use that input without checking it==.
<br />For example, a website that implement search functionalities may use the URL as entry point to perform the search. By appending `?search=<script>alert(1)</script>`:
- if the vulnerable application ==use the URL parameters without sanification==, the script included in the URL is executed
- The script can retrieve any information or perform any action the user is allowed to perform.

Most of the literature has studied on this type of issues. If the user is presented with the dangerous link in an email, for example, this scenario is also called [[phishing]].
<br />`location.assign()` accepts URLs with the javascript scheme, which enables attackers to escalate request API hijacking to arbitrary client-side code execution if there is no or improper input validation [[(Khodayari, Barber, et al., 2024)]].

<br />**Real-world example from [[(Felsch, Heiderich, et al., 2015)]]**
In Sunstone, every account can choose a display language. This choice is stored as an account parameter (e. g. for English `LANG=en_US`). In Sunstone, ==the value of the LANG parameter is used to construct a script tag that loads the corresponding localization script==. For English, this creates the following tag:
<br />
``` JS
<script src="locale/en_US/en_US.js?v=4.6.1" type="text/javascript"> </script>
```  

<br />Setting the LANG parameter to a different string directly manipulates the path in the script tag. By setting the LANG parameter to `LANG="onerror =alert(1)//`, the resulting script tag looks as follows:
<br />
``` JS
<script src="locale/" onerror=alert(1) </script>
```

<br />For the web browser, this is a command to fetch the script locale/ from the server. However, this URL points to a folder, not a script. Therefore, what the server returns is no JavaScript. For the browser, this is an error, so the browser executes the JavaScript in the onerror statement: `alert(1)`.<br />

<br />URL parameters is not the only entry point for reflected XSS. You can exploit basically every input provided by the user:
- ==File upload==: a file that include malicious code can be uploaded successfully and bypass the checks. For example, it is possible to embed a `<script>` inside a SVG file
- ==Header HTTP==: the user agent may be modified as `Mozilla/5.0 <script>alert(1)</script>`
- ==Form inputs==: fields such as `username`, `email`, `message` could be exploited to execute JS
- ==Websockets==: some WS endpoints may read and parse data without escaping



tab: Stored (persistend or II order) XSS
Stored (persistent or II order) XSS occur when the system does not validate user input provided from message forums or comment sections, malicious inputs can be stored in the vulnerable app's database.

The malicious code is then executed by each new visiting user.
- This is the most dangerous XSS attack because the ==attack is self-contained and there is no need to find external ways to spread the attack to other users.== The user's browser can execute the malicious code by mistake, by landing in the comments section where it is present



tab: XCS (Cross Channel Scripting) XSS
A variant of a stored XSS can be found in [[XCS (Cross Channel Scripting)]], where different protocols are used to inject malicious code into a web application. It can be considered as a special type of reflected XSS.



tab: indirect stored (third party) XSS
A third-party XSS can occur if a malicious API is used without sanification. If an application consume a corrupted API and displays its data without properly sanitize it, the application would execute remote code each time the API is called.



tab: induced XSS
Induced XSS are possible in the web applications where web server present an [[HTTP Response Splitting]] vulnerability. As a result of this vulnerability, an attacker can manipulate the HTTP header of the server’s response, injecting a script
- This type of XSS is the less common [[(Malviya, Saurav, et al., 2013)]]



tab: SW (service worker) XSS (SW-XSS)
Service Worker XSS (SW-XSS) allows web attackers to compromise a benign service worker during the service worker registration process [[(Chinprutthiwong, Vardhan, et al., 2021)]].
````
## How to find to find XSS vulnerabilities

Multiple techniques and approaches are often used at the same time to tackle XSS issues:

````tabs
tab: static approaches
[[static analysis]]: reviewing the source code of an application to find XSS issues, possibly before deploying it. Techniques:
- [[static taint analysis]] 
- [[symbolic execution]]
- string analysis
- [[GA (genetic algorithm)]]
- [[program slicing]]
- data flow analysis
- [[precise alias analysis]]

tab: dynamic approaches
[[dynamic analysis]]: examining the behavior of an application in runtime. Techniques:
- [[black-box testing]]
- [[dynamic taint analysis]]
- flow analysis
- monitoring
- filtering

tab: mixed approaches
By [[(Malviya, Saurav, et al., 2013)]]:
- [[supervised learning]] based approach can be implemented to identify reflected XSS, analyzing URLs. Training dataset can be found in: XSSed (positive example), ClueWeb09, Dmoz (negative examples)
- untrusted HTML may be sanitized using a tree-parser that creates a structured representation of the input and prunes unsafe code
- a XML document can be generated from the user input, and then validated against a XML schema on server side 

tab: secure programming
Ensuring that programming guidelines and rules are followed during the development of an application. Techniques:
- type system: a technique used to automatically enforce programming guidelines
- [[ELET (Embedded Language Encapsulation Type)]]

````

## Detection approaches

Three categories of detection can be identified [[(Upasana Sarmah, D.K. Bhattacharyya, et al., 2018)]]
- **client-side approaches**: detection measures may be embedded in the form of filters in the client browsers, or set up as [[proxy server]] with defined rules (pag.15-19)
- **server-side approaches**: incorporated on the web server or set up as [[reverse proxy]] (pag.19-24)
- **hybrid approaches**: combine both client and server solutions (pag.24)

Machine learning based techniques have also gained popularity lately

## Mitigate XSS vulnerabilities

````tabs
tab: input sanitization
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

tab: Content Security Policy (CSP)
Use a [[CSP (Content Security Policy)]] to mitigate the effects of a potential XSS problem.
- The headers `X-XSS-Protection` (now deprecated), `X-Content-Security-Policy` have been implemented in the past to sanitise reflective XSS attacks [[(Aditya Sood, Richard Enbody, et al., 2011)]]
- add a nonce (”number used once”) to a script tag and the header-delivered policy. Because those nonces are supposed to be random for each request, attackers can not guess them and thus not execute their malicious scripts. [[(Trampert, Stock, et al., 2023)]]
````
Dynamic analysis remains the leading approach to tackle XSS vulnerabilities, with techniques such as: ==monitoring, taint-tracking and filtering.==
- this because to eliminate the XSS issue we should patch the source code
- In many case, access the source code or implementing patches can be difficult

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
- comprehensive survey about XSS, by [[(Upasana Sarmah, D.K. Bhattacharyya, et al., 2018)]]
