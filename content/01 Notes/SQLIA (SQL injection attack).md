---
ID: 2024-12-10-10:23
tags:
  - definition
  - cyberSecurity
---
## Types of SQL attacks

| **Type of attack**           | **Intent**                                                                                                                                                        | **Example**                                                                                                     |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| tautologies                  | the attacker bypasses the authentication providing conditional SQL query that are always true                                                                     | SELECT * FROM accounts WHERE user='' AND pass='123' or 1=1;                                                     |
| logically incorrect queries  | the attacker inserts input that will return logical errors or syntax errors, in order to get information about the database schema and other sensitive parameters | SELECT * FROM accounts WHERE user='' AND pass=convert(int, (SELECT last_name FROM sysobjects WHERE xtype='u')); |
| union query attacks          | the UNION operator is exploited to combine original queries to other malicious ones, in order to get sensitive data                                               | SELECT * FROM accounts WHERE user='jiayue' AND pass='123' UNION SELECT * FROM member WHERE user='admin';        |
| piggy-backed queries attacks | extra commands are inserted (DROP, INSERT) by using the separator ; to execute forbidden operations                                                               | SELECT * FROM accounts WHERE user='jiayue' AND pass='123'; DROP TABLE accounts;                                 |
| timing injection attacks     | delays in the response are exploited to verify conditions                                                                                                         | IF (condition) WAITFOR DELAY '00:00:05'                                                                         |
| blind injection attacks      | logical questions are asked to the database by using complex queries. The answers are analyzed to get sensitive information about the database structure          | SELECT * FROM accounts WHERE user='jiayue' AND 1=1; e SELECT * FROM accounts WHERE user='jiayue' AND 1=0;       |
| alternate encodings          | the attacker bypasses attack detention systems by encoding the query or part of it                                                                                | SELECT * FROM accounts WHERE user='jiayue' AND pass='123'; EXEC(char(0X53485554444F574E));                      |
| stored procedure attacks     |                                                                                                                                                                   | SELECT * FROM accounts WHERE user='jiayue' AND pass='123'; SHUTDOWN;                                            |

## References
[[ref_overview_sql_injection_detection]]