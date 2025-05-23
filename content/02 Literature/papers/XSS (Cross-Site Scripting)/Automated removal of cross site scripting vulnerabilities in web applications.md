---
ID: 2025-04-30T16:51:11.813Z
tags:
  - paper
  - projectSLR
  - XSS
Rank: A
Project:
  - SLR
---
## Context

The malicious script used in an [[XSS (cross site scripting)]] attack can be any kind of client side scripts (e.g., HTML, JavaScript, VBScript, and Flash) that can be interpreted by web browsers. XSS attacks may cause severe security violations such as account hijacking, data theft, cookie theft and poisoning, web content manipulation, and denial of service

## Approach

Two-phase approach for finding and removing potential XSSVs in server programs. The first phase adopts a taint-based analysis approach to track the flow of user inputs into HTML output statements and identify potentially vulnerable statements. The second phase uses pattern matching and data dependency analysis to identify the HTML contexts in which the user inputs are referenced and the required escaping mechanisms that prevent code injection. Then it performs source code generation and replacement to secure potentially vulnerable statements with proper escaping APIs.

## Evaluation


## Results



## Limits



---
#### References
- [[(Shar, Tan, et al., 2012)]]
