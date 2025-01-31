---
ID: 2025-01-31-15:43
tags:
  - paper
  - cyberSecurity
  - obfuscation
  - JavaScript
  - webApplication
  - browser
---
## Context

[[code obfuscation]] refers to obscuring the intended meaning of source or machine code. Therefore, obfuscation can be seen as an approach to increase software security: it deliberately makes code hard to understand and analyze, usually to deter reverse engineering or prevent tampering. 

One particular area ==obfuscation== has been ==applied to in recent years is the client-side security of JavaScript web applications==. JavaScript is a high-level interpreted programming language, usually executed on the client side in the browser, meaning the source code of applications is visible for the web browser and the user. To make the code less human readable and the protect it from reverse engineering, JavaScript obfuscators have become available on the web in great numbers. Some of these obfuscators claim to prevent code from being stolen and make it practically impossible to reverse engineer.

## Approach

This research study and compare 9 different JavaScript obfuscators. JavaScript implementations of three different sorting algorithms - bubble sort, quick sort and radix sort - were then obfuscated using the selected obfuscators and the obfuscation transformations were analyzed

---
#### References
- [[ref_comparison_js_obfuscator]]
