---
ID: 2025-04-03T07:17:25.148Z
tags:
  - paper
  - browserAttacks
  - firefox
---
## Context

The extension based attacks are most critical as they exploit browser and OS resources. These third-party extensions (plugins) are used to enhance the core functionality of the browser, hence enjoy high privileges. With an extension based attack:
- an attacker can launch a malicious process to compromise an entire OS system
- a browser plugin have access to browser components such as [[cookie]]s, password manager, browsing history, information present in a web page
- a malicious extension can run a JS script that will spawn a BASH shell on the victim's desktop, allowing [[RCE (Remote Code Execution)]]
- browser extensions provide APIs that allows an extension to make a cross-domain requests, and this violates SOP and lead to [[XSS (cross site scripting)]]

**Remote Code Execution**

```html
<script >
const lFile = Components.classes["@mozilla.org/file/local; 1"].createInstance(Components.interfaces.nsILocalFile);

const lPath = "\boot\malware.sh";

lFile.initWithPath(lPath);

const process = Components.classes["@mozilla.org/process/util; 1"].createInstance(Components.interfaces.nsIProcess);

process.init(lFile);

process.run(false, ["\boot\malware. sh"], 1);

</script>
```

**Read password files**

```js
const file = Components.classes["@mozilla.org/file/directory service; 1"].getService(Components.interfaces.nsIProperties).get("ProfD", Components.interfaces.nsIFile);

file.initWithPath("\\\ etc \passwd");

const inputStream = Components.classes["@mozilla.org/network/file−output−stream; 1"].createInstance( Components.interfaces.nsIFileInputStream);

inputStream.init(file 1, −1, 0666, 0);

inputStream.read(result);
```

A browser is indeed an attractive attack surface and can be exploited
- by poor programming practices (benign but buggy extensions may be exploited)
- by malicious APIs
- by malicious JavaScript libraries

The high privileges of a browser extension may allow to bypass even the [[SOP (Same-Origin Policy)]]
- extension developers have been forced to implement their security policies

In this paper, we propose sandFOX policies, an [[SELinux (Security-Enhanced Linux)]] based sandboxing environment that isolates browser from the OS resources to ensure the protection from extension based browser attacks
- this solution allows the extensions to achieve the desired functionality in a *restrictive sandboxed environment*

SandFOX capabilities:
- apply restriction in accessing the file system by the browser and extensions
- protect processes running on host OS
- restrict network access by the browser and extensions

## Approach

The authors have ==rewritten and modified SELinux configuration files to limit the behavior of Firefox and its extensions==
 
**SandFOX architecture**

![[sandbox_browser_sandfox.png]]

- We configure the OS using SELinux policies so that the browser can achieve its functionalities in restrictive environment
- We rewrites the SELinux policies to create a virtual cage (sandFOX) in which we can lock up Firefox browser.
- The browser running in sandFOX environment is able to achieve required functionalities but in an isolated environment

## Evaluation

We evaluate our sandFOX and security policies using malicious and critical resource eating extensions. SandFOX successfully defends against:
- file system attacks (an extension is not able to read sensitive file, such as `/etc/passwd`)
- process attacks (an extension is not able to launch an arbitrary process)
- network attacks (an extension cannot execute cross-domain requests)
- memory attacks (reduced significantly the opportunities for [[buffer overflow]] or [[RCE (Remote Code Execution)]])

Using sandFOX leads to a minimal performance overhead (max 1 second slower)
## Limits

- The author considered only Firefox browser
- The sandbox environment proposed work on Linux OS, with SELinux
- The sandFOX policy does not protect against [[XSS (cross site scripting)]], [[clickjacking]], [[phishing]], [[CSRF (cross-site request forgery)]]

---
#### References
- [[(Saini, Gaur, et al., 2015)]]
