---
ID: 2025-01-13-17:22
tags:
  - paper
  - blackBoxTesting
  - symbolicEvaluation
  - cyberSecurity
  - parameterTampering
---
## Abstract

Web applications rely heavily on [[client-side input validations]] to examine and validate form inputs that are supplied by a user (e.g., “credit card expiration date must be valid”).

This is typically done:
- to reduce burden on the server
- to avoid latencies in communicating with the server

However, ==when a server fails to replicate the validation performed on the client, it is potentially vulnerable to attack. ==

In this paper, we present a novel approach for automatically detecting potential server-side vulnerabilities of this kind in existing (legacy) web applications through [[black-box testing]] analysis. 

We discuss the design and implementation of NOTAMPER, a tool that realizes this approach. NOTAMPER has been employed to discover several previously unknown vulnerabilities in a number of open-source web applications and live web sites.

## Introduction

Originally, form processing took place only on the server-side. With the spreading of SPA application and advanced JavaScript framework, part of the business logic has moved to the client side.
- this eliminate latencies, reducing network traffic and server loads
- it improves the general user experience

However, ==the server should not take the validation for granted. If the client-side fails to validate the user input, a second layer of protection is needed==
- the user could circumvent client-side validation by disabling JavaScript, changing the code itself or crafting an HTTP request by hand, with any parameter value
- servers with parameter tampering vulnerabilities are open to [[XSS (cross site scripting)]], [[SQLIA (SQL injection attack)]], privilege escalations attack

The focus of this paper is in detecting parameter tampering vulnerabilities in existing web applications, using a black-box approach

## High level overview

Consider the following scenario: in the checkout step of a payment sequence, the user is asked to provide the quantity of the products he is buying. 

![[notamper_checkout_example.png]]

If the client-validation is bypassed, a custom object with negative quantities may be sent to the server, resulting in an unintentional discount.

If the delivery instructions are not validated on the server side, a XSS or SQL injection attack may be easily performed.

In any case where the server does not replicate the client input validation, there is a ==potential parameter tampering attack vector==
- client and server logic are usually written in different programming languages
- over time, the validation checks in these two code basis may become out of sync

## Approach overview

The goal is to perform a black-box analysis of the server to automatically discover parameter tampering vulnerabilities. A black-box approach is:
- more general since is agnostic of the server's implementation
- less accurate, since false positive and false negative are possible

The more similar a hostile response is to the benign response, the more likely the hostile input is successful

## Process

NoTamper's black-box analysis is based on comparing the constraints imposed by the client-side code on the user-supplied data with the actual behavior of the server

==It tries to identify situations where the server does not replicate the validations performed by the client, creating opportunities for parameter tampering attacks.==

1. **Extracting client-side constraints**: NoTamper analyzes the HTML and JavaScript code of the web page to extract the validation rules applied by the client. These rules are represented as logical formulas, called *fclients*, that define the constraints on the input data
2. **Generating hostile inputs**: Based on the *fclient* formulas, NoTamper generates two sets of inputs: 
	1. benign inputs, which respect the client's constraints,
	2. hostile inputs, which intentionally violate those constraints
	The goal is to test the behavior of the server when it receives unexpected inputs
3. **Sending inputs to the server**: NoTamper sends both benign and hostile inputs to the server and records the responses it gets
4. **Comparing responses:** The server's responses to hostile inputs are compared to those of benign inputs. ==If the response to a hostile input is structurally similar to that of a benign input, NoTamper considers the hostile input as a potential tampering opportunity. This is because it suggests that the server may have accepted the input without performing proper validation.==
5. **Ranking opportunities**: Potential tampering opportunities are ranked based on the degree of similarity between server responses. Opportunities with a higher degree of similarity are considered more likely and are presented to the user for further manual analysis.

In essence, NoTamper uses black-box analysis to find discrepancies between client-side and server-side validations. This approach allows to find potential vulnerabilities even in legacy web applications for which the server source code is not available.

It is important to note that black-box analysis cannot guarantee completeness, lacking in accuracy.

---
## References
- [[(Bisht, Hinrichs, Skrupsky, et al., 2010)]]