---
ID: 2026-01-08T13:01:48.519Z
tags:
  - paper
  - BAC
  - cloudSecurity
  - webApplication
Rank: N/A
---
## Context

Under the cloud storage service, a new file upload scenario has been introduced, where the ==files are directly uploaded from web users to the cloud==. Generally, there are three critical stages in this new file upload scenario:
1. upload credential requesting and dispatching
2. file uploading and verification
3. callback notification and response

**Upload credential requesting and dispatching**
- the client sends an HTTP request asking for an upload credential
- the web server should check the client identity and dispatch the upload credential as needed

**File upload and verification**
- The client uses the credential to upload the file directly to the cloud storage service
- The web server should check that the file satisfy the credential's policy requirements

**Callback notification and response**
- the cloud storage service or the client should send a callback notification to inform the web server of the file upload results

During this process, there are many things that can go wrong
- if the web server or cloud storage service fails to provide proper identity authentication for a user, ==it opens up possibilities for attackers to forge the user’s identity==
- Improper setting of the ==upload credential or the policy may cause privilege escalation vulnerabilities.== For instance, adversaries may exploit these vulnerabilities to steal or modify other users’ files in cloud storage services
- if the web server or cloud storage service does not provide a secure synchronization information verification mechanism, the authenticity of the callback notification cannot be guaranteed. An attacker can forge or tamper with callback notifications to trick the web server

We summarize the newly identified vulnerabilities into the following six types:
- unrestricted upload credential acquisition (V1)
- Upload credentials validity flaw (V2)
- unrestricted file types and file size (V3)
- file overwriting (V4)
- file stealing (V5)
- callback notification spoofing (V6).

**(large)-scale study**
- 500 popular websites on Alexa
- 182 (36.45%) use cloud storage services
- 28 of them were chosen: these allow user uploading
- all 28 websites display at least one of the six vulnerabilities

The most common vulnerability is unrestricted upload credential acquisition (V1)

> [!NOTE] How does the attack work?
> The attacker can 1) initiate a normal file upload operation on the website, such as uploading an image. During this process, he can intercept the HTTP request for upload credentials, the upload credentials themselves, the HTTP request for the file upload, and the callback data packet. By analyzing these packets, 2) he can tamper with specific fields within them to execute various attack behaviors. For instance, if the website has a file overwriting vulnerability, the attacker can modify the file storage path and file name in the upload credentials to match those of user Bob, thereby launching a file overwrite attack

## Approach


## Evaluation


## Results


## Limits


---
#### References
- [[(Chen, Li, et al., 2025)]]
