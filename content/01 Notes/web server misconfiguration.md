---
ID: 2025-02-17-12:04
tags:
  - "#definition"
  - OWASP
  - cyberSecurity
  - webApplication
---
## Definition

Attackers will often attempt to exploit unpatched flaws or access default accounts, unused pages, unprotected files and directories, etc to gain unauthorized access or knowledge of the system.

Security misconfiguration can happen at any level of an application stack, including:
- Network services,
- platform,
- web server,
- application server,
- database,
- frameworks,
- custom code
- pre-installed virtual machines
- containers
- storage

Automated scanners are useful for detecting misconfigurations, use of default accounts or configurations, unnecessary services, legacy options, etc.

### PHP misconfiguration

From [[(Eshete, Villafiorita, et al., 2013)]]:
- in PHP environment, configuration files are stored in a `httpd.conf` file (for Apache HTTP server), and in a `php.ini` file, which is parsed by the PHP interpreter.
- the `php.ini` file includes directory configuration and often MySQL configuration
- practice shows that most applications override global configuration settings. For example, the `htaccess` file can override directory configuration settings, and ==script specific configuration settings may be redefined at runtime,== using the `ini_set()` function
- configuration override may leave the application vulnerable to attacks

---
#### References
- https://owasp.org/www-project-top-ten/2017/A6_2017-Security_Misconfiguration.html
- [[(Eshete, Villafiorita, et al., 2013)]]