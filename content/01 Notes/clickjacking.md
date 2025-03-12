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

Attackers have used clickjacking attacks to trick users into liking a fan page on Facebook or re-tweeting a message on Twitter [[(Hazhirpasand, 2020)]]

### Types

**Jeopardizing target display integrity**  [[(Hazhirpasand, 2020)]]:
- a sensitive UI is hidden/made invisible and an attractive decoy is placed over or beneath it, nudging the user to interact with it

**Jeopardizing pointer integrity**  [[(Hazhirpasand, 2020)]]:
- a fake cursor (pointer) is used instead of the real cursor

**Jeopardizing temporal integrity attack**  [[(Hazhirpasand, 2020)]]:
- the sensitive element is not hidden, the users can potentially see it but are nonetheless tricked into making an unwanted click because they are engaged in a distracting activity. ==Humans need at least a few hundred milliseconds to react to a sudden visual change ==
- online games are a perfect example of this attack. Hackers can exploit this situation to get access to webcam, or to bypass security captcha embedded in an iframe

### Mitigation techniques

**Frame busting** [[(Hazhirpasand, 2020)]]
Frame busting is a technique to prevent a given web page from being loaded in a sub-frame. Many JS snippet have been proposed to implement that solution
- using `X-frame-Options` header in `HTTP` will prohibits a website from being rendered in a iframe. This option is currently supported by Firefox and Chrome
- only 11.11% of Alexa's top 1 million sites implement `X-Frame-Options` header 

---
## References
- [[(Hoffman, 2024)]]
- Included in literature review, by [[(Onukrane, Skrodelis, et al., 2023)]]
- Granting web permissions, by [[(Hazhirpasand, 2020)]]