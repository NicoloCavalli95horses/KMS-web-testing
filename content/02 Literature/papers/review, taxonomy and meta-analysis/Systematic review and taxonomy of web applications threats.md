---
ID: 2025-02-13-11:58
tags:
  - paper
  - taxonomy
  - cyberSecurity
  - webApplication
---
## Context

The open nature of web applications and their wide usage in delivering critical services made them a ==prime target of cyber-attacks==
 - the ==rapid evolution and advance in web technologies== have made the structure and interaction between the web client-side and server-side components of modern web apps ==more and more complexes, rising new challenges==

==Web apps security has become increasingly challenging==

Web security issues: targets user's browser or the web app hosting server
## Approach

The paper :
- ==defines== various requirements of a good [[taxonomy]]
- analyzes the pros and cons of previous web security threats taxonomies
- proposes a new taxonomy that provides the ten requirements of a good taxonomy
- the proposed taxonomy integrates both client-side web threats, and server-side web threats

**Methods**
- [[SLR (systematic literature review)]]

## Proposed taxonomy

The author's taxonomy integrate the [[OWASP (Open Web Application Security Project)]] classification covering few other cases in the client context.

**Client-side web threats taxonomy**
A web client can be both a human or a bot. This two scenarios can lead to different taxonomies. In general, we can distinguish the following areas:
- **social engineering**: the art of manipulating a person to steal confidential information (see [[phishing attack]]).
- **client side executable code injection**: the code injected through the various inputs of a web application does not affect the server-side, but it can be executed on the client-side and impacts the server security services
- **security misconfiguration**
- **using components with known vulnerabilities**
- **sensitive data exposure**
- [[MiTM (man-in-the-middle) attack]]
- [[MiTB (man-in-the-browser) attack]]



---
#### References
- [[ref_taxonomy_web_applications_threats]]