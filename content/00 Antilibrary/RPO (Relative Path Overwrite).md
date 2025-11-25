---
ID: 2025-11-25-13:01
tags:
  - "#definition"
  - RPO
  - clientSideAttacks
  - cyberAttack
  - cyberSecurity
---
## Definition

RPO (Relative Path Overwrite) is a technique to take advantage of relative URLs by overwriting their target file.

In certain settings an attacker can manipulate a page’s URL in such a way that the web server still returns the same content as for the benign URL. However, using the manipulated URL as the base, the web browser incorrectly expands relative paths of included resources, which can lead to resources being loaded despite not being intended to be included by the developer.
- Depending on the implementation of the site, different variations of RPO attacks may be feasible
- For example, ==an attacker could manipulate the URL to make the page include user-generated content hosted on the same domain==

When an injection vulnerability is present in a page, an attacker could manipulate the URL such that the web page references itself as the stylesheet, which ==turns a simple text injection vulnerability into a style sink==

**Entry points**
- URLs, [[cookie]], forms

---
#### References
-  [[(Arshad, Mirheidari, et al., 2018)]]
- https://thespanner.co.uk/2014/03/21/rpo