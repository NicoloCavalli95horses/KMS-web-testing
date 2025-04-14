---
ID: "2025-04-14-10:55"
tags:
  - "#definition"
---
## Definition

A ==top-level navigation changes the URL in your address bar==.
Resources that are loaded by iframe, img tags, and script tags do not change the URL in the address bar so none of them cause top level navigation.

**A top-level navigation can be made**
- by explicitly typing the URL address on the URL bar
- with `window.open()`: open a new tab or substitute the current URL
- with `location.assign()` or `location.replace()` : substitute the current URL

The difference between `assign()` and `replace()`:
- `replace()` removes the current URL from the document history.
- With `replace()` it is not possible to use "back" to navigate back to the original document.

## Security

 - `location.assign()` accepts URLs with the javascript scheme, which enable [[XSS (cross site scripting)]] if there is no or improper input validation

---
#### References
- https://stackoverflow.com/questions/67689503/what-is-top-level-navigation-in-browser-terminology-and-in-what-ways-it-can-be-t