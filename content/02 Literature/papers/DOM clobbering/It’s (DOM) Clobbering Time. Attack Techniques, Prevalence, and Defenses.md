---
ID: 2025-02-03-13:41
tags:
  - paper
  - domClobbering
  - cyberSecurity
  - clientSideAttacks
  - businessFlowTampering
SLR: https://overleaf.irisa.fr/project/67c982e387fa1b0088944647
---
This paper examines the [[DOM clobbering]] vulnerability, providing a systematic evaluation of the attack surface, a measurement of affected and vulnerable websites and a review and evaluation of defenses.

A tool (*TheThing*) is proposed to automatically detect DOM clobbering.

> [!summary]
> The authors' findings show that the attack surface of DOM clobbering is large, with ==31.432 possible attacks== (only 481 of which are commonly known), and that the prevalence of the vulnerability affects ==9.8% of the 5,000 most visited websites on the Internet, including GitHub, Fandom, Trello, Vimeo, TripAdvisor, WikiBooks.==

## Approach

- the authors have studied the existing literature on DOM clobbering, including HackerOne vulnerability reports, CVE database, bugzilla bug reports, and highlighted common pattern used for creating an attack
- a list of rules was derived, covering all HTML tags, attributes, tags relations and attack targets
- experimenting with all the possible valid HTML tags and attributes confirm that ==only using `id` and `name` attributes the override behavior occur== and led to the discovery of 31.432 possible attacks
- the browser behavior was checked in BrowserStack, which include 16 browsers. Also different Safari versions were evaluated, with a total of 19 browsers

> [!summary] Approaching DOM clobbering
> Detecting DOM clobbering vulnerabilities mean executing a data flow analysis to identify clobberable JavaScript variables, whose value reach security-sensitive instructions such as script `src` or `eval`

### Developing of *TheThing*

A web crawler collects data and JS code from the target web pages:
- Puppeteer and [[CDP (Chrome DevTools Protocol)]] were used to visit the web pages and collect data
- A depth-first strategy were used to explore the web site. A maximum of 100 URLs per website was considered
- Fired events and DOM objects' properties were collected with CDP

A vulnerability analysis component that uses property graphs and traversals for identifying DOM clobbering sources
- *TheThing* creates a property graph of the client-side JavaScript program leveraging a modified engine of JAW
- the problem of finding potential DOM Clobbering data flows is mapped into a series of graph traversal queries

 A vulnerability verification component that confirms the candidate data flows by instrumenting the code
 - verify each data flow and eliminate false positives using [[Iroh.js]] (in-browser [[dynamic analysis]] engine)
 - malicious payloads are injected to the DOM tree of the targets web sites and the source code behavior is observed (by logging values of variables)

### Prevalence of DOM clobbering

- 9467 DOM clobbering vulnerabilities were found among +5000 web sites
- Almost half of the vulnerabilities (46.1%) were verified thanks to a dynamic verification
- 38.8% of these vulnerabilities can lead to [[XSS (cross site scripting)]]
- 17.2% can lead to [[BFT (business flow tampering)]]
- 14.8% to [[CSRF (cross-site request forgery)]]
- 12.9% to DOM based open redirection
- Others to JSON injection, Websocket connection hijack
- even the HTML sanitizers are vulnerable to DOM clobbering

---
#### References
- [[(Khodayari, Pellegrino, 2023)]]