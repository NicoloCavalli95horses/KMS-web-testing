---
ID: 2025-01-21-15:32
tags:
  - "#definition"
  - clientSideAttacks
  - cyberSecurity
  - GUI
  - tabnabbing
---
## Definition

*Tabnabbing* and *reverse tabnabbing* are a form of client-side attack that
combines elements of:
- [[phishing]] attacks, that trick the end user into interacting with a malicious web page
- [[redirect attack]], that redirect to a malicious web page

Browser's history sniffing can be used to accurate craft a specific URL to trick the user [[(Fonseka, Pashenna, et al., 2023)]]

## Classic tabnabbing: tab A changes tab B

- From an email, the victim access a malicious website (`evil.com`), that launch a new tab pointing to a trustful website (`bank.com`). The starting point is the tab `evil.com` (tab A).
- The victim access `bank.com`, which is the legitimate website he knows
- The victim keeps browsing on other tabs, and some time passes, while the tab of the `evil.com` is still opened
- The tab `evil.com` changes the page `bank.com` with a phishing website (for example, `b4nk.com`, using [[typosquatting]] techniques). This is done exploiting the `window.open()` function
- This means that if then the user comes to the website opened by `evil.com` again, now he can see a copy of the trustful website, asking him, for example, the user credential
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

## Reverse tabnabbing: tab B changes tab A

In reverse tabnabbing the malicious website is not the one that open the first tab, but *it is the one in the new tab*, that change its own content or the content of the previous tab after a while.

```js
// From tab B
window.opener.location = "https://fake-site.com";
```

**Example**  [[(Sanchez, 2020)]]
A user on Facebook can click a link to an external website that could act perfectly benign except from replacing the previous Facebook page itself with a fake copy that may be used to phish users into disclosing personal information or login credentials.

### Mitigation solutions

- when a website includes links to external resources, it can specify `rel="noopener noreferrer"` to prevent the new page from accessing the parent URL
- opening an `about:blank` tab  and setting the new window-s opener to `null` will prevent the new tab to have a reference to the original one
- the URL switch can be detected by tool that alert the user [[(Fonseka, Pashenna, et al., 2023)]]

**Browser extensions** [[(Fonseka, Pashenna, et al., 2023)]]
- Firefox plugin called NoTabNab [[(Unlu, Bicakci, et al., 2010)]]
- TabShots browser extension: takes snapshots of the browser in regular intervals
- TabsGuard
- TabSol
- TabSecure
- AgentTab

From [[(Unlu, Bicakci, et al., 2010)]]:
- By relying on the browser's password manager, it is possible to notice whether a login form is automatically filled in or not
- Even this strategy can be bypassed since the attacker could pretend that there is an auto-filling mechanism and then could tell the user the password is wrong and to try again

---

See also: [[top-level navigation]]
## References
- [[(Hoffman, 2024)]]
- [[(Sanchez, 2020)]]
- [[(Fonseka, Pashenna, et al., 2023)]]
- [[(Unlu, Bicakci, et al., 2010)]]

Project SLR:
- [[(De Ryck, Nikiforakis, et al., 2013)]]