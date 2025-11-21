---
ID: 2025-11-21T07:15:11.724Z
tags:
  - paper
  - browserExtension
  - browserAttacks
Rank: B
---
## Context

Web browser extensions have become essential tools in modern browsing, offering enhanced functionality and customization. However, these extensions also introduce a new attack surface, expanding the scope for security vulnerabilities in web browsers. This paper presents Stealth Extension Exfiltration (SEE) attacks, a novel threat that **exploits the mismanagement of browser extension permissions.**
- SEE attacks enable malicious extensions to bypass security measures and perform unauthorized actions, such as sending arbitrary HTTP requests, misusing the fetch API to access local files, and exfiltrating sensitive user data without explicit user permissions

BEs possess privileged capabilities that bypass security boundaries—enabling cross-domain interactions, unrestricted network requests, and sensitive data access. These extensive privileges introduce significant risks, including over-privilege and malicious exploitation

Extension market vendors have implemented more stringent policies, such as:
- [[SOP (Same-Origin Policy)]]
- sandboxed environment for JS execution
- [[PoLP (principle of least privilege)]] is enforced through API declaration and usage restriction

However, vulnerabilities persist, particularly in the broad boundaries of content scripts, excessive API access, and misuse of host permissions.

Stealth extension exfiltration (SEE) ==exploits vulnerabilities in browser extension permission models==
- SEE attacks take advantage of the mismatch between host permissions and content script boundaries.
## Stealth extension exfiltration (SSE)

The core mechanism of SEE attacks stems from the discovery that browser extension policies are not implemented as strictly as designed. A BE has:
- active boundary, controlled by host permission (and checked by the user)
- passive boundary, controlled by match patterns in the manifest file (defined by the dev)

This boundaries are not independent as they should.
This flaw allows extensions to bypass the SOP restrictions and actively interact with hosts included in their passive boundaries

Malicious actors typically disguise their extensions as legitimate productivity tools, tricking users into granting minimal permissions that are often perceived as harmless. Once installed, these fraudulent extensions can exfiltrate browsing history and credentials or even hijack the victim’s device.
## Approach

We confirmed the transferability of SEE attacks by implementing PoC extensions in the latest versions of Google Chrome, Microsoft Edge, Brave, and Opera.

We analyzed 57,831 extensions using a list curated at June 2021 of the Chrome Web Store’s extensions, using the Selenium web engine and Chrome extension source viewer.
- Due to the widespread use of severe obfuscation and minification in extension source code, a [[dynamic analysis]] and testing approach was necessary

We conducted a comprehensive analysis of 50 browser extensions randomly sampled from the 1,770 high-risk extensions identified in our initial screening
- 12 out of 18 extensions were identified as potentially malicious, while the remaining 32 extensions did not trigger HTTP requests during our analysis, with some requiring additional payments or third-party applications that limited further investigation
## Countermeasures

- SEE attacks primarily exploit the overlap between host permission and content script boundary models. Separating these boundaries is crucial because they differ in user intent and control
- we recommend restricting the use of holistic boundaries within host permissions

---
#### References
- [[(Lim, Jin, et al., 2025)]]
