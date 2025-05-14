---
ID: 2025-02-17-14:10
tags:
  - "#definition"
  - parallelComputing
  - serviceWorker
  - JavaScript
---
 ## Definition

Service Workers allow ==to run scripts in background threads==: this means that the worker thread can perform tasks without **interfering with the user interface.** A SW can:
- make network requests (using `fetch()` or `XMLHttpRequest` APIs) and control network request made by the application
- enable offline usage by intercepting network requests and serving cached content
- receive push messages to display push notifications
- send messages to the JavaScript code that created it by posting messages to an event handler specified by that code (and viceversa).

They are similar to [[WW (Web Worker)]], but explicitly designed to handle network requests and caching mechanisms, even in an offline environment. See: [[WW (Web Worker) and SW (Service Worker) comparison]] 

An application that makes use of SW is called appified web [[(Chinprutthiwong, Vardhan, et al., 2021)]]. Appified web may also includes manifest files which provide the configuration (JSON file that includes attributes and metadata). This enhance security feature. The term [[PWA (progressive web application)]] is also used in this scenarios.

> [!WARNING]
> You can run whatever code you like inside the worker thread, with some exceptions:
> - you can't directly manipulate the DOM from inside a worker, or use some default methods and properties of the window object
> - you can use a large number of items available under window, including `WebSockets`, and data storage mechanisms like [[IndexedDB]]

### Life cycle

- once a website registers a SW, the SW code goes through an installation and activation phase
- before installation completes, the SW can import additional scripts into the worker's context (`importScripts` API). This means that additional code may be imported from any third-party origin
- installed SW can be updated at any time with `update` API, but automatic checks are scheduled every 24 hours by the browser. Also, whenever the user visits a web page that the SW controls an update is made

### Service Worker usage

- The SW uses a cache to store the recently used or static data to support fast loading and offline access
- since the SW is executed in its own thread independently, it can ==execute code in the background even when the browser is close,== such as receiving the push notification from the remote server and background synchronizing to support a continuous browsing experience

With these features, the SW can provide prolific services regardless of the browser's network condition.

> [!error] Only HTTPS
> Service workers are only allowed to be used in application that are built in an HTTPS environment


### Risks and vulnerabilities

**Push notification exploitation**
Push notification, managed by web workers can make users click on malicious link or track user's location ([[phishing]]):
- If an ==HTTP site== uses a ==third-party push notification service== the notifications received by the end user can be manipulated by an attacker

**Exploiting the SW by Utilizing its Features**
- The DOM can be manipulated to affect the behavior of a web worker, ==injecting malicious code into a benign web worker==
- [[IndexedDB]] and Cache API can be used as attack vectors to exploit the SW since they are used in both the SW and the DOM
- IndexedDB can be used to inject malicious code into the SW context, allowing attackers to fully compromise the service worker. An attacker can then track the location of a victim who subscribed to a push notification [[(Chinprutthiwong, Vardhan, et al., 2021)]]
- a [[XSS (cross site scripting)]] attack can inject malicious code into a SW, if URL parameters are used to manage a SW
- a SW can be installed on the computer of a victim, exploiting a [[phishing]]. Since the SW works in the background using the computer resources, it is possible to ==conduct crypto-currency mining==, generating darkweb, and conducting [[DDoS (Distributed Denial of Service)]] attacks

**Browser history sniffing**
Browser history sniffing attacks: a web worker can be exploited to determine whether the users have accessed target sites or not
- As the SW is installed after the users' first visit to the site, is it possible to use the SW as a criterion to determine whether the users' have visited the site before

Other potential vulnerabilities:
- Web-based botnet
- Launching [[DDoS (Distributed Denial of Service)]] attacks
- [[cryptomining]] [[(Chinprutthiwong, Vardhan, et al., 2021)]]
- Persistent [[XSS (cross site scripting)]] injections [[(Chinprutthiwong, Vardhan, et al., 2021)]]
- [[session hijacking]] from different origin [[(Chinprutthiwong, Vardhan, et al., 2021)]]
- distributed password cracking
- creating a relay proxy

### Prevalence

From [[(Chinprutthiwong, Vardhan, et al., 2021)]]:
- A taint analysis on 7,060 popular websites showed that 5 websites can have their service workers compromised through the [[IndexedDB]] (0.07%)
- 200 websites already vulnerable to XSS can have their push subscriptions easily hijacked. Based on the total number of visits to these susceptible websites, we estimate the upper-bounded number of potential victims, whose locations can be exposed to an XSS attacker, to be up to 1.75 million users per month.

### Mitigation

From [[(Chinprutthiwong, Vardhan, et al., 2021)]]
- **web browser default defenses**: a SW can run only for 30 sec per event. Cross-domain files are prevented from being registered as a service worker
- **manifest file**: a JSON configuration file that support SW security in an appified web

---

See also [[Parallel programming]]
#### References
- [[(Jeong, Hur, 2022)]]
- [[(Subramani, Jueckstock, et al., 2021)]]
- [[(Chinprutthiwong, Vardhan, et al., 2021)]]
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
