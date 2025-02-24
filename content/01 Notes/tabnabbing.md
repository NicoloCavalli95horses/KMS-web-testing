---
ID: 2025-01-21-15:32
tags:
  - "#definition"
  - clientSideAttacks
  - cyberSecurity
  - gui
---
## Definition

*Tabnabbing* and *reverse tabnabbing* are a form of client-side attack that
combines elements of:
- [[phishing]] attacks, that trick the end user into interacting with a malicious web page
- [[redirect attack]], that redirect to a malicious web page

### How does it work?

- The victim access a malicious website (*website A*), that has a link to a trustful website (*website B*), for example the website of a bank
- The victim clicks on the link and open the *website B*, while the tab of the *website A* is still opened
- After the victim comes back to the *website A*, that is the malicious one, the *website B* can be changed, exploiting the `window.open()` function
- This means that if then the user comes to the *website B* again, now he can see a copy of the trustful website, asking him, for example, the user credential
- ==Sensitive data may be stolen or unauthorized financial transactions may be requested==
- The user may be ==redirected to an error page on the trusted website after the theft has taken place==

> [!SUMMARY]
> When a new tab is opened via the `window.open()` function, the function call returns a reference to the new window object that corresponds to the new tab. This means that the new opened web page can be modified, later in time, by the initial website.

### Example 

``` js
<button onclick="goToLegitWebsite()">
  click to go to your bank website
</button>

function goToLegitWebsite() {
  // open new tab pointing to legit-website.com
  const windowObj = window.open("https://website-b.com");
  // after 5 minutes, change the other tab 
  setTimeout( () => {
   windowObj.location.replace("https://website-c.com");
  }, 1000 * 60 * 5);
};
```

---
## References
- [[(Hoffman, 2024)]]