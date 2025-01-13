---
ID: 2025-01-13-17:22
tags:
  - paper
  - blackBoxTesting
  - symbolicEvaluation
  - cyberSecurity
---
## Abstract

Web applications rely heavily on client-side computation to examine and validate form inputs that are supplied by a user (e.g., “credit card expiration date must be valid”).

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

## References
[[ref_notamper_automatic_blackbox_det_parameter_tampering]]