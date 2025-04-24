---
ID: 2025-04-24-10:48
tags:
  - "#definition"
  - statistics
---
## Definition

The Kolmogorov-Smirnov (KS) test is a nonparametric statistical test used to compare an empirical distribution with a theoretical distribution, or to compare two empirical distributions with each other.

### Use cases

- when you want to know if a set of data follows a known distribution
- when you want to compare two samples to check if they are from the same distribution

### Examples

[[(Li, Yan, et al., 2012)]]:
- used the KS-test to check if SQL queries parameters are bounded or not
- for bounded parameters, a limited set of variations is possible. For example, the set of roles defined in a [[RBAC (role-based access control)]] system. In this case, the hypothesis is that the more queries are observed, the more logarithmic the curve is, because the set of parameters is finite)
- for unbounded parameters, an unlimited set of variations is possible. For example, the ID of the users are potentially infinite.  In this case, the hypothesis is that the more queries are observed, the more linear the curve of the unbounded parameters is.

---
#### References
- Used by [[(Li, Yan, et al., 2012)]] to build [[SQL signature]]