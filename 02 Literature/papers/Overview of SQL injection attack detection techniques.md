
| ID       | 2024-12-09-13:28                         |
| -------- | ---------------------------------------- |
| **Tags** | #paper #cyberSecurity #SQL #dataSecurity |
## Main concepts
[[SQLIA (SQL injection attack)]] is a serious threat to data security

Web applications are the most vulnerable to SQLIA attacks and other security threats of other applications. SQLIA threats is in the ==top three== web application security risks.

The advancement of the automated injection technology leads to frequent SQLIA incidents
SQLIA detection techniques have improved with the development of big data, AI and cloud computing technologies, but no clear review or classification has been proposed yet.

- Many review papers on SQLIA detection lack organization or differentiation by role or method.
- The reviews often present lists of tools or techniques without a clear framework or point of view
- This lack of structure makes it hard to visualize the current state and progress in SQLIA detection research

**SQL injection attack**
- if an input is not effectively verified and sanitized by the server, malicious statements can be executed
- the attacker can gain unauthorized access to the underlying database and perform [[CRUD (Create, Read, Update, Delete) operations]]

**Types of SQL attacks**

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

### **SQLIA detection methods**

Techniques based on data analysis:
- *monitoring and analyzing real-time network data*: when an injection occurs, anomalies in the traffic flowing into the web application would be found (e.g., large input, an intense traffic in a short period of time, drastic changes in HTTP requests)
- *monitoring the flow of tainted/corrupted data*: the legitimacy of data propagation in programs is checked. CRUD operations may be protected by a token system or tracked in other ways to prevent unauthorized actions.

Techniques based on machine learning algorithms:
- the validity of the SQL statement is determined by a ML algorithm that classify the code as trustful or malicious

![[summary_SQLIA_detections.png]]


## References
[[ref_overview_sql_injection_detection]]