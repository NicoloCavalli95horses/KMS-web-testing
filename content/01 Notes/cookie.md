---
ID: 2025-03-18-16:12
tags:
  - "#definition"
  - clientStorage
---
## Definition

Cookies are small text files stored on a user's computer and sent to a web server through HTTP messages to identify a user or save the application state. 

Cookies have been a primary source of controversy since they can be misused and  lead to violations of Internet privacy

### Third party cookies

Although cookies may be set only by the visited domain, it is possible for a page to contain images or elements from other domains. Cookies set from external domains while retrieving such elements are called ==third party cookies==
- Usually found in advertisements,  third party cookies can be used to track a user across multiple domains without explicit  permission from the user
- the user has no control over the way their data is used
- if cookies are transmitted via HTTP, a packet-sniffing third party may intercept sensitive data

### Session cookie

Stored by the browser and more "permanent" than [[Web Storage API (localStorage, sessionStorage)]], which are stored by the window.

---
#### References
- [[(West, Pulimood, et al., 2012)]]