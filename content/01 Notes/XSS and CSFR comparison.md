---
ID: 2025-02-03-15:06
tags:
  - "#definition"
  - cyberSecurity
  - clientSideAttacks
  - comparison
---
## Definition

[[XSS (cross site scripting)]] and [[CSRF (cross-site request forgery)]] are both client-side attacks that can severely damage a brand reputation, leading to privilege escalation issues and unauthorized operations.

Even if they ==both rely on arbitrary code execution==, the main difference is the type of attack and how they exploit vulnerabilities in a web application:

### XSS (Cross-Site Scripting)

- An XSS attack focuses on injecting malicious JavaScript into a web page that is viewed by another user. The goal is to execute malicious code in the browser of the user viewing the page.
- The attacker injects malicious script (such as JavaScript) into a part of a website that will be viewed by another user (for example, in comments, messages, or URL queries). When the user loads the page, the malicious JavaScript is executed in their browser.

**Example**: The attacker inserts a script into an input field on a website (e.g. a comment or search), and when another user visits that page, the script performs malicious actions such as stealing session cookies or performing unauthorized actions on behalf of the user (stored XSS)

### CSRF (Cross-Site Request Forgery)

- The CSRF attack aims to force an authenticated user to send an unauthorized request (such as changing account information, making purchases, etc.) to a web application. The attacker exploits the application's trust in the user's browser
-  The attacker creates a hidden link or form that, when clicked or submitted by the user, sends an HTTP request to a web application where the user is already authenticated. The web application cannot distinguish whether the request is legitimate or not, since the user has an active session.

**Example**: The attacker sends a link or form that the user, if accidentally clicked or submitted, will perform an action such as transferring money or changing profile settings on a website where they are already authenticated.

---

#### References


