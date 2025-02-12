---
ID: 2025-02-11-14:17
tags:
  - paper
  - cyberSecurity
  - mobile
  - testingTechniques
  - metamorphicTesting
  - android
---
## Context

Authentication vulnerabilities in mobile applications are present even in high-rated and high-downloaded applications.
[[MT (metamorphic testing)]], combined with [[GUI (graphical user interface)]] testing, through a capture-and-replay methodology, can be exploited to detect vulnerabilities in Android mobile applications.

## Approach

The vulnerabilities approached by the research team are insecure communication and insecure authentication/authorization (see [[authentication vulnerabilities]])

Metamorphic relations were manually identified (techniques for automatically generating MR are not available for GUI-based testing):
	- MR1: an auth server should not trust invalid SSL/TLS certificates
	- MR2: access token should be refreshed after prolonged inactivity (+60 minutes)
	- MR3: access token should be destroyed after a logout and a new one must be generated
	- MR4: an auth server should reject a connection when HTTPS is not used
	- MR5: the system must prevent any unauthorized user to access protected resources through the GUI


---
#### References
- [[ref_gui_metamorphic_testing_android]]

[^1]: This is a note example. Use a note to give extra information without interrupting the reading flow