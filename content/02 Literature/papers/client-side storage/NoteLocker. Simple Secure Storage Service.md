---
ID: 2025-03-27T12:49:53.849Z
tags:
  - paper
  - projectSLR
  - clientStorage
Project:
  - SLR
---
## Context

This paper investigates ways to improve client-side security, through encryption, to keep user data private in the face of threats of various Web server compromises. A Web Application for online-note taking named NoteLocker has been developed for this purpose

Server-side protection has several shortcomings:
- if a web server is compromised, it does not matter if data is encrypted because can be easili readde compromises
- are language-specific or application-specific

An extra client-side protection can offer better security
- JS, with encryption algorithms is used to encrypt the data before it leaves the browser
- the server should only receive and send encrypted data and should not possess the decryption key

## Approach

Describe the paper approach in simple term.

---
#### References
- [[(Zaris, Gjermundrød, et al., 2014)]]
