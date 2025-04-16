---
ID: 2025-04-16-15:04
tags:
  - "#definition"
  - softwareEngineering
---
## Definition

Function variadicity occurs when a function can be called
with an arbitrary number of arguments, regardless of its
declaration.
- If fewer arguments are provided than in the declaration, the values of the rest of the declared arguments are set to be `undefined`
- If more arguments are provided than in the declaration, the arguments can be accessed through an associated arguments array (see [[04 Functions]])

---
#### References
- (Wei, Ryder, 2013)