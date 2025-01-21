---
ID: 2025-01-21-14:34
tags:
  - cyberSecurity
  - gui
  - clientSideAttacks
---
In the pre-modern world of application security (Web 1.0), it was assumed that the client was not a common attack vector for hackers. Companies invested very little in ensuring that the client-side of an application was secure.

With Web 2.0, more and more functionalities and business logic were pushed to the client-side, because client technologies allowed to lighten the server load and to improve the user experience at the same time;
- local and session storage, and [[IndexedDB]]  were progressively integrated in web applications 
- Asynchronous JavaScript and XML (AJAX)-type networks queries were used to maintain, update, and store the user state
- client-side improvements to the JavaScript programming language and browser DOM allowed complex component life cycles with updates, renders, re-renders, deletes, implementing behaviors similar to those of desktop applications

> [!NOTE]
> The overall role of the client-side shifted from a simple rendering system to a system that play a non trivial role in managing the business logic in collaboration with the backend side.

**Two types of client-side attacks**
- general forms of ==vulnerabilities that can affect either a client or a server ==([[ReDoS (Regular Expression Denial of Service)]] attacks, [[DoS (Denial of Service)]])
- ==specific attacks that exists solely on the client== and will likely never appear on the server (DOM-based [[XSS (cross site scripting)]])

## Why we should care about client-side attacks?

Client-side attacks are very hard to trace and record and might be very dangerous
- with DOM XSS attacks, the victim's DOM is exploited ==without any web server even becoming aware== that exploitation is occurring
- Malicious payloads can be delivered directly to a browser client, avoiding web servers that may be logging network traffic and attempting to find malformed requests
- In server-side attacks, hackers need to make multiple attempts to find an access point. These attempts, that are often automated, generate a pick in the network traffic that can be detected. In client-side attacks, hackers can simply copy the whole client-side web application, which is public, and ==can attempt to hack the UI undisturbed==

**Common client-side attacks**
- [[prototype pollution]]
- [[clickjacking]] attacks
- [[tabnabbing]] attacks