---
ID: 2025-02-25-10:26
tags:
  - "#definition"
  - clientSideAttacks
  - accessControl
  - directoryTraversal
  - pathTraversal
---
## Definition

Directory traversal (path traversal) is a web vulnerability that lets a malicious hacker access and view files located in the web server file system but outside of the web application’s document root folder.

This is most common when web applications allow upload functionality and the hacker crafts a malicious input value that is processed by the web application and allows access to sensitive directories on the web server [[(Pauli, 2013)]]

### Use cases

Directory traversal vulnerabilities happen ==when a malicious user can include an arbitrary file path in user input, and use special characters to access files from a different directory on the server==
- Special characters used for this are dot-dot-slash combinations: ../ for Linux/UNIX or ..\ for Windows
- These combinations allow access to parent directories from a relative path

While directory traversal is a typical web application vulnerability, it is ==most often found in embedded web software==, for example, device management software or remote administration interfaces. Some path traversal vulnerabilities are even attributed to web servers themselves.

### Example

```txt
http://example.com/my_app/display.php?file=../../../etc/passwd
```

![[path_traversal.png]]

---
#### References
- https://www.invicti.com/learn/directory-traversal-path-traversal/
- Described in [[(Pauli, 2013)]]
- Detected by [[WAF (web application firewall)]], by [[(Maheshwari, Nayak, et al., 2024)]]
- Included in unsystematic literature review: [[(Onukrane, Skrodelis, et al., 2023)]]
- HTTP analysis at bit level to detect directory traversal, by [[(Muraleedharan, Thomas, et al., 2020)]]

Project SLR:
- EARs in the wild can lead to directory traversal [[(Payet, Doupe, et al., 2013)]] 
- Instrumentation of Java web applications to improve input validation to prevent directory traversal, by [[(Cho, Kim, et al., 2016)]]
- Fuzzing testing PHP web applications to prevent directory traversal, by [[(Neef, Kleissner, et al., 2024)]]
