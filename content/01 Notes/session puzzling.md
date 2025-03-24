---
ID: "2025-03-24-10:04"
tags:
  - "#definition"
---
## Definition

Uncontrolled creation/population of session objects ([[sessions token]]) or usage of identical session variables at various application entry points is called overloading of session variables, and may lead to session puzzling attacks

These attacks do not contain any malicious input, ==they are legal actions allowed by the web application==, but when performed in a particular order compromise the intended functionality of the application
- While exploiting session puzzles, the creation of session objects can be indirectly initiated, and later exploited by accessing a sequence of entry points (web pages, web services, remote procedure calls, etc.) in a certain order
- Session puzzles enable adversaries to perform a variety of malicious actions such as bypassing authentication/authorization and elevation of privilege

---
#### References
- [[(Deepa, Thilagam, et al., 2018)]]