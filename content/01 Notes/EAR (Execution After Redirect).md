---
ID: 2025-03-20-11:38
tags:
  - "#definition"
  - redirectAttack
  - EAR
---
## Definition

An Execution After Redirect is defined as any unintended (from the perspective of the developer/victim) server-side code that is executed *after* a redirect call.
- an EAR is an ==unintentional control flow vulnerability==
- it is ==due to a developer misunderstanding of the redirection mechanism== and not due to an attack
- a EAR is simply a bug if it does not lead to a security issue, otherwise can be considered as a full-fledged vulnerability that can be exploited to get sensitive information

## Risks associated with EAR

- permanent change of the application's state (*silent EAR*)
- leak sensitive information (*explicit EAR*)

### Example in PHP

```PHP
<?php 

  if (!$user->is_premium_member())
  {
    header("Location: /signup.php");
  }
  echo "Premium content that requires a subscription here...";
?>
```

Since the `header()` function does not halt the execution flow, the `echo` function is executed by mistake

In a real example, this happen:
- a HTTP response is sent by the server, implying that the user is not logged in and redirecting to the login page
- the body of the response still contain the resource the user was trying to access

```txt
HTTP/1.1 302 Found
Server: Apache/2.2.3 (CentOS)
X-Powered-By: PHP/5.1.6
Set-Cookie: PHPSESSID=oj5intb9382pmevfm92pbm7bj7; path=/ Location: /login.php?auth=false
Content-Type: text/html; charset=ISO-8859-1

<html><head><title>FootPlus: Player Statistics</title></head> <body> <div id="main_container"> <b>Player Name: </b>Christopher Vigna<br/> <b>Position: </b>TE<br/> <b>Avg Yds: </b>XYZ<br/> <b>Avg Points: </b>X<br/> ... More Content ... </div> </body> </html>
```

---
#### References
-  [[(Payet, Doupe, et al., 2013)]]
