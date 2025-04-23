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

Even if they both rely on code execution, the main difference is the type of attack and how they exploit vulnerabilities in a web application

### XSS (Cross-Site Scripting)

- An XSS attack focuses on ==injecting malicious JavaScript into a web page that is viewed by another user.== The goal is to execute malicious code in the browser of the user viewing the page
- The attacker injects malicious script (such as JavaScript) into a part of a website that will be viewed by another user (for example, in comments, messages, or URL queries). When the user loads the page, the malicious JavaScript is executed in their browser

### CSRF (Cross-Site Request Forgery)

- The CSRF attack aims to ==force an authenticated user to send an unauthorized request== (such as changing account information, making purchases, etc.) to a web application. The attacker exploits the application's trust in the user's browser
- The victim is logged in (`bank.com`), clicks on (`evil.com`) where the script of the attacker is executed. The script sends an HTTP request to (`bank.com`), and since this web application cannot distinguish whether the request is legitimate or not, the request is executed
- It is often based on an XSS but not necessarily