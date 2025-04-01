---
ID: 2025-04-01T08:25:38.071Z
tags:
  - paper
  - projectSLR
  - tabnabbing
Project:
  - SLR
---
A Firefox plugin is developed to defend against tabnabbing. Short paper with no references
## Context

A possible [[tabnabbing]] attack, works as following:
- User navigates to a malicious website that includes the attack script, but initially it looks completely normal. It could be as a result of a [[phishing]] attack or as a result of a [[XSS (cross site scripting)]]
- A script on this website detects when the page is not interacted with, or waits for some predetermined duration
- The script replaces the legitimate website with a copy of it, usually trying to imitate the legitimate version as much as possible, in order for the victim not to notice the change
- The user returns to the page and sees a login page or a message like "Your session is expired" or "You are required to login again"
- The user thinks he has been logged out and tries to login again providing login information
- The page captures login information and send them to the attacker
- The page may redirects the user to the original mail page which the user is already logged in. In this way the attack is completely invisible to the user


---
#### References
- [[(Unlu, Bicakci, et al., 2010)]]
