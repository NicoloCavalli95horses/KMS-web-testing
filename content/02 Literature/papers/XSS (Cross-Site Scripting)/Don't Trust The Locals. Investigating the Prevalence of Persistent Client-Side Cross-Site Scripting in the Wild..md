---
ID: 2025-07-28T13:46:53.455Z
tags:
  - paper
  - XSS
  - clientSideAttacks
Rank: A*
---
## Context

This paper discusses persistent client-side [[XSS (cross site scripting)]], assessing its prevalence and evaluating its consequences in large web applications. [[DTA (dynamic taint analysis)]] is used to identify suspicious flows from client storage ([[Web Storage API (localStorage, sessionStorage)]], [[cookie]]) to dangerous [[sink function]]

Two attacker models are presented
- network attacker capable of temporarily hijacking HTTP communication
- web attacker who can leverage flows into storage to persist their payload

The notion of three types of XSS has been upheld for years (reflected, stored, DOM-based), and other types of XSS have been treated as niche problems ([[mXSS (mutation-based XSS)]]). Persistent client-side XSS, which leverage client-storage APIs, has never been acknowledged as important. 

Overall, XSS occurs if some attacker-controlled data flows into a dangerous sink. On the client, sinks are:
- rendering of HTML (`document.write`, `innerHTML`,`append`)
- execution of JavaScript (`setTimeout`, `eval`)
- inclusion of additional scripts (`script.src`)

In regular XSS, when the victim close the browser every threat is immediately eliminated. However, with persistent client-side XSS, the attacker's code is revived on every load of the flawed website, ==even without the original payload== (e.g., clicking on a dangerous URL)

`eval()` is in practice used often even to parse JSON data, even if it is a bad practice

## Attacker models

**Network attacker**
A network-level adversary capable of injecting arbitrary packets into any unencrypted connection between client and server. This attacker can manipulate HTTP responses and inject content into client storage, modifying cookies or local storage. The code injected might lie dormant and might be used later in time to attack the victim. The attack can be carried out with HTTP if HSTS rules are not enforced correctly (this allows an HTTP version to set cookies for the HTTPS version, or to set cookies for parents domains)

Example
-  a victim connect to the WiFi of a coffee shop, which is controlled by an attacker
- the victim visit a vulnerable website containing a flow from persistent storage to a sink
- the attacker sends to the victim the regular HTTP packets plus some code which is injected in the client storage 
- the code injected is triggered every time the user visits the vulnerable website, even if the Wi-Fi connection changes
- the code injected may perform JS-based [[keylogging]] and steal user credentials

**Web attacker**
A web attacker hosts his own malicious website and lures the victim into visiting it. The malicious website forces the victim's browser to load any resource from arbitrary origins, controlling HTTP parameters

## Methodology

We searched for exploitable flows from cookies or web storage to dangerous sink.
- a modified version of Chromium is used to taint the usage of sensitive functions. Invocation with tainted data is reported
- flows that end in a persistent storage are reported
- malicious payloads are generated
- persistent client XSS opportunities are found
- to check if a candidate website is vulnerable, we checked if the website is served over HTTP or over HTTPS with no HSTS (allowing us to switch to HTTP)

## Results

- 8% of Alexa top 5000 websites have unfiltered data flows from persistent storage to dangerous [[sink function]]
- all flows that originate from a local storage source have no encoding applied to them
- [[WAF (web application firewall)]] can detect maliciously-crafted cookies and protect from persistent client XSS

## Limits

- The exploration of the webpages is shallow (e.g., without login)

---
#### References
- [[(Steffens, Rossow, et al., 2019)]]
