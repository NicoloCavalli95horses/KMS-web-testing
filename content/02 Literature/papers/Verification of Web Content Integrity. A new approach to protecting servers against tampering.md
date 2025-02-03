---
ID: 2025-02-03-09:48
tags:
  - paper
  - webApplication
  - cyberSecurity
  - clientSideAttacks
  - businessFlowTampering
  - dataSecurity
---
## Context

[[BFT (business flow tampering)]] can be aimed at corrupting [[data integrity]]. Web data integrity has received little attention in web security research.
- [[SSL (secure sockets layer)]] and [[TLS (transport layer security)]] protocols are not enough to ensure data integrity before a request enter in the secure channel

This paper reviews approaches and researches in web data integrity.

#### Form field validation scheme
A form field validation scheme is the first defense against tampering at the application level. Approaches to prevent loss of web content integrity:
- server-side validation,
- client-side validation (see [[client-side input validations]]),
- double-checking validation,
- digital signature and data validation on the client and/or server-sides.

The double-checking approach is the most reliable given that the client-side validation might be by-passed.

#### Network and application firewalls
Network firewalls provide protection at the host and network level.
This layer cannot be used to detect tampering problems

#### Client-side encryption approach
Client-side encryption approaches have been proposed to protect confidentiality, [[data integrity]] and user trust. For example, a technique to encrypt data sent from the client to the server, or viceversa:
- Data is encrypted with a client-side encryption key before being submitted via an HTML form
- The key can be on a smart card connected to the client or obtained via HTTP/HTTPS
- A downloaded web page includes a signed [[applet]] that handles encryption and decryption
- The applet reads the encryption key from a local file
- The page includes JavaScript methods that invoke the applet's encryption/decryption methods
- A one-way hash function is used to compute a hash value, which is inserted into the data before encryption
- Upon a new request, a JavaScript function calls the applet's decryption method and inserts the decrypted value into the corresponding field.
- Message validation involves comparing the hash of the decrypted message with the received hash
- If the hashes match, the data is accepted; otherwise, validation fails.

Problems with the approach: the system must work on all major browsers without requiring additional hardware or software installations on the client; applets that can access local files, if tampered, could cause even more damage; the loss of the PIN/smart card number will result in an unusable system


[^1]

## Approach

Describe the paper approach in simple term.


---
#### Notes
[^1]: This is a note example. Use a note to give extra information without interrupting the reading flow
#### References
- [[ref_verification_web_integrity_server_tampering]]
