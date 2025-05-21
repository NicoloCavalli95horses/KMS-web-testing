---
ID: 2025-03-21-13:49
tags:
  - "#definition"
  - crossDomainPolicy
  - COOP
  - attackMitigation
---
==A new tab opened with `window.open()` is under control of the original window by default==. 

COOP (Cross-Origin Opener Policy), prevent a website from cross-origin window reference manipulation ([[tabnabbing]], [[clickjacking]]), isolating the current window
- Using `Cross-Origin-Opener-Policy: same-origin`, it makes the reference null,
- can be implemented by the client, using the `meta` tag (not recommended) and by the server as HTTP header
- can be used also to defend against [[CSRH (Client-Side Request Hijacking)]] [[(Khodayari, Barber, et al., 2024)]]

### Example 

Windows opened via `window.open()` can communicate with each other, even if they come from different sources

```js
const newTab = window.open("https://example.com");
console.log(newTab.opener); // this has a reference to the other tab
```

With `Cross-Origin-Opener-Policy: same-origin` every window is isolated, and `window.open` is set to `null`

---
#### References
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy
- [[(Khodayari, Barber, et al., 2024)]]