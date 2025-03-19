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

Successful XSS can:
- steal session information stored in a [[cookie]]
- transfer private information
- hijack a user's account
- manipulate the web content
- cause a [[DoS (Denial of Service)]]

Only if the code is either embedded in (inline scripts) or loaded into the webpage, it will have read and write access to the contents of this webpage (e. g. session cookies, form fields, etc.)  [[(Felsch, Heiderich, et al., 2015)]]

XSS is similar to [[CSRF (cross-site request forgery)]] in that their harm may be similar, but CSFR exploits the browser's trust in the user to send malicious HTTP requests, while XSS involves code execution in the user's browser (see more on [[XSS and CSFR comparison]])

## Prevalence

Two-third of all deployed web applications are vulnerable to XSS attacks, and Cisco 2018 Annual Security Report indicated that 40% of all attacks attempts lead to XSS attacks [[(Sadqi, Maleh, 2022)]](p.18)

## Types of XSS attacks

#### Reflected XSS

Reflected XSS is the simplest variety of cross-site scripting. It arises when an application ==receives data in an HTTP request and includes that data within the response in an unsafe way.==

```javascript
// The user clicks on:
// https://insecure-website.com/status?message=<script>...<script/>

// Let's say that the response is output with no checks
<p>Response status:
  <span>
  ///code will be inserted and executed here
  <span/>
</p> // the script is executed
```

If the user visit the URL constructed by the attacker, the attacker's script will be executed in the user's browser. The script can retrieve any information or perform any action the user is allowed to perform. Most of the literature has studied on this type of issues. If the user is presented with the dangerous link in an email, for example, this scenario is also called [[phishing]].

#### Stored (persistent/second order XSS)

If the system does not validate user input provided from message forums or comment sections, malicious inputs can be stored in the vulnerable app's database.
The malicious code is then executed by each new visiting user. 
- This is the most dangerous XSS attack because the ==attack is self-contained and there is no need to find external ways to spread the attack to other users.== The user's browser can execute the malicious code by mistake, by landing in the comments section where it is present

#### DOM-based XSS (DOM XSS)
 
 Occur when client-side JavaScript processes an input in an unsafe way, usually by writing the data back to the DOM without checking ([[sink function]])
```JavaScript
function writeToDOM() { //sink function
  const search = document.getElementById('search').value;
  const results = document.getElementById('results');
  results.innerHTML = 'You searched for: ' + search;
}
```

Since the search value is not checked, it is easy to construct a malicious value that can cause an external script to be executed:

```JavaScript
You searched for: <img src=1 onerror='/* Bad stuff here... */'>
```
 
 This is ==the least know type of XSS==

## Typical attacks

- *session theft*: the attacker can steal [[sessions token]] of premium users or admin, getting access to protected resource
- *content substitution*: malicious forms or redirect pages are injected to steal user credentials ([[(Tkachenko et al., 2024)]])

## How to find to find XSS vulnerabilities

Multiple techniques and approaches are often used at the same time to tackle XSS issues:

[[static analysis]]: reviewing the source code of an application to find XSS issues, possibly before deploying it. Techniques:
- [[static taint analysis]] 
- [[symbolic execution]]
- string analysis
- [[GA (genetic algorithm)]]
- [[program slicing]]
- data flow analysis
- [[precise alias analysis]]


 [[dynamic analysis]]: examining the behavior of an application in runtime. Techniques:
- [[black-box testing]]
- [[dynamic taint analysis]]
- flow analysis
- monitoring
- filtering

**Secure programming**
Ensuring that programming guidelines and rules are followed during the development of an application. Techniques:
- type system: a technique used to automatically enforce programming guidelines
- [[ELET (Embedded Language Encapsulation Type)]]

**Modelling**
Techniques and approaches: abstractions, model checking, model inference and evolutionary fuzzing, input validation, simulation, signature based model, deferred loading, one-time URLs, subdomain watching, threading, control flow graph, data mining, hybrid approach, TTCN-3, [[FSM (finite-state machine)]], primitive and advanced models

## Mitigate XSS vulnerabilities

Dynamic analysis remains the leading approach to tackle XSS vulnerabilities, with techniques such as: monitoring, taint-tracking and filtering.
- this because to eliminate the XSS issue we should patch the source code. In many case, access the source code or implementing patches can be difficult

**General rules**
- **Don’t trust user input**: take into account that all user input is faulty. If user input is included in HTML output, an XSS is conceivable. Input from verified and/or internal users should be handled similarly to input from the general public.
- **Use escaping / encoding**: use the appropriate escaping/encoding technique, such as HTML escape, JavaScript escape, CSS escape, URL escape, etc., depending on where user input will be used. Use pre-existing libraries rather than creating your own unless it is absolutely necessary
- **Sanitise HTML**: if user input needs to contain HTML, you can’t escape or encrypt it because doing so would render any acceptable tags useless. In such cases, parse and sanitise HTML using a trusted and proven library
- **Content security policy**: use a Content Security Policy as well to mitigate the effects of a potential XSS problem (CSP). The CSP HTTP response header lets you specify which dynamic resources are allowed to load in accordance with the request source

---
## References

- [[(Isatou, Abu Bakar, et al., 2015)]]
- [[(Krishnaraj, Madaan, et al., 2023)]]
- https://portswigger.net/web-security/cross-site-scripting#reflected-cross-site-scripting
- [[(Sadqi, Maleh, 2022)]]
- [[(Tkachenko et al., 2024)]]
- Included in literature review, by [[(Onukrane, Skrodelis, et al., 2023)]]
- Cookie banners and XSS [[(Klein, Musch, et al., 2022)]]
- One of the first description of the attack [[(Watson, 2007)]]
