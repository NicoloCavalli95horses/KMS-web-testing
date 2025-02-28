---
ID: 2025-02-25-09:39
tags:
  - "#definition"
  - clientSideAttacks
  - accessControl
---
## Definition

In a forced browsing attack (also called forceful browsing), an attacker visits URLs containing sensitive information by ==simply guessing the URL or following a commonly known URL pattern==
- This attack is made possible by the insecure design of a web application or API

### Common causes
- **Security through obscurity** – assuming that if you make an identifier complex enough (in this case, a URL), attackers won’t be able to guess it.
- **Common directory names** – using common and easily guessed directory names for typical resources, such as /admin/, /config/, or /backup/.
- **Lack of authentication** – failing to implement, enable, or properly test authentication for all access to URLs or directories that contain sensitive data.
- **Lack of [[access control]]** – using only authentication without also enforcing proper authorization to control access to resources belonging to other users.

### Examples

From this URL

```txt
https://www.example.com/userdata.php?id=2258
```

An attacker could guess that 2259 could lead to another personal user page 

---
#### References
- https://www.invicti.com/learn/forced-browsing/