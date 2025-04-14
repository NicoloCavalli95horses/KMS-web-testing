---
ID: 2025-04-14T08:04:13.734Z
tags:
  - paper
  - projectSLR
  - CSFR
Project:
  - SLR
---
## Context

The root problem of [[CSRF (cross-site request forgery)]] is the server not being capable of distinguish unintentional from intentional requests, but CSRF is just one example of a more general issue of request hijacking in web application: [[CSRH (Client-Side Request Hijacking)]]

Most of the past work has been done solving confuse-deputy issue at the server side, while CSRF based on client input validation (URL manipulation) have received little attention so far

## Approach

We examined JavaScript APIs capable of creating network requests: 10 APIs were found to be ==possible entry points for CSRH==: `location.href`, `XMLHttpRequest`, `sendBeacon`, `window.open`, `fetch`, `push`, `websocket`, `location.assign`, `location.replace`, `EventSource`

![[js_network_request_api_csrh_entry_points.png]]

A tool called Sheriff is proposed to detect [[CSRH (Client-Side Request Hijacking)]] vulnerabilities in the wild.
- it uses a combination of hybrid program analysis and in-browser [[dynamic taint analysis]] tracking for the discovery of potentially-vulnerable data flows and dynamic analysis with API instrumentation for the automated vulnerability verification.
- it is composed of 4 modules:
	- **data collection**: gathers web resources and execute dynamic taint flows analysis
	- **data modeling**: create a [[HPG (Hybrid Property Graph)]] that classify websites
	- **vulnerability analysis**: traverses the graph following the propagation of un-validated data flows from input sources to functions involved in network requests
	- **verification**: confirms the potential forgeability of requests

We instantiate Sheriff against the Tranco top 10K websites to quantify the prevalence and impact of client-side request hijacking in the wild, processing over 32.4B lines of JavaScript code across 11.5M scripts and 339K webpages.

Sheriff was compared to the usage of [[CSP (Content Security Policy)]] and [[COOP (Cross-Origin Opener Policy)]]

## Results

-  ==9.6% of Tranco top 10K websites are affected by CSRH ==
- among the various types of requests that can be hijacked, asynchronous requests are the most widespread (85%), with over 172K instances across 905 sites
- forged `window.load` are the second-most prevalent (8.2%), accounting for 16.5K flows in 365 sites
- `location.href` and `XMLHttpRequest` are the most used APIs for handling network requests
- the `EventSource` API is the less used
- 80% of the forgeable requests fields are fully controllable (the attacker can successfully manipulate all the query parameters)
- Sheriff identified an average of 23 request-sending [[sink function]]s and 65 sources per webpage
- CSP cannot mitigate over 41% of the information leakage and XSS exploitations of the request hijacking
- [[COOP (Cross-Origin Opener Policy)]] and [[COEP (Cross-Origin Embedder Policy)]] cannot mitigate over 93% and 94.7% of the total request hijacks

## Limits

- the crawler does not create accounts or login: therefore the exploration of the websites is limited to the public pages. They claim that this limitation is in line with the state-of-the-art of security testing at scale (p.6)

---
#### References
- [[(Khodayari, Barber, et al., 2024)]]
