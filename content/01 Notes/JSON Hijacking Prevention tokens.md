---
ID: 2025-06-10-15:47
tags:
  - "#definition"
  - JSON
---
## Definition

In order to prevent direct usage or tampering of HTTP responses in JSON format, it is nowadays rather common to make use of prevention token that pollute the JSON response on purpose.

For example, a string like `)]}'while(1);</x>//` may be appended to make the parsing of the JSON harder
- prevent an easy access to sensitive data by automatic parsers
- makes the content not executable in external scripts or iframes that try to include API via `script` or other HTML tags

This prevention tokens are not standard and may be application specific.
However, there are commonly used patterns such as `while(1)` and `for(;;)`, that breaks the logic of most common parsers.
`


