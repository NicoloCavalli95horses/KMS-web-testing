---
ID: 2025-03-28T08:57:17.512Z
tags:
  - paper
  - projectSLR
  - cookie
  - IndexedDB
  - HTML
Project:
  - SLR
---
Unsystematic literature review about client-side storage, with historical approach
## Context

Browser-based storage options, including [[Web Storage API (localStorage, sessionStorage)]] and [[IndexedDB]], may be a target of cyberattacks.
- browsing history, for example, is a precious information that may be attractive for marketing purposes

Businesses operating over the Internet need to maintain relations with their customers to ensure continuity, recognize previous customers, and simplify the eCommerce process. This is done using [[cookie]]
- cookies may be stolen, poisoned or injected, leaking sensitive information such as session IDs

**Security risks with IndexedDB**
- standard forensic tools may be used to identify data stored, and then deleted from IndexedDB
- data stored on the client file system is unencrypted

---
#### References
- [[(Kimak, Ellman, et al., 2015)]]
