---
ID: 2025-01-21-15:31
tags:
  - "#definition"
  - clientSideAttacks
  - cyberSecurity
  - gui
---
## Definition

 Clickjacking attacks merge malicious UI elements with non-malicious UI elements, or transparently trick the browser into sending input to a malicious server or function call, rather than an intended function call.
 
There are many methods of attacking an application using clickjacking, with JavaScript, HTML, and CSS.
- Clickjacking attack are considered a form of ==user-interface keylogger==

When used against unsuspecting end users, clickjacking attacks can allow an attacker to steal valuable user input (sensitive data, financial transactions, etc...)

> [!SUMMARY]
> - The user has to click to a malicious link which points to a legitimate-looking website (may be a copy of a real trusted website)
> - The fake website contains invisible iframes and the actions of the user are captured by this invisible layer without him being aware of it

### Examples

**Camera and microphone exploit in Adobe Flash, 2008** 
The user:
- was mislead to play a web game, by clicking on a malicious link
- every click within this game corresponded with a click on a Adobe Flash settings page, that was embedded in a iframe
- When interacting with the clickjacking web page, the end user was tricked into passing clicks through to the privileged Adobe Flash privacy settings
- The result was that the Adobe Flash browser plug-in would share both camera and microphone control with the hacker

---
## References
- [[(Hoffman, 2024)]]
- Included in literature review, by [[(Onukrane, Skrodelis, et al., 2023)]]