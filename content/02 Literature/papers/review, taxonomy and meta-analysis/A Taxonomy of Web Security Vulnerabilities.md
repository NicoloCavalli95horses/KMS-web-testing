---
ID: 2025-02-13-10:49
tags:
  - paper
  - webApplication
  - taxonomy
---
## Context

There are many types of web vulnerabilities including:
- [[XSS (cross site scripting)]]
- broken authentication and session management
- injections flaws due to misconfiguration at the input side of web applications
- improper error handling
- sensitive data exposure 
- broken [[access control]]
- insufficient logging and monitoring
- employing software with known vulnerabilities

Researchers have built various tools to identify and mitigate web application vulnerabilities:
- [[static analysis]] tools performed in a non-running environment
	- manual code reviewing that requires physical access to the application’s source code
- [[dynamic analysis]] tools activated while running the web application
	- various malicious input patterns are submitted into the tested web application and the output is analyzed; if errors are detected, then one or more vulnerabilities are asserted
	- Dynamic analysis consumes a lot of time testing the application since the critical weak point is not readily located.

Dynamic analysis is divided into a "Black" box if the source code of the web application is unknown, and a "White" box if the source code is available.
- hybrid mix of tools (both static and dynamic

The taxonomy in this paper starts out by ==classifying vulnerability detection ==tools, moving into ==classifying and defining vulnerabilities and their prevalence==, their ultimate ==impacts on the business entity==, and their detection tools at different web application architectural levels.

**Authentication vulnerability**
Broken authentication and session management: the attacker get access to protected resources, or to valid and active session of an user, bypassing the auth process
- Misconfiguration in [[access control ]]policies, inadequate user credential validation, coding mistakes, and uncontrolled web page redirections

**Injection flaws**
[[SQLIA (SQL injection attack)]] occurs when the attacker inserts SQL characters into SQL statements constructed using external input, resulting in changing the meaning of the intended SQL query. Thus, the attacker can indirectly get access to the database to obtain, modify and/or delete data.

**XML External Entities**
Most XML parsers are vulnerable to attacks. Depends on the type of XML attacks and can result in a denial-of-service attack or sensitive information leakage.

**Weak input validation**
Accepting input from the user without validation enables the attacker to inject a malicious code ([[XSS (cross site scripting)]])

**Insecure deserialization**
This is the opposite process of serialization, which means extracting the data structure or object from a series of bytes. Many programming languages support serializations such as Java, Python, Ruby, and PHP.
The risk of using serialization is that attackers can send malicious data to be deserialized, resulting in executing arbitrary code or manipulating data.

**Using components with known vulnerability**
This vulnerability occurs due to:
- Using well known vulnerable components
- Using outdated unsupported vulnerable software
- Not scanning the system regularly
- Not upgrading or fixing the vulnerable components
- Not testing the compatibility of updates, upgraded or patched libraries

**Insufficient logging and monitoring**
For best security practices, the organization usually monitors network traffic and logs system events, but misconfiguration could happen at different tiers of system logging and monitoring

---
#### References
- [[(Al-Kahla, Shatnawi, Taqieddin, 2021)]]