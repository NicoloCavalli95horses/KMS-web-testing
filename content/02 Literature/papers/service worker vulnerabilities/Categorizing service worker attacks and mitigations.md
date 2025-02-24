---
ID: 2025-02-20-15:33
tags:
  - paper
  - cyberSecurity
  - clientSideAttacks
  - parallelComputing
  - serviceWorker
---
## Context

[[service worker]] are a powerful feature at the core of [[PWA (progressive web application)]], namely web applications that can continue to function when the user’s device is offline and that have access to device sensors and capabilities previously accessible only by native applications.

SW can be abused to achieve different malicious purposes.
This paper analyze and summarize common attacks that leverage on SW and discuss mitigations and monitoring approaches. 

Categories formulated:
- continuous execution attacks
- side-channel attacks
- hijacking attacks
- other attacks

## Approach

For most of the attacks we discuss, we have produced our own proof-of-concept implementations, which we tested on a large number of browser versions from five major browser vendors and have shared them publicly

### Continuous execution

**WebBot**
A SW can be frequently activated, using a combination of the `BackgroundSync` API and `Update` API to keep running the SW in background until the browser is closed, and start again as soon as it is reopened. This can be exploited to:
- participating in a  [[DDoS (Distributed Denial of Service)]] attack
- distributed password cracking
- creating a relay proxy 
- [[cryptomining]]

**PushExe**
If an attacker is successful in registering a SW and obtaining push notification permission from the user, he can leverage the `Push` API to activate the SW code at any moment.
- The push API does not necessarily display a notification to the user, if the `showNotification` API is not used
- The attack is blocked by the browser if no notification is shown


> [!WARNING] Mitigation approaches
> This approaches already exist but need improvement:
> - termination delay limits (differences in implementation by browsers)
> - notification UI changes (differences in implementation by browsers)

### Side-Channels

**OfflineOnload**
- A user first visits the attacker’s website, which registers a SW
- At a later time, if the user again opens the attacker’s website in offline mode, the SW will intercept the request and return a page that includes a number of iframes whose URL points to third-party target sites
- The attacker’s goal is to determine if the user previously visited those sites

**PerformanceTiming**
The `PerformanceResourceTiming` API can be exploited for history-sniffing purposes

> [!WARNING] Mitigation approaches
> This approaches already exist but need improvement:
> - event signaling
> - site isolation

### Hijacking

**XSS**
A legitimate SW can be hijacked by a [[XSS (cross site scripting)]] attack.
The URL path of a SW script can in some cases be manipulated to inject an attacker’s script into the SW code
- browser's extensions can also be used to inject malicious code into a SW

### Other attacks

**Phishing**
A malicious SW could issue a notification that displays the Chrome icon and a message such as “Google Chrome Premium,” and a “DOWNLOAD” button, which when clicked on could lead the user to installing malicious code (see [[drive-by download]] attacks)

**Malvertising**
Push notification can be used to reach users even when a given publisher website is not being visited

### Prevalence of SW exploitation

Among the 1,750 websites we monitored, 518 of them have a SW that received at least one push event during our analysis period (i.e., 3 days).

It is feasible to implement and enforce stricter SW security policy without a significant impact on most legitimate production SW

---
#### References
- [[(Subramani, Jueckstock, et al., 2021)]]