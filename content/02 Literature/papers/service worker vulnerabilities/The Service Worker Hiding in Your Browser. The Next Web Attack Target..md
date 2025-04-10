---
ID: 2025-04-10T07:33:35.647Z
tags:
  - paper
  - projectSLR
  - IndexedDB
  - serviceWorker
  - pushNotification
Project:
  - SLR
---
## Context

The [[SW (Service Worker)]] is a type of web worker, a script that runs in a background thread of a browser. It is executed in a new web environment, known as the *service worker context*, which co-exists with (and is isolated from) the original web environment referred to as the *document context.*
- a service worker can enable app-like features such as offline mode or instant push notifications.

**Contributions**
- flaws in two channels, IndexedDB and push notification, were presented
- attack scenario demonstration with real-world examples
- an existing taint tracking tool was extended to measure the prevalence of these issue. 1.75 million users are estimated to be involved

## Approach

The context that the authors consider for these new attacks is the following:
- the service worker and all the files imported in the service worker are benign
- HTTPS protocol is used for all the request
- the presence of an [[XSS (cross site scripting)]] is assumed

**Communicate between document and Service Worker**
- `postMessage`: allows a communication between the two contexts, but it is not the best way to create a link. SW are event-based (especially `fetch` event), but postMessage relies only on `message` event. Plus, this API needs the document context to be active. See also [[C2C (client-to-client) communication]]
- **cache**: cache API is shared by both the document and SW contexts to provide offline usage. It may be used as a valid channel for malicious purposes but most of the time it is unidirectional, meaning that it is the SW who writes to the cache and the applied changes affect the document context, not viceversa
- [[IndexedDB]]: unlike [[Web Storage API (localStorage, sessionStorage)]], it can be used inside the SW context. If the website is compromised by an XSS, there is no defense mechanisms for service workers, therefore it can be used as a door to compromise a SW. IndexedDB does not need a dedicated event handler like for postMessage, therefore there are more scenarios that can be exploited
- **Push notification**: notification handled by the browser to mimic native app behavior. Three steps are required:
	- (i) the user must give the permission
	- (ii) the website must subscribe a user to a push subscription server
	- (iii) the push subscription server has to accept the subscription request
  A website that uses push notification and that is vulnerable to XSS may allow an attacker to hijack the subscription using their own secret key from the same third-party push provider. In this way, the attacker can leverage a benign service worker and exploit the provider features such as geolocation


## Evaluation



## Results

- some websites blindly trusting the data from the [[IndexedDB]] and use it inside critical functions in the SW context. ==Information from the document context can flow into the SW context thanks to the IndexedDB==
- legitimate push services providing location-based notifications, which can similarly be ==utilized by attackers to track a user’s location==

## Limits




---
#### References
- [[(Chinprutthiwong, Vardhan, et al., 2021)]]
