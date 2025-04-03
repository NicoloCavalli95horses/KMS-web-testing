---
ID: 2025-04-03-10:32
tags:
  - "#definition"
  - linux
  - browser
---
## Definition

SELinux (Security-Enhanced Linux) is a Linux kernel module that implements mandatory access control (MAC), which is based on pre-established rules that cannot be changed by users or processes unless explicitly authorized.

A SELinux policy file can be written in a SELinux policy module with the .te (Type Enforcement) extension.
- This module specifies the security types assigned to processes and files and the access rules between them.

A SELinux file could be, for example:

```txt
policy_module(firefox_restrict, 1.0)

type firefox_t;
type firefox_exec_t;
type user_downloads_t;

# Dichiarazione dei domini
init_daemon_domain(firefox_t)

# Associa il processo Firefox al suo tipo
type_transition unconfined_t firefox_exec_t : process firefox_t;

# Permetti a Firefox di accedere solo alla cartella Downloads
allow firefox_t user_downloads_t:dir { read write execute };

# Blocca l'accesso ai file di configurazione di sistema
dontaudit firefox_t etc_t:file { read write execute };
dontaudit firefox_t passwd_t:file { read write };
```

This script block Firefox to access sensitive files

After writing the script, it is necessary to compile it (will generate a file `.pp`), and to install it, in order to actually use it

Compilation:

```bash
checkmodule -M -m -o firefox_restrict.mod firefox.te
semodule_package -o firefox_restrict.pp -m firefox_restrict.mod
```

Installation:

```bash
semodule -i firefox_restrict.pp
```

---
#### References
- [[(Saini, Gaur, et al., 2015)]] proposed modification to create a functional and secure sandbox environment for Browsers like Firefox
