---
ID: 2025-03-19-13:45
tags:
  - "#definition"
  - RCE
---
## Definition

An RCE attack allows an attacker to ==execute arbitrary commands or code on the vulnerable server ==by exploiting a flaw in the application code that does not properly sanitize user input.

```php
<?php
$cmd = $_GET['cmd'];  // ⚠️ not sanitized
system($cmd);  // command executed on the server
?>
```

---
#### References
- [[(Felsch, Heiderich, et al., 2015)]]
- https://www.checkpoint.com/cyber-hub/cyber-security/what-is-remote-code-execution-rce/
- prototype pollution gadgets can lead to RCE, by [[(Liu, An, et al., 2024)]]