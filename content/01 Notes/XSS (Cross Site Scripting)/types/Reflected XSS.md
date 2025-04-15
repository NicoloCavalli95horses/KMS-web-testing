---
ID: "2025-04-15-16:36"
tags:
  - "#definition"
---
## Definition

Reflected XSS is the simplest variety of cross-site scripting. It arises when an application ==receives an input and use that input without checking it==

For example, a website that implement search functionalities may use the URL as entry point to perform the search. By appending `?search=<script>alert(1)</script>`:
- if the vulnerable application ==use the URL parameters without sanification==, the script included in the URL is executed
- The script can retrieve any information or perform any action the user is allowed to perform

Most of the literature has studied on this type of issues. If the user is presented with the dangerous link in an email, for example, this scenario is also called [[phishing]].

`location.assign()` accepts URLs with the javascript scheme, which enables attackers to escalate request API hijacking to arbitrary client-side code execution if there is no or improper input validation [[(Khodayari, Barber, et al., 2024)]]

**Real-world example from [[(Felsch, Heiderich, et al., 2015)]]**
In Sunstone, every account can choose a display language. This choice is stored as an account parameter (e. g. for English `LANG=en_US`). In Sunstone, ==the value of the LANG parameter is used to construct a script tag that loads the corresponding localization script==. For English, this creates the following tag: 

``` JS
<script src="locale/en_US/en_US.js?v=4.6.1" type="text/javascript"> </script>
```  

Setting the LANG parameter to a different string directly manipulates the path in the script tag. By setting the LANG parameter to `LANG="onerror =alert(1)//`, the resulting script tag looks as follows:

``` JS
<script src="locale/" onerror=alert(1) </script>
```

For the web browser, this is a command to fetch the script locale/ from the server. However, this URL points to a folder, not a script. Therefore, what the server returns is no JavaScript. For the browser, this is an error, so the browser executes the JavaScript in the onerror statement: `alert(1)`

URL parameters is not the only entry point for reflected XSS. You can exploit basically every input provided by the user:
- ==File upload==: a file that include malicious code can be uploaded successfully and bypass the checks. For example, it is possible to embed a `<script>` inside a SVG file
- ==Header HTTP==: the user agent may be modified as `Mozilla/5.0 <script>alert(1)</script>`
- ==Form inputs==: fields such as `username`, `email`, `message` could be exploited to execute JS
- ==Websockets==: some WS endpoints may read and parse data without escaping