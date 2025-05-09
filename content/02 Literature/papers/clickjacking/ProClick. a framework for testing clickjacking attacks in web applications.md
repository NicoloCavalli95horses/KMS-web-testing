---
ID: 2025-04-30T16:54:43.141Z
tags:
  - paper
  - projectSLR
  - clickjacking
Rank: C
Project:
  - SLR
---
## Context

[[clickjacking]] attacks allure users to click on objects transparently placed in malicious web pages. The resultant actions of the click operation may cause unwanted operations in the legitimate websites without the knowledge of users

## Approach

ProClick is a client-side proxy technique that can actively intercept and analyze requests (issued from browsers) and response pages (received from remote web servers).
- The analysis is at the proxy level
- First, advanced types of clickjacking attackers mostly rely on sophisticated JavaScript code. If we are able to analyze the structure of JavaScript code for potential malicious activities (e.g., clobbering object, defining event handler), then attacks can be identified early
- Second, the approach does not depend on the enabling or disabling of JavaScript code at the client side
- Third, clickjacking attacks due to stripping special HTTP headers (`XFrame-Options`) by other proxy servers can be addressed easily
- Finally, advanced attack techniques can be detected without breaking legacy websites, and with less performance overhead

The proposed approach examines the content of requests and response pages to identify known symptoms of clickjacking and remove malicious attack payloads to safeguard end users. The approach is flexible as suitable policies can be defined based on the needs as well as accommodating the detection of new attack types

## Evaluation

*ProClick* was evaluated
- on 100 legitimate websites from Alexa
- on a set of 6 malicious websites created ad-hoc (no reliable dataset of malicious websites was found for clickjacking)

Low false positive rates

---
#### References
- [[(Shahriar, Devendran, et al., 2013)]]
