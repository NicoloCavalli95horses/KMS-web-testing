---
ID: 2025-08-04-09:09
tags:
  - meta
---
## Lack of relevant papers

Prototype pollution:
- Probe the Proto: Measuring Client-Side Prototype Pollution Vulnerabilities of One Million Real-world Websites, NDSS 2022.
- Prototype pollution attack in NodeJS application, by O Arteau
- Silent Spring: Prototype Pollution Leads to Remote Code Execution in Node.js, USENIX 23.
- Follow My Flow: Unveiling Client-Side Prototype Pollution Gadgets from One Million Real-World Websites, IEEE Security and Privacy 2025.

XSS:
- Don't Trust The Locals: Investigating the Prevalence of Persistent Client-Side Cross-Site Scripting in the Wild, NDSS 2019
- Riding out DOMsday: Toward Detecting and Preventing DOM Cross-Site Scripting, NDSS 2018

Logic vulnerabilities:
- Detecting Logic Vulnerabilities in E-Commerce Applications, NDSS 2014

## Ignored browser extensions issues

- DoubleX: Statically Detecting Vulnerable Data Flows in Browser Extensions at Scale, CCS 2021
- Detecting Browser Extensions via Injected Style Sheets, USENIX 2021.

## Why ignoring mobile web app?

- they are not ignored, we used `AND NOT ”android” AND NOT ”ios”`  to reduce the likelihood of fetching papers focused on Android or iOS
- mobile web apps are implicitly included since the stack might be the same

## No agreement on the definition of "systematic"

*But how do you define systematic?  I could not understand the definition.*

![[systematic_definition.png]]

 *You listed 23 keywords. But why is the list complete?*
 I've never said it is!

## No evidence of practical impact of the review (?)

"This thus questions how web front-ends are involved in the broader web security discussion. This question has a practical impact on the ability of front-end developers to be more aware of vulnerabilities that might affect their components and the ways in which their front-ends might be exploited."

*Do you have any evidence that this will indeed bring practical impacts?* 

## Ignored Rest API issues


## Missing figures or summaries for better explanation

 - Not enough space

## Confusion between vulnerability and attack

*This confusion seems particularly clear given the use of OWASP for eliciting the keywords used for queries*

The work done in table 1 on classification would benefit from established taxonomies in the field. This particularly applies to RQ1 and RQ2.

RQ3. A natural link between the vulnerabilities and attacks could be established through the MITRE ATTACK framework.

## Methodological issues

*Keyword-based searches are problematic*
- the protocol is clear and repeatable, but the results can be poor
- many relevant topics (or papers in a presented topic) may be excluded