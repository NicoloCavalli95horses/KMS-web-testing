---
ID: 2025-01-09-11:47
tags:
  - "#definition"
  - cyberSecurity
---
## Definition

Cross-site scripting vulnerabilities (XSS henceforth) are a security problem that occurs in web applications. They were discovered in the 1990s in the early days of the World Wide Web.

==Cross-site scripting works by manipulating a vulnerable web site so that it returns malicious JavaScript, which is served to users. When the malicious code executes inside a victim's browser, the attacker can fully compromise their interaction with the application.==
- They are among the most common and most serious security problems affecting web applications
- They are injection problems that enable malicious scripts to be injected into trusted websites
- Most of the time it is a result of a ==failed tentative to validate the user input==

Successful XSS can:
- steal session information stored in a [[cookie]]
- transfer private information
- hijack a user's account
- manipulate the web content
- cause a [[DoS (Denial of Service)]]

XSS is similar to [[CSFR (cross-site request forgery)]] in that both rely on code injection, but CSFR exploits the browser's trust in the user to send malicious HTTP requests, while XSS involves code execution in the user's browser (see more on [[XSS and CSFR comparison]])
### Types of XSS attacks

**Reflected**
Reflected XSS is the simplest variety of cross-site scripting. It arises when an application ==receives data in an HTTP request and includes that data within the response in an unsafe way.==

```JavaScript
// The user clicks on:
// https://insecure-website.com/status?message=<script>...<script/>

// Let's say that the response is output with no checks
<p>Response status:
  <span>
  ///code will be inserted and executed here
  <span/>
</p> // the script is executed
```

If the user visit the URL constructed by the attacker, the attacker's script will be executed in the user's browser. The script can retrieve any information or perform any action the user is allowed to perform. Most of the literature has studied on this type of issues. If the user is presented with the dangerous link in an email, for example, this scenario is also called [[phishing attack]].

**Stored (persistent/second order XSS)**
If the system does not validate user input provided from message forums or comment sections, malicious inputs can be stored in the vulnerable app's database.
The malicious code is then executed by each new visiting user. 
- This is the most dangerous XSS attack because the ==attack is self-contained and there is no need to find external ways to spread the attack to other users.== The user's browser can execute the malicious code by mistake, by landing in the comments section where it is present

 **DOM-based XSS (DOM XSS)**
 It occur when an application contains some client-side JavaScript that processes data from an untrusted source, in an unsafe way, usually by writing the data back to the DOM. 
```JavaScript
var search = document.getElementById('search').value;
var results = document.getElementById('results');
results.innerHTML = 'You searched for: ' + search;
```

If the input field value is under control of the attacker they can easily construct a malicious value that can cause their own script to execute in the user's browser:

```JavaScript
You searched for: <img src=1 onerror='/* Bad stuff here... */'>
```
 
 This is ==the least know type of XSS==


### How to find to find XSS vulnerabilities

Multiple techniques and approaches are often used at the same time to tackle XSS issues:

[[static analysis]]: reviewing the source code of an application to find XSS issues Techniques:
- [[static taint analysis]]
- [[symbolic execution]]
- string analysis
- [[GA (genetic algorithm)]]
- [[program slicing]]
- data flow analysis
- [[precise alias analysis]]


 [[dynamic analysis]]: examining the behavior of an application in runtime. Techniques:
- [[black-box testing]]
- [[taint tracking]]
- flow analysis
- monitoring
- filtering

**Secure programming**: ensuring that programming guidelines and rules are followed during the development of an application. Techniques:
- type system: a technique used to automatically enforce programming guidelines
- [[ELET (Embedded Language Encapsulation Type)]]

**Modelling**. Techniques and approaches: abstractions, model checking, model inference and evolutionary fuzzing, input validation, simulation, signature based model, deferred loading, one-time URLs, subdomain watching, threading, control flow graph, data mining, hybrid approach, TTCN-3, [[FSM (finite-state machine)]], primitive and advanced models

### Mitigate XSS vulnerabilities

Dynamic analysis remains the leading approach to tackle XSS vulnerabilities, with techniques such as: monitoring, taint-tracking and filtering.
- this because to eliminate the XSS issue we should patch the source code. In many case, access the source code or implementing patches can be difficult

**General rules**
- **Don’t trust user input**: take into account that all user input is faulty. If user input is included in HTML output, an XSS is conceivable. Input from verified and/or internal users should be handled similarly to input from the general public.
- **Use escaping / encoding**: use the appropriate escaping/encoding technique, such as HTML escape, JavaScript escape, CSS escape, URL escape, etc., depending on where user input will be used. Use pre-existing libraries rather than creating your own unless it is absolutely necessary
- **Sanitise HTML**: if user input needs to contain HTML, you can’t escape or encrypt it because doing so would render any acceptable tags useless. In such cases, parse and sanitise HTML using a trusted and proven library
- **Content security policy**: use a Content Security Policy as well to mitigate the effects of a potential XSS problem (CSP). The CSP HTTP response header lets you specify which dynamic resources are allowed to load in accordance with the request source

---
## References

- [[ref_current_state_research_xss]]
- [[ref_common_vulnerabilities_real_world_web_application]]
- https://portswigger.net/web-security/cross-site-scripting#reflected-cross-site-scripting