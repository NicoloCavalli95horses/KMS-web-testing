---
ID: 2025-02-25-10:26
tags:
  - "#definition"
  - clientSideAttacks
  - accessControl
---
## Definition

Directory traversal (path traversal) is a web vulnerability that lets a malicious hacker access and view files located in the web server file system but outside of the web application’s document root folder

### Use cases

Directory traversal vulnerabilities happen ==when a malicious user can include an arbitrary file path in user input, and use special characters to access files from a different directory on the server==
- Special characters used for this are dot-dot-slash combinations: ../ for Linux/UNIX or ..\ for Windows
- These combinations allow access to parent directories from a relative path

While directory traversal is a typical web application vulnerability, it is ==most often found in embedded web software==, for example, device management software or remote administration interfaces. Some path traversal vulnerabilities are even attributed to web servers themselves.

### Example

```txt
http://example.com/my_app/display.php?file=../../../etc/passwd
```

---
#### References
- https://www.invicti.com/learn/directory-traversal-path-traversal/