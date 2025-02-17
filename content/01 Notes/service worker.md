---
ID: 2025-02-17-14:10
tags:
  - "#definition"
  - parallelComputing
  - serviceWorker
  - JavaScript
---
## Definition

Service Workers allow ==to run scripts in background threads==: this means that the worker thread can perform tasks without **interfering with the user interface.**
- In addition, they can make network requests (using `fetch()` or `XMLHttpRequest` APIs)
- Once created, a SW can send messages to the JavaScript code that created it by posting messages to an event handler specified by that code (and vice versa).

They are similar to [[web worker]], but explicitly ==designed to handle network requests and caching mechanisms, even in an offline environment.== See: [[web worker and service worker comparison]] 

> [!WARNING]
> You can run whatever code you like inside the worker thread, with some exceptions:
> - you can't directly manipulate the DOM from inside a worker, or use some default methods and properties of the window object
> - you can use a large number of items available under window, including `WebSockets`, and data storage mechanisms like [[IndexedDB]]

### Service Worker usage

- The SW uses a cache to store the recently used or static data to support fast loading and offline access
- since the SW is executed in its own thread independently, it can ==execute code in the background even when the browser is close,== such as receiving the push notification from the remote server and background synchronizing to support a continuous browsing experience

With these features, the SW can provide prolific services regardless of the browser's network condition.

> [!error] Only HTTPS
> Service workers are only allowed to be used in application that are built in an HTTPS environment

### Risks and vulnerabilities

**Push notification exploitation**
Push notification, managed by web workers can make users click on malicious link or track user's location:
- If an ==HTTP site== uses a ==third-party push notification service== the notifications received by the end user can be manipulated by an attacker

**Exploiting the SW by Utilizing its Features**
- The DOM can be manipulated to affect the behavior of a web worker, ==injecting malicious code into a benign web worker==
- [[IndexedDB]] and Cache API can be used as attack vectors to exploit the SW since they are used in both the SW and the DOM
- a [[XSS (cross site scripting)]] attack can inject malicious code into a SW, if URL parameters are used to manage a SW
- a SW can be installed on the computer of a victim, exploiting a [[phishing attack]]. Since the SW works in the background using the computer resources, it is possible to ==conduct crypto-currency mining==, generating darkweb, and conducting [[DDoS (Distributed Denial of Service)]] attacks

**Browser history sniffing**
Browser history sniffing attacks: a web worker can be exploited to determine whether the users have accessed target sites or not
- As the SW is installed after the users' first visit to the site, is it possible to use the SW as a criterion to determine whether the users' have visited the site before

---
#### References
- [Web workers](https://www.youtube.com/watch?v=JMKLXGwltGc) 
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
- [[(Jeong, Hur, 2022)]]
- see also [[Parallel programming]]
