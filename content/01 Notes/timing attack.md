---
ID: 2025-02-21-15:32
tags:
  - "#definition"
  - cyberSecurity
  - timingAttack
---
## Definition

A timing attack is a category of side-channel attack in which an attacker ==analyzes a system's response times to infer sensitive information.==

This type of attack ==uses variations in the execution times of operations to obtain details about internal data, such as cryptographic keys, passwords, or memory structure==


### Attack Mechanism

The basic idea is that the time it takes a system to process an operation *can depend on the internal data*. ==An attacker can send specific inputs and precisely measure the response time to infer information==.

**Early Terminating String Comparison**
If an authentication function verifies a password character by character and stops when it finds an [[error]], ==the processing time will be longer if the first few characters are correct==.
- An attacker can test characters one at a time and reconstruct the password.

**Decrypting Cryptographic Data**
In cryptographic algorithms, the time it takes to complete an operation can vary based on the bits of the secret key. This is especially critical for algorithms like RSA or AES with implementations that are not constant in execution time.

**Cache timing attacks**
If a system uses the CPU cache, some operations (e.g. memory accesses) may be faster when the data is already in the cache. An attacker can analyze these differences to infer information about cryptographic keys or sensitive data.

### Attack types

- **Direct timing attack**: can be used to determine boolean values such as a user’s login status or content data size such as the relative size of a shopping cart
- **Cross-site timing attacks**: rely on a user to visit, and remain on, a malicious page, while a cross-site exchange is made.

### Attack example in the web

- The victim opens the malicious site (via [[phishing]], infected ads, or other [[social engineering]] methods).
- The malicious site embeds an ==invisible iframe== with a private page of the victim, such as a social network profile
- If the victim is logged in, the iframe loads a customized version of the page (with avatar, feed, etc.)
- If the victim is not logged in, they are redirected to the login page, which has a different layout and loading time. ==Rendering times can be exaggerated by making use of CSS filters==
- The malicious site measures the time it takes to render the iframe (or uses other techniques such as CSS analysis or fetch errors)
- ==By comparing the loading times to a reference database==, the attacker can determine whether the victim has an account or is logged in to the site

---
#### References
- [[(Kotcher, Pei, Jumde, et al., 2013)]]