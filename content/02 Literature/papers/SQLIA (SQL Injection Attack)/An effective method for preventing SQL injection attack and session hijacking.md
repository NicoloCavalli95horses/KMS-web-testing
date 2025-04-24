---
ID: 2025-03-26T08:32:19.966Z
tags:
  - paper
  - Sha-1
  - SQLIA
  - cryptography
---
Badly written paper. Limits of the methods are not highlighted
## Context

This paper proposes an effective method for preventing the [[SQLIA (SQL injection attack)]] and [[session hijacking]]. The use of hashing technique (SHA1) is suggested

## Approach

When a user registers, the system creates a SQL query to authenticate the user, for example:

`SELECT * FROM users WHERE username = 'Alice' AND password = 'password123'`

==This entire query (not just username and password) is passed to a hashing function== (SHA-1):

`HashDigest = SHA1("SELECT * FROM users WHERE username = 'Alice' AND password = 'password123'")`

The resulting value (HashDigest) is saved in the database.

When the user attempts to log in, the system reconstructs the same SQL query with the data entered and calculates the corresponding hash. If the newly calculated hash is identical to the one saved in the database, access is granted.

**Why does it work?**

If an attacker tries to use a tautology, such as `Username: Alice  
Password: ' OR '1'='1`, the final query will be

`SELECT * FROM users WHERE username = 'Alice' AND password = '' OR '1'='1'`

This query has a different syntax than the original one, so its hash will be different. When the system compares the stored hash with the hash of the modified query, ==the comparison fails and access is denied.==

## Limits

- Does not fully protect against SQL injection
- An attacker could try to test different input variations to generate an identical hash
- If the site uses a dynamically structured query, the hash may not always be the same
- Using SHA-1 is risky: ==SHA-1 is old and vulnerable to collisions== (i.e. two different inputs could produce the same hash)
- **Not a best practice**: more reliable ways to prevent SQL injection is to use parameterized queries (prepared statements) instead of this hashing-based system.

---
#### References
- [[(D'silva, Vanajakshi, et al., 2017)]]
