---
ID: 2026-01-13T07:56:32.656Z
tags:
  - paper
  - BOLA
  - IDOR
  - BAC
  - dataSecurity
Rank: A*
---
## Context

[[BOLA (Broken Object Level Authorization)]] vulnerabilities, also known as [[IDOR (Insecure Direct Object Reference)]], have gained the top position in the OWASP Top 10 rankings.

CVE-2022-31295: The URL `http://vulnerable.com?delpost.php?id=1` requests the deletion of a post whose id equals 1. Only the creator of the post should be able to delete a post. However, due to missing checks, by simply editing the id of the post an attacker can delete whatever posts on the blog.

How can we precisely and automatically infer object-level authorization models?
- fine-grained application-specific semantics

How can we detect BOLA/IDOR vulnerabilities efficiently?
- this often demands expensive path-sensitive analysis such as model checking and symbolic execution, which does not scale

**Contributions**
- a dataset of BOLA vulnerabilities
- automatically inferring authorization models: based on relations between different database tables
- detection of BOLA vulnerabilities due to missing object-level authorization checks
- BOLARAY detected 155 new vulnerabilities, with 52 of them having an CVE ID

Missing authorization checks:
- permission checks are entirely missing
- checks are present but are incomplete. This may involve sub-checks

## Approach

The BOLARAY combines SQL analysis with static code analysis to automatically infer and classify distinct object-level authorization models within an application. It then checks whether the application’s implementation properly enforces authorization for these models, identifying any potential vulnerabilities.


## Evaluation


## Results


## Limits

- the tool works on PHP database-backed applications and SQL db

---
#### References
- [[(Huang, Shi, et al., 2024)]]
- https://github.com/BolaRay-d/BolaRay
