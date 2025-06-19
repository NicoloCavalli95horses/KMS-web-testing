---
ID: 2025-04-02T10:02:23.212Z
tags:
  - paper
  - parameterTampering
---
## Context

**Parameter tampering** is a common attack that exploit poor server-side validation of HTTP POST requests. In a number of scenario, it may make sense for the client to have some control over the parameters (even with business-critical information). This may happen because:
- the interaction flow may be distributed in multiple pages and the client may need to store important information to ease the server load (e.g., the content of the shopping kart may be stored in the client, coupon or discounts applied may be handled partially at the client side)
- usage of third-party APIs or microservices
- to improve the user experience
- legacy application may still rely on bad practices

## Approach

The authors propose to use the MACJER-320 hashing algorithm to allow the server identify tampered POST requests.
- MACJER-320 has been compared with other hashing algorithm and it has found to be more efficient

**How does it work**
- The ==server generates a secret key==, which is only known to the server (or trusted clients, if applicable)
- The ==server generates a signature for each set of relevant parameters==. This is done by applying a hashing algorithm (MACJER-320) together with the secret key. This means the set of parameters undergoes an encrypting process, where the secret key is used to generate a unique output value. This signature ensures data integrity and authenticity, as the output cannot be guessed or recreated without knowing the secret key.
- The ==server sends the parameters to the client along with the signature previously created==. The signature is the same for each set of parameters
- When the client makes a request, ==it must include the original parameters and the corresponding signature==
- The ==server recalculates the signature and verifies it against the one received==. For example, if the client send `price=10`, `itemID=1` and `signature=ABC123`, the server takes the first two parameters and calculate the signature again, using the secret key that he owns. The server output should match the value `ABC123` provided by the client. If the results don't match, the request is rejected because it has been tampered (e.g., maybe the client send `price=1` and `itemID=1`)

## Evaluation

A number of vulnerability scanning tool were tested on a in-house web application that use the MACJER-320 algorithm to hash the request parameters. The implementation defends against parameter tampering performed with [[Burp Suite]], Fire Bug, Web Scarab, Rat Proxy, Paros Proxy, Tamper Data

## Limits

Little overhead due to the encryption process

---
#### References
- [[(Asish Kumar Dalai, Saroj Kumar Panigrahy, et al., 2012)]]
