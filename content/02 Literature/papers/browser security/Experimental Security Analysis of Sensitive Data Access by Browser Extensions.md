---
ID: 2025-06-19T13:09:35.911Z
tags:
  - ChromeWebStore
  - browser
  - browserExtension
  - dataSecurity
Rank: A*
---
## Context

Browser extensions, while enhancing web browsers and user experience, pose significant security risks. The underlying cause of the risk is the unfettered access of the HTML DOM tree to browser extensions (or any JavaScript) loaded onto the webpage
- Extensions are loaded at the same context level as the DOM nodes
- This leads to a lack of security boundary between the extension and the web page’s content, including sensitive information that users may enter

This violate user expectation

Proposed solution:
- restricting access to DOM nodes
- adding a sensitivity attribute to HTML elements to manage access

Browsers' password manager rely on accessing the password fields to save users' passwords and provide auto-fill features. Implementing security features for browsers' extensions may obstacle native functionalities of browsers, which often drive the browser business itself.

Browser extensions can be used for malicious purposes such as:
- read sensitive user data in emails
- perform [[phishing]] attacks

## Approach

Empirical study to understand the extent to which these vulnerabilities can be exploited.
- PoC extension that extracts user's password that is disguised as ChatGPT plugin
- The malicious extension passed the review on Google Chrome Web Store
- We analyzed the login pages of the top 10K domains to see if the password values can be extracted using our extension. We performed static and dynamic analysis of 28K extensions on the Web Store to identify extensions that have the necessary permissions to carry out the attack and extensions that are actively accessing and storing password values
- With this analysis, we identify 190 potentially malicious extensions that access password fields
- we propose *Extension Reviewer*, a LLM-driven framework that helps review an extension submitted to a web store
- we propose 2 countermeasure to mitigate the risks: a JavaScript package that websites can adopt to secure DOM elements from extensions' attacks (`<input is="secure-input" type="password">`), a browser-level solution that alert users when an extension accesses sensitive input fields (this is only theoretically described)

**Browser extension components**
- manifest file, which request necessary permissions (host permission, e.g., external websites or resources the extension needs to access, and API permissions, e.g., browser.storage or browser.cookies)
- content scripts: static JS files that are loaded with a webpage. They run in the same context as an extension of a website DOM tree
- background pages ([[SW (Service Worker)]]):  they react to browser events. They can communicate to static JS files through `postMessage` API

**Detecting malicious extensions**
- static and dynamic analysis
- flagging suspicious behaviors
- hidden Markov model to detect vulnerable and malicious extensions
- matching runtime behaviors against a set of heuristics to detect malicious extensions

> [!WARNING] 
> Once an extension is loaded on a webpage, it has unrestricted access to all elements on the page, including sensitive input fields. Such an extension, essentially a JavaScript program loaded into the DOM tree of the page, can access and potentially manipulate any data in the input fields on the page 

In 2020, Chrome introduced Manifest V3:
- extensions cannot modify network requests in real-time
- extensions cannot execute remote code

**PoC malicious browser extension**
- a SW ask a web server the string of the CSS selector who contains the password. The web server simply load the target page and parse the DOM to find it
- the password value is stored in the SW, and is passed to content scripts via `postMessage`
- the extension is labelled as 'GPT-based assistant offering ChatGPT-like functions'

## Results

- we find a previously unknown vulnerability, *Plaintext Visible*, where the password values are stored in plain text in the page’s HTML source code
- We found that more than ==1100 websites had this vulnerability (including gmail.com, facebook.com, cloudflare.com)==
- We find 190 extensions in Chrome Web Store, accessing and storing password fields
- we identified login pages for 8,410 websites out of the top 10,000 domains. Among these, we found password fields present on 7,140 websites
- We find that 12.5% (17.3K) extensions have the necessary permissions to extract sensitive information on all web pages
- 190 browser extensions store password values in a variable

## Limits

- This work focuses on Google Chrome
- we may have missed dynamically loaded pages that rely on user interaction to reveal login forms
- some websites may employ unconventional methods or unique identifiers for their login procedures (general `<div>` elements)

---
#### References
- [[(Nayak, Khandelwal, et al., 2024)]]
