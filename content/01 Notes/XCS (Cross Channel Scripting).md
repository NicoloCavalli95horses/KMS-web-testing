---
ID: 2025-04-02-15:11
tags:
  - "#definition"
  - XSS
  - XCS
---
## Definition

XCS (Cross Channel Scripting) is a variant of [[XSS (cross site scripting)]] that aim at injecting code into a web application from a different port or protocol
- in a first step, an attacker use FTP or SNMP to store malicious JS code
- then the malicious code is sent to a web application
- as soon as an user access the web application, the malicious script is executed

XCS is more likely to affect:
- embedded devices, because these devices often provide a number of services (e.g. web, SNMP, NFS, P2P) which are difficult to secure
- very large web applications (e.g., Facebook, Twitter), who provide web cloud APIs for third party applications

While [[SOP (Same-Origin Policy)]] blocks cross-origin requests in JavaScript (e.g., reading cookies from another domain it is not possible, by design), information stored in [[cookie]] is shared among different [[port]] on the same origin/domain. 

All of the following addresses have the same origin but a different protocol and/or a different port:
- `https://example.com` (port 443 by default)
- `http://example.com` (port 80 by default)
- `http://example.com:5000` (custom port 5000)
- `ftp://example.com` (port 21 by default)
- `ftp://example.com:2021` (custom port 2021)
- `smtp://example.com` (port 587 by default)

### Why is challenging to prevent XCS?

- web applications and a third-party service, such as an FTP server, can be completely secure in isolation and became vulnerable only when used in conjunction
- these attacks are not very common and may require a wide technical expertise
- non-web channels usually do not sanitize user input having in mind the web environment, because developers that deal with embedded software may not have expertise in web development

### What can you do with XCS?

**Read cookie in FTP from HTTP**: the [[SameSite cookie]] does not actually defend against XCS because the cookie is always accessible from the other protocols

**Send an email from HTTP to SMTP** (only in legacy devices)

```html
<textarea name="foo">
HELO example.com
MAIL FROM:<somebody@example.com>
RCPT TO:<recipient@example.org>
DATA
Subject: Hi there!
From: somebody@example.com
To: recipient@example.org
Hello world!
.
QUIT
</textarea>
```

### Attacks examples

From [[(Bojinov, Bursztein, et al., 2009)]]:

**XCS from SMB protocol**
[[NAS (Network Attached Storage)]] devices may fail to properly sanitize user input. An attacker could upload[^2] an arbitrary file via SMB[^1], whose name contains a malicious script. If the NAS device send an HTTP response to the web interface containing a list of all the file names, it may cause a stored cross-protocol XSS, because the file name may be interpreted as an executable script by the browser. If this happened on the admin page, the attacker would have full control of the admin session

**XCS from P2P (peer-to-peer) protocol**
A P2P (peer-to-peer) service allows users to add torrents[^3] by supplying `.torrent` files. The filenames can act as malicious scripts that are executed by the victim's browser when the web interface displays the list of files. This vulnerability was found on Buffalo NAS

**RXCS (Restful API-based XCS) in large scale web app**
Third-party application that consume APIs from Facebook, Twitter or Instagram, may be vulnerable to XCS. If an application displays statistics about Facebook users’ favorite movies, it is sufficient to add a malicious payload in a movie profile data to make the third-party application execute a malicious JS

==Interactions with cloud services rely on many assumptions that are not properly formalized

### Reverse XCS

A web vulnerability may be exploited to attack a non-web channel [[(Bojinov, Bursztein, et al., 2009)]]. This can be done to reboot a switch and therefore shutdown an entire LAN, causing a [[DoS (Denial of Service)]].

In another reverse XCS scenario, a web interface can be used to insert malicious torrents to a NAS, which eventually will share this malicious content with every other user. This would cause:
- DoS attack (consuming NAS resources)
- illegally distribute illegitimate content to unaware users
- NAS content may also be exfiltrated through the P2P network

As an extension, reverse XCS can be exploited to perform advanced [[CSRF (cross-site request forgery)]] that will bypass CSRF common defenses that rely on [[SOP (Same-Origin Policy)]] or [[CSRF (cross-site request forgery) token]]

## Risks

- extracting sensitive data (e.g., NAS protected files, or user credentials)
- redirecting the user to a [[drive-by download]] website, or a [[phishing]]
- exploit the user IP address for a [[DDoS (Distributed Denial of Service)]]
- [[RCE (Remote Code Execution)]]
- privilege escalation

## Mitigation

- sanitize user input properly in every possible situation
- use [[static analysis]] to perform flow analysis to detect XCS opportunities, by tainting input channels into the web application and raising an alarm if tainted data is displayed in a web page without first being sanitized

---
#### References
- Cited as an example of session fixation where a [[cookie]] is set illegitimately, by [[(Johns, Braun, et al., 2011)]]
- https://www.startupdefense.io/cyberattacks/cross-protocol-attack
- https://img2.helpnetsecurity.com/dl/articles/hfpa.pdf
- XCS in embedded web application, by [[(Bojinov, Bursztein, et al., 2009)]]

[^1]: SMB is protocol used to share files, printers or other resources in a LAN

[^2]: Often an upload logic allows a limited filename length and rejects special characters such as `/`. But an encoded `<iframe>` that load external JS can still be used (!)

[^3]: A BitTorrent file is basically a list of files to download that indicate the peers to share with
