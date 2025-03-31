---
ID: 2025-03-18-16:12
tags:
  - "#definition"
  - clientStorage
---
## Definition

HTTP(s) is stateless by design, therefore web developers need to implement their own authentication mechanisms to keep track of state information across different requests

The most widespread solution for tracking state relies on **cookies**
- cookies are key-value pairs which are chosen by the server so as to identify the user’s browser or save the application state
- Cookies are small text files stored on a browser and are sent automatically with each HTTP

Cookies have been a primary source of controversy since they can be misused and lead to violations of Internet privacy.

The storage capacity of a cookie is 4KB [[(Zhu, 2021)]]
- A cookie will be attached to the header of each HTTP request: if more content is stored it will have a bad impact on HTTP communication efficiency
- Use [[Web Storage API (localStorage, sessionStorage)]] if more information needs to be stored

### Third party cookies

Although cookies may be set only by the visited domain, it is possible for a page to contain images or elements from other domains. Cookies set from external domains while retrieving such elements are called ==third party cookies==
- Usually found in advertisements,  third party cookies can be used to track a user across multiple domains without explicit  permission from the user
- the user has no control over the way their data is used
- if cookies are transmitted via HTTP, a packet-sniffing third party may intercept sensitive data

### Session cookie

Stored by the browser and more "permanent" than [[Web Storage API (localStorage, sessionStorage)]], which are stored by the window.
- Stealing or guessing this cookie can lead to [[session hijacking]]

 [[(Calzavara, Tolomei, et al., 2014)]] have analyzed differences in session cookies, recognizing that not all the cookie with "random long text" are actually session cookie, or even essential for the user to be authenticated.
 - multiple cookies may be used together to compose the session token (auth token)
 - there may be session tokens that are actually not involved in the authentication mechanism
 - an authentication token is ==a minimal set of cookies which allows the server to authenticate the client,== restoring the state of the associated user without asking her to log in again
 - this also means that a session is vulnerable if and only if all the components of the session ID are known to the attacker
 - a defense for cookie-based sessions is effective if can recognize at least 1 essential component of the session ID

---
#### References
- [[(West, Pulimood, et al., 2012)]]
- [[(Zhu, 2021)]]
- [[(Calzavara, Tolomei, et al., 2014)]]