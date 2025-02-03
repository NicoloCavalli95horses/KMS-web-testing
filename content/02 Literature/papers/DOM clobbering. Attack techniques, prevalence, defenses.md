---
ID: 2025-02-03-13:41
tags:
  - paper
  - domClobbering
  - cyberSecurity
  - clientSideAttacks
  - businessFlowTampering
---
This paper examines the [[DOM clobbering]] vulnerability, providing a systematic evaluation of the attack surface, a measurement of affected and vulnerable websites and a review and evaluation of defenses.

A tool (TheThing) is proposed to automatically detect DOM clobbering.

> [!summary]
> The authors' findings show that the attack surface of DOM clobbering is large, with ==31.432 possible attacks== (only 481 of which are commonly known), and that the prevalence of the vulnerability affects ==9.8% of the 5,000 most visited websites on the Internet, including GitHub, Fandom, Trello, Vimeo, TripAdvisor, WikiBooks.==

## Approach

- the authors have studied the existing literature on DOM clobbering, including HackerOne vulnerability reports, CVE database, bugzilla bug reports, and highlighted common pattern used for creating an attack
- a list of rules was derived, covering all HTML tags, attributes, tags relations and attack targets
- experimenting with all the possible valid HTML tags and attributes confirm that ==only using `id` and `name` attributes the override behavior occur==
- the browser behavior was checked in BrowserStack, which include 16 browsers. Also different Safari versions were evaluated, with a total of 19 browsers



---
#### Notes
[^1]: This is a note example. Use a note to give extra information without interrupting the reading flow
#### References
- [[ref_dom_clobbering_attack_techniques]]