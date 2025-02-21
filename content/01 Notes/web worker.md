---
ID: 2025-02-06-10:35
tags:
  - "#definition"
  - parallelComputing
  - network
  - JavaScript
---
## Definition

Web Workers are used to perform ==heavy operations in the background without blocking the user interface==. They are useful for complex calculations or to handle asynchronous operations that would otherwise make the application non-responsive.

Similarly to [[service worker]], they work in an independent thread, but they stop working when the browser is closed (they are not persistent). See a comparison of the two technologies here: [[web worker and service worker comparison]]

###  Main characteristics of Web Workers

- They run in a thread separate from the main thread
- They have not access to the DOM
- They can work offline only if the worker script has already been downloaded, but they stop being executed as soon as the browser is closed (they are ==ephemeral==: they only live as long as they are in use)
- They can communicate with the main thread via `window.postMessage`
- They are used for intensive computations (e.g. data processing, image manipulation)
- They must be started manually with `new Worker("worker.js")`

```javascript
self.onmessage = function(event) {
  let result = event.data * 9999999999; 
  self.postMessage(result);
};
```

``` javascript
const worker = new Worker("worker.js");

worker.postMessage(10); // send a message to web worker
worker.onmessage = function(event) {
console.log("Output:", event.data);
};
```

See also [[Parallel programming]]

---
#### References
- https://www.youtube.com/watch?v=JMKLXGwltGc

