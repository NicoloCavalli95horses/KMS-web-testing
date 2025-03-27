---
ID: 2025-03-27-09:27
tags:
  - "#definition"
  - PDO
---
## Definition

PHP Data Objects (PDO) functions can mitigate [[SQLIA (SQL injection attack)]] attacks primarily through the use of prepared statements and bound parameters
- In PDO, user data is not directly concatenated into the SQL query, but ==is inserted as bound parameters.==
- This prevents malicious inputs from modifying the query structure

### Example

Without PDO

```PHP
$username = $_GET['username'];
$password = $_GET['password'];
$sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
 // ❌ withe $username "' OR '1'='1", vulnerable to SQLIA
```

With PDO

```PHP
$sql = "SELECT * FROM users WHERE username = :username AND password = :password";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':username', $username, PDO::PARAM_STR);
$stmt->bindParam(':password', $password, PDO::PARAM_STR);
$stmt->execute();
```



---
#### References
- [[(Sendiang, Polii, et al., 2016)]]