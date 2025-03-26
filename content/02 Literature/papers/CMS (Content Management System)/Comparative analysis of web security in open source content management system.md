---
ID: 2025-03-26T10:29:17.162Z
tags:
  - paper
  - Joomla
  - Drupal
  - Wordpress
  - projectSLR
  - CMS
Project:
  - SLR
---
Poorly written paper
## Context

A CMS (Content Management System) is *a system that’s lets you apply management principles to content*
Generally all CMSs fulfill common task of content like create, edit, publish
- Joomla, Drupal and WordPress are one of the best open source CMSs

This papers compare these well-known CMSs and assesses their security by attacking a page build with all of these tools
- manually, by executing [[XSS (cross site scripting)]], [[SQLIA (SQL injection attack)]] and [[CSRF (cross-site request forgery)]]
- automatically, by using a web vulnerability scanner ([[Acunetix]])

**Symptoms of attacks in a webpage (admin POV)**
- Automatic Google alerts
- user report getting viruses from your page
- user report being redirected to other websites
- the website traffic decreases dramatically and suddenly
- the files contain code you did't put there
- the search engine result page (SERP) listing suddenly change

## Results

The listed CMS provide good basic security that we have not been able to hack directly using various web hacking techniques. These CMS are usually hacked due to ==faulty and unofficial plugins==

The penetration testing done with Acunetix highlighted that WordPress has few sensitive files and directories compared to the other CMSs. We can conclude that WordPress provides better security

---
#### References
- [[(Patel, Rathod, et al., 2013)]]
