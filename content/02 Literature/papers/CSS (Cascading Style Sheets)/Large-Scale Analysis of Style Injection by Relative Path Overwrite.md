---
ID: 2025-11-25T12:00:36.206Z
tags:
  - paper
  - CSS
  - clientSideAttacks
  - RPO
Rank: A*
---
## Context

[[RPO (Relative Path Overwrite)]] is a recent technique to inject style directives into sites even when no style sink or markup injection vulnerability is present. It exploits differences in how browsers and web servers interpret relative paths (i.e., path confusion) to make a HTML page reference itself as a stylesheet

We define a page as vulnerable if: 
- The page includes at least one stylesheet using a relative path
- The server is set up to serve the same page even if the URL is manipulated by appending characters that browsers interpret as path separators
- The page reflects style directives injected into the URL or cookie. Note that the reflection can occur in an arbitrary location within the page, and markup or script injection are not necessary
- The page does not contain a `<base>` HTML tag before relative paths that would let the browser know how to correctly expand them

This attack ==corresponds to style injection by means of a page that references itself as a stylesheet (PRSSI)==
## Approach

Little is known about how widespread RPO vulnerabilities are on the Web.
In this paper
- we present the first in-depth study of style injection vulnerability using RPO
- We extract pages using relative path stylesheets from the Common Crawl dataset
- automatically test if style directives can be injected using RPO
- determine whether they are interpreted by the browser

We find that 377 k pages (12 k sites) are vulnerable; 11 k pages on 1 k sites can be exploited in Chrome, and nearly 55 k pages on over 3 k sites can be exploited in Internet Explorer.
## Methodology

Our methodology consists of three main phases
1. **Find candidates**. We seed our system with pages from the Common Crawl archive to extract candidate pages that include at least one stylesheet using a relative path
2. **Find vulnerability**. To determine whether these candidate pages are vulnerable, we attempt to inject style directives by requesting variations of each page’s URL to cause path confusion and test whether the generated response reflects the injected style directives
3. **Confirm vulnerability**. Finally, we test how often vulnerable pages can be exploited by checking whether the reflected style directives are parsed and used for rendering in a web browser.


## Limits

What are the limits of the research? What could be improved?

---
#### References
- [[(Arshad, Mirheidari, et al., 2018)]]
