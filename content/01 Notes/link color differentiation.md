---
ID: 2025-08-14-13:11
tags:
  - "#definition"
  - historySniffing
  - clientSideAttacks
---
## Definition

Link color differentiation is a technique used for history sniffing. In old browsers, a malicious website could inject a list of hyperlinks of interests as DOM objects and use `getComputedStyle` API on each to check its color
- visited URL were displayed in different color compared to non-visited ones

Major browsers nowadays modified the implementation of `getComputedStyle` to return always the unvisited color.

---
#### References
- [[(Laperdrix, Starov, et al., 2021)]]