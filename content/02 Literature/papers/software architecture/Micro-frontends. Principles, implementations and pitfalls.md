---
ID: "2025-03-06-10:42"
tags:
  - paper
---
## Context

Modern applications are often built with feature-rich and powerful frontend applications. When the number of functionalities grows, the frontend easily becomes hard to maintain, especially if developed by different teams.

[[MF (Micro-Frontend) architecture]]were introduced in 2016 to solve this problem and are now adopted by several large industries, including SAP, Springer, Zalando, New Relic, Ikea, Starbucks, DAZN.

## Approach

This paper present an overview of micro-frontend architecture, highlighting potentialities and drawbacks

### Open challenges

**Frontend Duplications**: when is the right moment to duplicate and abstract the code? Is the duplication of the frontend to different teams beneficial? 
- Wrong abstractions are way more expensive than duplication
- abstracting duplicated code is by far easier than unwinding an abstraction

---
#### References
- [[(Taibi, Mezzalira, 2022)]]