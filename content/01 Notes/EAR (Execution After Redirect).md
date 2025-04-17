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

**There is no reason to have code executed after a redirect**. Clean-up action (closing file, finalizing other tasks), restore a previous state or starting a long-running process (e.g., encoding a video file) can be set previously or executed asynchronously 


> [!WARNING] No warning of EARs in official documentation
> Sometimes this problem is underestimated and documentation of popular web frameworks does not reference this issue or the default behavior of the framework [[(Doupe, Boe, et al., 2011)]]

## Risks associated with EAR

- permanent change of the application's state **(silent EAR)**
- leak sensitive information **(explicit EAR)**
- access-control violation (privilege escalation)

## Examples

**PHP**

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

**Ruby on Rails**
Whatever parameter passed as ID will update an attribute of `@topic` even if the user is not logged as admin, because the code after the `end` will be executed

```ruby
class TopicsController < ApplicationController
  def update
    @topic = Topic.find(params[:id])
    if not current_user.is_admin?
      redirect_to ("/")
    end
    @topic.update_attributes (params[:topic])
    flash[:notice] = "Topic updated!"
  end
end
```

In a real example, this happen:
- a HTTP response is sent by the server, implying that the user is not logged in and redirecting to the login page
- the body of the response still contain the resource the user was trying to access, because the logic of the redirect is not well implemented

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
- [[(Payet, Doupe, et al., 2013)]]
- [[(Doupe, Boe, et al., 2011)]]
- As example of logic flaw, pag.6, in [[(Deepa, Thilagam, et al., 2018)]]