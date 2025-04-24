---
ID: 2025-03-27T12:49:53.849Z
tags:
  - paper
  - clientStorage
---
The authors present a proof of concept note-taking application that encrypt all the user-generated content at client-side. The user has to manually store the private key somewhere else and insert it to access the app. Bad UX
## Context

This paper investigates ways to improve client-side security, through encryption, to keep user data private in the face of threats of various Web server compromises. A Web Application for online-note taking named NoteLocker has been developed for this purpose

Server-side protection has several shortcomings:
- if a web server is compromised, even encrypted data are easily readable
- current solutions are language-specific or application-specific

An extra client-side protection can offer better security
- JS, with encryption algorithms is used to encrypt the data before it leaves the browser
- ==the server should only receive and send encrypted data and should not possess the decryption key==

## Approach

NoteLocker encrypts data when it leaves the web client and decrypts it when data is transmitted back
- The whole encryption/decryption process is done on the client-side, regardless the client device
- The only user that can comprehend the note’s content is the user that has access to create and modify the specific note
- Each note in NoteLocker has its own pair of RSA keys. The public key is used to encrypt and the private key to decrypt
- If the Private key is lost then the note cannot be decrypted, and the note’s content is lost. The private key has to be stored locally and manually

---
#### References
- [[(Zaris, Gjermundrød, et al., 2014)]]
