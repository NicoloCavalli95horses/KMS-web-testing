---
ID: 2025-08-22T07:25:32.391Z
tags:
  - cookie
  - localStorage
  - authorization
  - BAC
  - accessControl
  - clientStorage
  - clientStorageAttack
Rank: A*
---
## Context

Broken Access Control (BAC) in web applications: [[cookie]], [[Web Storage API (localStorage, sessionStorage)]] and [[IndexedDB]] are accessed by third-party scripts.
- empirical study on Tranco’s top 10,000 websites
- 89.84% of all cookie accesses, 90.98% of all localStorage accesses, and 72.49% of IndexedDB accesses are done by third-party scripts

## Approach

Websites use persistent client-side storage as a means to store user- and site-specific data on  the user’s browser. This allows websites to maintain sessions  and identify users over subsequent requests, and also allows websites to persist other information across pages
- Third-party scripts included on a web page have unrestricted access to this data stored by the host in the browser
- [[SOP (Same-Origin Policy)]] treats third-party scripts included on the host page as belonging to the same domain
- [[CSP (Content Security Policy)]] only controls the domains from which the  scripts can be loaded on a page without specifying if/how each of  these scripts can access the host’s storage object

Attributes like the HttpOnly flag, Secure flag and SameSite flag were introduced to control the access of cookies by JavaScript (JS), sending cookies on unencrypted channels and on cross-site requests
- **HttpOnly**: blocks  all JS (including any third-party scripts), without exceptions (binary policy)
- **Secure** and **SameSite** flags only control the inclusion of cookies sent along with HTTP requests, thereby allowing all scripts included on the page to access these cookies (these flags are used to protect against [[CSRF (cross-site request forgery)]])
- **IndexedDB**: no mechanisms to restrict third-party scripts from accessing the local database

**Core idea**: associate labels or taints with all storage objects to distinguish the objects set by the host page from the cookies set by third-party scripts. Practically, we modified Firefox web browser to permit client-side storage labelling 
- Read or write access to each object is subject to checks comparing  the domain of the script accessing the object and the domains contained in the read-set or the write-set, respectively
## Results

We found that almost 95% of  all cookies, 91% of all the localStorage objects, and 74% of IndexedDB objects in the browser are accessed by third-party scripts.

## Limits

A coarse-grained blocking of access to cookies set by another domain may result in functionality breakage on the host page: it is the developer responsibility to grant or deny such access

---
#### References
- [[(Kancherla, Goel, et al., 2025)]]
