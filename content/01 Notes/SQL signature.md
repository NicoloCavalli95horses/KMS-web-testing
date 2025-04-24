---
ID: 2025-04-24-10:49
tags:
  - "#definition"
  - SQL
  - SQLIA
---
## Definition

A SQL signature is an abstract and standard representation of *all the possible SQL queries* that an application can generate.

A SQL signature is built on:
- script name
- query skeleton (the fixed part of the SQL, without the actual values)

**Example**

```txt
{user.php, SELECT * FROM registration WHERE user_id = <Token>}
```

Here, a `<token>` is just a placeholder for a value that may be unbounded

## Why is this helpful?

Parameter values ​​are constantly changing, ==but the query structure is not==. A signature of the queries helps to :
- Easier and more automatable analysis
- Reduce complexity
- Infer the program specification (that is, the desired behavior of the system) in a black-box fashion
- Detect anomalous behavior or vulnerabilities, such as [[SQLIA (SQL injection attack)]]
- Detect a new, unexpected flow
- Detect a bug in the code

---
#### References
- Used by [[(Li, Yan, et al., 2012)]] 