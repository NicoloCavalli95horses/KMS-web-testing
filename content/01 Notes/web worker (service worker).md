---
ID: 2025-02-06-10:35
tags:
  - "#definition"
  - parallelComputing
  - network
  - JavaScript
---
## Definition

Web Workers allow ==to run scripts in background threads==: this means that the worker thread can perform tasks without **interfering with the user interface.**
- In addition, they can make network requests (using `fetch()` or `XMLHttpRequest` APIs)
- Once created, a worker can send messages to the JavaScript code that created it by posting messages to an event handler specified by that code (and vice versa).

> [!WARNING]
> You can run whatever code you like inside the worker thread, with some exceptions:
> - you can't directly manipulate the DOM from inside a worker, or use some default methods and properties of the window object
> - you can use a large number of items available under window, including `WebSockets`, and data storage mechanisms like [[IndexedDB]]

The following script will create a worker w1, that will execute the code in the file `script.js`

```javascript
const w1 = new Worker("script.js");
```

### Web worker usage

- The SW uses a cache to store the recently used or static data to support fast loading and offline access
- since the SW is executed in its own thread independently, it can execute code in the background even when the browser is close, such as receiving the push notification from the remote server and background synchronizing to support a continuous browsing experience

With these features, the SW can provide prolific services regardless of the browser's network condition.

> [!error] Only HTTPS
> Web workers are only allowed to be used in application that are built in an HTTPS environment

### Risks and vulnerabilities

- push notification, managed by web workers can make users click on malicious link or track user's location
- the DOM can be manipulated to affect the behavior of a web worker, injecting malicious code into a benign web worker
- browser history sniffing attacks: a web worker can be exploited to determine whether the users have accessed target sites or not


---
#### References
- [Web workers](https://www.youtube.com/watch?v=JMKLXGwltGc) 
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
- [[ref_vulnerabilities_service_workers]]
- see [[Parallel programming]]
