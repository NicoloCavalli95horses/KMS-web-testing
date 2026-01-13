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

**Finding real-world IDOR/BOLA**
- CVE database and Huntr platform
- filtered for open source applications with valid patches
- 3 authors examined the vulnerabilities independently and replicate them 

### Identifying four common BOLA vulnerabilities

The following models are derived from existing CVEs

**Ownership model**
- the most studied
- an user mistakenly owns a random object. The relation is one-to-one or one-to-many

**Membership model**
- the relation between users and objects is many-to-many: an object can be accessed by a specific group of users and a user can access multiple objects
- we have a BOLA when a user belonging to an external group can still access the target object

**Hierarchical model**
- combination of an ownership or membership model with one or multiple parent-child relationships between objects, where a parent object can own multiple child objects
- a user owns their post, and a post owns all comments on itself. Thus, the owner of a post also indirectly owns all comments on that post. We have a BOLA when the hierarchy is flawed (eg. a forum's admin deletes a notification of a forum he is not a member of)

**Status model**
- objects possess statuses, and users are only permitted to execute actions on objects when they are in specific states
- we have BOLA when an action is still permitted when the object is not in the right status (eg. commenting a post which is not in an "open" status)

All these BOLA/IDOR cases can be solved by adding checks in the  PHP source code or in SQL statements 

### Bolaray

A first module infers object-levels authorization models in three steps
- constructs a database schema from table creation statements
- derives table relationships by analyzing implicit foreign key references
- infers authorization models from these table relationships

 A second module detects BOLA vulnerabilities by verifying that the set of checks for an object access enforces the authorization model of that object


> [!BOLARAY SUMMARY]
> The BOLARAY combines ==SQL analysis with static code analysis== to automatically ==infer and classify distinct object-level authorization models== within a PHP application. It then checks whether the application’s implementation properly enforces authorization for these models, identifying any potential vulnerabilities.

## Evaluation


## Results


## Limits

- the tool works on PHP database-backed applications and SQL db

---
#### References
- [[(Huang, Shi, et al., 2024)]]
- https://github.com/BolaRay-d/BolaRay
