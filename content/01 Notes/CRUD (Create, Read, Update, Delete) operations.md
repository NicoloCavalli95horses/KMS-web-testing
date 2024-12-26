---
ID: 2024-12-26-12:15
tags:
  - "#definition"
---
## Definition

CRUD refers to the four operations we use to implement persistent storage applications like relational databases. Examples of [[relational databases]] include Oracle, Microsoft SQL Server, and MySQL.

Operations such as security control, transaction control, access, and permission, and performance optimization are all based on CRUD

| Operation | Function       |
| --------- | -------------- |
| Create    | create, insert |
| Read      | select         |
| Update    | edit           |
| Delete    | delete         |
### An example in PHP

Connection to MySQL database
```php
<?php
$dsn = 'mysql:host=localhost;dbname=testdb;charset=utf8';
$username = 'root';
$password = '';

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
?>
```

**Creation of the table User**

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);
```

**Create operation (insert new record)**

```php
<?php
function createUser($pdo, $name, $email) {
    $sql = "INSERT INTO users (name, email) VALUES (:name, :email)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':name' => $name,
        ':email' => $email
    ]);
    echo "User created successfully!";
}

// example
createUser($pdo, 'Mario Rossi', 'mario.rossi@example.com');
?>
```

**Read operation**

```php
<?php
function getUsers($pdo) {
    $sql = "SELECT * FROM users";
    $stmt = $pdo->query($sql);
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    foreach ($users as $user) {
        echo "ID: {$user['id']} - Name: {$user['name']} - Email: {$user['email']}<br>";
    }
}

// example
getUsers($pdo);
?>
```

**Update operation**

```php
<?php
function updateUser($pdo, $id, $name, $email) {
    $sql = "UPDATE users SET name = :name, email = :email WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':id' => $id,
        ':name' => $name,
        ':email' => $email
    ]);
    echo "User updated successfully!";
}

// example
updateUser($pdo, 1, 'Giuseppe Verdi', 'giuseppe.verdi@example.com');
?>
```

**Delete operation**

```php
<?php
function deleteUser($pdo, $id) {
    $sql = "DELETE FROM users WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':id' => $id]);
    echo "User deleted successfully!";
}

// example
deleteUser($pdo, 1);
?>

```

## References
https://www.educative.io/blog/crud-operations