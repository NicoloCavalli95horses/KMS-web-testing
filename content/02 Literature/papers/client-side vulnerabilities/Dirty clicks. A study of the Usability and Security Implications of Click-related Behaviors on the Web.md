---
ID: 2025-03-04-09:53
tags:
  - paper
  - cyberSecurity
  - webApplication
  - clientSideAttacks
  - clickingBehaviour
  - hci
---
## Context

The first comprehensive study of the possible security and privacy implications that clicks can have from a user perspective, analyzing what is shown to users and what actually happens after.
- Click-related issues are classified
- Target websites are analyzed
- A set of countermeasures is proposed

**A server-focused research**
Most of the work performed to date on clicking behavior has focused on the server side (i.e., on how an application can identify if a click was actually made by a real user, and not by an automated machine or a script)
- important implications for pay-per-click (PPC) advertising)

**A widespread problem**
Around 80% of the tested domains adopt some form of misleading technique that would prevent users from making informed decisions on whether they want or not to click on a given link
- similar techniques were find in both legitimate website and in "dubious" website (free streaming, porn)

70% of the domains exposed users to unexpected [[man-in-the-middle attacks]], 20% of which were completely unpredictable

10-20% of the time a link results in a visit to a highly dangerous website

###  The click contract

Basing on web recommendations/standards and user experience handbooks, the authors propose a **click contract** that should be respected by websites to improve both security and usability.

**What You See Is What You Get**
1. When a user clicks on a link whose target URL is displayed by the browser at the bottom of the screen, she expects to navigate to that same destination. In case redirections happen afterwards as a consequence of the click, the user expects to remain within the same domain of the displayed URL, or the website she is on at the moment of clicking
2. If an object is clickable, but the browser does not show any domain at the bottom of the web page, a user expects the click to generate some action within the current website and not to navigate to a different domain
3. The user does not expect any external navigation to take place when she clicks on a non-clickable element of the page (such as a simple text paragraph)
4. When the user clicks an HTTPS link, she expects that the communication towards the target URL will be encrypted

**Trust in the Endpoints**
1. If a user on a website A clicks on a link to a domain B, she does not expect any other domain, apart from A and B (or those included by them), to execute code in her browser
2. If cookies are created in the process that follows a click, the user only expects cookies from the domain she clicked, or from any of the third party domains included by it
3. If a new tab is opened by the browser after the user clicks on a link, the new tab should not be able to interact with the other tabs already open in the browser (see [[tabnabbing]])

## Approach

A list of top-ranked domains, according to Alexa, were analyzed. The hypothesis was that the prevalence of "dirty clicks" was higher in "grey" websites (free streaming, porn)

The click analysis tool was implemented as a web crawler that:
- receives as input the main URL of a website
- loads the page
- recursively visits three randomly selected pages up to a distance of three clicks from the homepage


---
#### References
- [[(Sanchez, 2020)]]