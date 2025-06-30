---
ID: 2025-05-15-09:41
tags:
  - "#definition"
  - parameterTampering
  - logicVulnerability
  - HTTP
---
## Definition

Client-side validation of user inputs can be bypassed and invalid data can be supplied to the server. A server that accepts such invalid data is vulnerable to parameter tampering attacks

**Negative parameter tampering**
In certain circumstances e-commerce offer discounts to their client (e.g., during Christmas or other holidays). This is legitimately appended to the purchase requests.
- An attacker could try to replicate the requests even when the discount should not be valid anymore, adding extra parameter to the HTTP communication

**Tampering based on sequencing attack**
Most of the times an e-commerce wants the user to follow a specific sequence of actions: shopping cart, shipping details and confirmation. If this sequence is not enforced, an attacker could bypass some steps, or get directly to the confirmation step and choose products, quantities and shipping costs.
- This scenario is strongly related to [[logic workflow bypass]] attack

## Attacks

- **tampering field names**: changing the name, adding new parameters (*negative tampering*)
- **tampering field values**: inserting negative quantities, or data types that are not expected
- **tampering with the order of the requests:**

## Examples

- the server-side code fails to check whether the quantity of an item to be purchased is equal to or greater than 1. An attacker can set up an order that includes 1 legitimate item costing $100.00 and -1 item costing $50.00, thus obtaining an illegal discount.

## Risks

- account takeover
- unauthorized financial transactions
- unauthorized discounts on online shopping

## Defense

Ensure that server-side validation is, at least, as strong as the client-side

[[(Skrupsky, Bisht, et al., 2013)]]: proxy-server that intercepts all communications and discard potentially dangerous ones

### Front-end software role

- *Bypass of client-side authorization checks*: sometimes in large application the web server logic processes HTTP requests assuming information that depends on client-side authorization checks, which can be bypassed
- *API discovery*: legitimate use of the web application allows an attacker to understand the arguments of requests and subsequent responses. The threat model considers the presence of a regular user account, and a user who is logged in or logged out). This can be a manual trial and error process, or can be automated
- *Defenses are often based or inspired by client-side checks first*

---
#### References
- [[(Bisht, Hinrichs, Skrupsky, et al., 2010)]]
- [[(Asish Kumar Dalai, Saroj Kumar Panigrahy, et al., 2012)]]
- [[(Fung, Wang, et al., 2014)]]

Project SLR:
- [[(Skrupsky, Bisht, et al., 2013)]]
- [[(Bisht, Hinrichs, et al., 2011)]]
- [[(Li, Xue, et al., 2011)]]