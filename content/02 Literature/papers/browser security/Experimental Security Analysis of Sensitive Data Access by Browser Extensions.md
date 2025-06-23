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
- we propose 2 countermeasure to mitigate the risks: a JavaScript package that websites can adopt to mitigate the attack, a browser-level solution that alert users when an extension accesses sensitive input fields

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

## Evaluation



## Results


## Limits

- This work focuses on Google Chrome

---
#### References
- [[(Nayak, Khandelwal, et al., 2024)]]
