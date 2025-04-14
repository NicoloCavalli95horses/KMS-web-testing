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

The root problem of [[CSRF (cross-site request forgery)]] is the server not being capable of distinguish unintentional from intentional requests

CSRF is just one example of a more general issue of request hijacking in web application
- other hijacking of outgoing HTTP requests exist

Most of the past work has been done solving confuse-deputy issue at the server side, while CSRF based on client input validation have received little attention so far
- input-validation CSRF can bypass [[CSRF (cross-site request forgery) token]] because the request is made from the same origin in a legitimate way

## Approach



## Evaluation

We propose Sheriff, a [[CSRH (Client-Side Request Hijacking)]] detection tool that uses a combination of hybrid program analysis and in-browser [[dynamic taint analysis]] tracking for the discovery of potentially-vulnerable data flows and dynamic analysis with API instrumentation for the automated vulnerability verification. 

We instantiate Sheriff against the Tranco top 10K websites to quantify the prevalence and impact of client-side request hijacking in the wild, processing over 32.4B lines of JavaScript code across 11.5M scripts and 339K webpages.

Sheriff was compared to the usage of [[CSP (Content Security Policy)]] and [[COOP (Cross-Origin Opener Policy)]]

## Results

- the attack surface of client-side request hijacking vulnerabilities is large
- 10 different variants across six request types were found (7 previously unknown)
- 9.6% of Tranco top 10K websites are affected by CSRH 
- CSP cannot mitigate over 41% of the information leakage and XSS exploitations of the request hijacking
- COOP and COEP cannot mitigate over 93% and 94.7% of the total request hijacks

## Limits



---
#### References
- [[(Khodayari, Barber, et al., 2024)]]
