
| ID       | 2024-12-09-13:28                         |
| -------- | ---------------------------------------- |
| **Tags** | #paper #cyberSecurity #SQL #dataSecurity |
## Abstract
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

**SQLIA detection methods**

Based on data analysis, most techniques focus on:
- monitoring and analyzing real-time network data: when an injection occurs, anomalies in the traffic flowing into the web application will be found (e.g., large input, an intense traffic in a short period of time, drastic changes in HTTP requests)
- monitoring the flow of tainted data
 
**Types of SQL attacks**

## References
[[ref_overview_sql_injection_detection]]