---
ID: 2024-12-10-10:23
tags:
  - definition
  - cyberSecurity
  - SQLIA
---
> [!WARNING]
>  Many Web applications use client-supplied data in SQL queries. However, if the application does not strip potentially harmful characters, users can add SQL statements into their inputs. This is called SQL injection

A SQL Injection attack occurs when an attacker exploits vulnerabilities in a web application's input validation mechanisms to execute malicious SQL statements

### Threat model

In a SQLIA scenario, the attacker
- is able to manipulate the contents or the sequence of web requests
- cannot directly compromise the server state or the server code

### Risks and consequences

- unauthorized access to database information
- reading, writing, modifying, creating or deleting data
- extract sensitive information (usernames, passwords, financial data)
- carry out database administration tasks
- in some cases, issue commands to the operating system
- malicious SQL queries that exploits logical flaws at the server side can be used to access restricted information [[(Li, Yan, et al., 2012)]] 

## Example

Consider a vulnerable backend that makes use of the following query:
```sql
SELECT * FROM users WHERE username = 'USER_INPUT' AND password = 'USER_PASSWORD';
```

If the backend does not validate the user input and this is used as it is, an attacker could submit to the server the following code:

```sql
' OR '1'='1
```

Hence, the resulting SQL query would be

```sql
SELECT * FROM users WHERE username = '' OR '1'='1' AND password = '';
```

Since the condition '1'='1' always evaluates to true, the query returns all rows in the users table. This might allow the attacker to bypass authentication and gain unauthorized access.

## Types of SQL attacks

 [[(D'silva, Vanajakshi, et al., 2017)]], [[(Sendiang, Polii, et al., 2016)]]

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

### Common SQLIA prevention techniques

- **Parameterised queries:** Many cases of SQLIA can be eliminated simply by using parameterised queries instead of concatenating user input to the SQL query
- **Whitelisting**: user input should always be treated as untrusted and filtered through a whitelist which only allows some of the input that matches a pattern
- **Use verified mitigation techniques**: do not try to build SQLIA protection from scratch. Most modern programming tools can give you access to SQLIA protection features
- **Implement [[RBAC (role-based access control)]] policy**: to limit the access to the database
- **Using hashing techniques to validate SQL queries** [[(D'silva, Vanajakshi, et al., 2017)]]
- **Using PDO** [[(Sendiang, Polii, et al., 2016)]]
- Inferring [[SQL signature]] to validate new SQL queries [[(Li, Yan, et al., 2012)]]

## How is front-end software involved in SQLIA

Even if the attack target the web server, front-end software may mitigate the problem (or make it more serious)
- **No client-side validation**: If the front-end accepts arbitrary user input (e.g. search fields, logins, comments) without any validation or sanitization, the attacker can inject malicious SQL.
- **Un-encoded or unfiltered input:** If user data is sent to the back-end without escaping, the injected SQL can be executed by the database
- **Informative error messages:** If the front-end displays detailed database errors (e.g. "Syntax error near 'OR 1=1'"), it provides the attacker with valuable clues to refine the attack.
- Ease the submission of requests to the server

---
## References
- [[(Xu, Ni, Ming, et al., 2024)]]
- [[(Krishnaraj, Madaan, et al., 2023)]]
- [[(Offutt, Wu, Du, 2004)]]
- [[(Tkachenko et al., 2024)]]
- Included in literature review, by [[(Onukrane, Skrodelis, et al., 2023)]]
- One of the first description of the attacks [[(Watson, 2007)]]
- [[(D'silva, Vanajakshi, et al., 2017)]]
- [[(Sendiang, Polii, et al., 2016)]]
- Runtime input validation in Java, by: [[(Cho, Kim, et al., 2016)]]
- [[(Li, Yan, et al., 2012)]]