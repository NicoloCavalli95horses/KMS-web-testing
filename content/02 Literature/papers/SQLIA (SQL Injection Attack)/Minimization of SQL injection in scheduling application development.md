---
ID: 2025-03-27T08:04:57.716Z
tags:
  - paper
  - projectSLR
  - SQLIA
  - IndexedDB
  - PDO
Project:
  - SLR
---
Poorly written, not clear in the methodology, not well structured.
## Context

The three tiers shaping the architecture of client-server are generally known as user interface module, functional process logic module and data storage module. [[SQLIA (SQL injection attack)]] occur when an attacker adds SQL code to a web form input box, to access the gain resources or make changes to data.

SQLIA can be implemented leveraging on:
- tautologies
- union attacks
- logically incorrect queries
- piggy bank

[[PDO]] provides a database abstraction layer that can use the same functions to execute SQL commands on any database
- PDO is secure and flexible
- Through the use of  prepared statements PDO can mitigate SQLIA

### Approach

A in-house application is implemented using PDO parameterized query to prevent SQL Injection for an high school in North Sulawesi, Indonesia. Common SQLIA attacks were prevented by the refactoring

---
#### References
- [[(Sendiang, Polii, et al., 2016)]]
