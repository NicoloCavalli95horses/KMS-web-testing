---
ID: 2025-04-30T16:49:48.780Z
tags:
  - paper
  - projectSLR
  - crossSiteFraming
Project:
  - SLR
---
## Context

This paper present [[XSF (Cross-site Framing)]] that don't require a malware to be installed in the victim's machine

## Approach

Evidence of illegal activities can be planted in a victim's computer
- tricking the user to visit a malicious website and using [[clickjacking]] to make the user click on invisible iframes. Clicks are intercepted to make the user browse other website inside the iframe, polluting the search history
- using [[CSRF (cross-site request forgery)]] from the malicious website, to plant evidence of interest for illegal items on popular e-commerce sites
- an attacker can make the victim visit malicious websites and expressing interest to illegal content multiple time, causing the browser to cache this content. The browser cache can then be used to support the legal framing of the user.
- In legacy browser's version (Chrome, Safari), files are downloaded automatically by default, without the user being aware of that. In these scenarios an attacker can make the user download illegal content

Attacker's traces can be covered:
- To prevent a web page from being saved in the cache, the attacker can use the Cache-Control HTTP response header. This is not the best option because web pages that does not appear in the browser cache but that appear in the browser history or even in network logs are suspicious
- An effective way to hide the malicious activity from the malicious website is to ==reload a new benign version of the website==. This could be done after a while, when the user has been framed. The cache only keeps the latest version of the website hence it would overwrite the previous malicious version. This process can be done while the original framing page and script continue to operate. Specifically, loading the ‘benign’ versions of the page and script into a new hidden iframe is sufficient for the browser to overwrite the framing versions in the cache with the benign versions now received.
- By manipulating HTTP headers

## Evaluation

Often a tool or a solution is implemented. How was that solution evaluated?

## Results

Describe the results in simple terms

## Limits

What are the limits of the research? What could be improved?

---
#### References
- [[(Gelernter, Grinstein, et al., 2015)]]
