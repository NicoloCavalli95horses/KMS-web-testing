---
ID: 2025-04-09T07:03:06.977Z
tags:
  - paper
  - projectSLR
  - CSP
  - crossDomainPolicy
  - HTTP
Project:
  - SLR
---
One of the firsts papers on [[CSP (Content Security Policy)]], proposed by Mozilla's engineers

## Context

[[SOP (Same-Origin Policy)]] can be easily bypassed by attacks such as [[XSS (cross site scripting)]] and [[CSRF (cross-site request forgery)]].

[[iframe injection]]: in this specific XSS attack, a popular website's input validation is bypassed to inject an iframe into a search results page. A passing user will inadvertently load the malicious iframe, which may contain malicious code.

CSP core idea: instead of only filtering scripts from being inserted into a page, we can also disable invading scripts as they attempt to run

## Approach

The author propose a content restriction policy that limit what types of content may be requested for inclusion, as well as where the content may be loaded from. The ultimate goal is to
1. give more control over content used in a web application
2. defend against XSS
3. clickjacking 

==By design, an application that mis-implements a CSP will have no less security than one that does not use our scheme ==. The CSP does not introduce a new attack surface

The policy does not represent an expensive overhead and can be easily adopted gradually. Browsers that will support CSP will also support websites that do not use CSP (backward compatibility)

## Evaluation

The CSP is compared to other solutions in the field

## Results

Describe the results in simple terms

## Limits

What are the limits of the research? What could be improved?

---
#### References
- [[(Stamm, Sterne, et al., 2010)]]


