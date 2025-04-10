---
ID: 2025-03-18-16:12
tags:
  - "#definition"
  - clientStorage
---
## Definition

Web Storage in HTML5 uses a Storage object that represents a list of key-value pairs, much like those implemented in cookies. The object allows for simple  functionality, with methods including *set*, *get*, *remove*, and *clear* methods.

### Difference between Storage API and cookies

- [[cookie]] are ==transferred over every HTTP(s) messages automatically, whereas localStorage and sessionStorage data is not==
- if a cookies has the attribute `secure`, it will be send **only** over HTTPS
- if a cookies has the attribute `HttpOnly` it will **not** be accessible by JavaScript with `document.cookie`
- localStorage and sessionStorage data is only accessible from JavaScript, with `window.localStorage` and `window.sessionStorage`
- 5MB to 25MB storage capacity depending on the browser [[(Zhu, 2021)]]
- good support for both cookies and Web Storage API

### LocalStorage

- Local storage is designed to ==persist data== across browser sessions (no limit)
- Data stored in local storage *remains available even after the browser is closed and reopened*
- It is typically used for storing long-term, or “permanent” data such as user preferences, cached data (drafts, editing in progress such as long texts or images), or application state

### SessionStorage

- intended to store data for the ==duration of the page session==
- Data stored in session storage is accessible only as long as the browser tab or window is open. Once the tab or window is closed, the data is cleared
- Session storage is commonly used for ==temporary data that is only relevant to the current browsing session==, such as form data or navigation history within a single tab

### Difference between localStorage and SessionStorage

- localStorage and sessionStorage ==both extend== [Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage). There is no difference between them except for the intended "non-persistence" of sessionStorage.
- data stored in localStorage persists until explicitly deleted
- For sessionStorage, changes are only available per tab

### Security and privacy implications

- localStorage and sessionStorage data are ==not encrypted by default== [[(West, Pulimood, et al., 2012)]]
- since data is  stored with the client, the only point of access for that data is through the user's local machine
- both the sessionStorage and  localStorage attributes can be used as alternatives to cookies in order to provide the user  with control over their data
- unlike [[IndexedDB]], sessionStorage and localStorage cannot be used inside a [[SW (Service Worker)]] context [[(Chinprutthiwong, Vardhan, et al., 2021)]]

---
#### References
- [[(West, Pulimood, et al., 2012)]]
- [[(Zhu, 2021)]]