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
- presented flaws in [[IndexedDB]] and push notification API
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
- [[IndexedDB]]: unlike [[Web Storage API (localStorage, sessionStorage)]], it can be used inside the SW context. If the website is compromised by an XSS, there is no defense mechanisms for service workers, therefore it can be used as a door to compromise a SW and extend the harm of the attack. IndexedDB does not need a dedicated event handler like for postMessage, therefore there are more scenarios that can be exploited
- **Push notification**: notification handled by the browser to mimic native app behavior. Three steps are required:
	- (i) the user must give the permission
	- (ii) the website must subscribe a user to a push subscription server
	- (iii) the push subscription server has to accept the subscription request
  A website that uses push notification and that is vulnerable to XSS may allow an attacker to hijack the subscription using their own secret key from the same third-party push provider. In this way, the attacker can leverage a benign service worker and exploit the provider features such as geolocation

## Attack scenario (case-study)

**Leveraging IndexedDB**
- a configuration variable is stored in the IndexedDB
- the variable (e.g., a URL value) is used by the SW to import a script
- even if the variable is sanitized using a [[RegEx (Regular Expression)]], this can be bypassed by taking advantage of URL encoding
- manipulating the IndexedDB, attackers can inject arbitrary code to be executed in the SW
- a study demonstrated that SW are update on average every 40 days, so the code injected can last for a long time

**Leveraging push subscription**
- normally, an appified website can use the primitive `pushManager.subscribe` API to register for push notifications
- in practice, third-party push libraries are largely used to handle the push messages feature (**OneSignal** is one of the most used)
- if an appified web application is vulnerable to XSS, an attacker could
	- (i) unsubscribe the legitimate account
	- (ii) un-register the current service worker, tied to the benign account
	- (iii) re-subscribe using a malicious account, which will automatically register the previous service worker
	- (iv) as OneSignal provides all the implementations and also an easy-to-use web portal to access the subscribed user information, the attackers only need to run a few lines of code inside the document context to easily track victim locations
- even if a library is not used, the attackers may still be able to perform this attack by implementing the back-end server to handle push subscriptions and an alternative function to track geolocation

==The underlying problem is the push protocol not having any mechanism to check if the `applicationServerKey` is legitimate== (!)

## Approach

- we developed a measurement tool to conduct a large-scale study on the popular websites that deploy a service worker
- we used a public dataset provided which shows the Alexa top 7,060 websites that utilize a service worker
- [OpenBugBounty](https://www.openbugbounty.org/) was used to assess which websites were reported to be vulnerable to XSS. 934 websites were found having non-patched XSS[^1]
- static data was collected from the websites, verifying that they actually register a SW
- IndexedDB usage was analyzed

## Results

- some websites blindly trusting the data from the [[IndexedDB]] and use it inside critical functions in the SW context. ==Information from the document context can flow into the SW context thanks to the IndexedDB==
- We speculate that the vulnerable appified websites use the IndexedDB to specify the path of the file being imported ==because the SW provider encourages them to do so==. The provider likely has several service worker configurations corresponding to different service worker files that fit different types of customers
- legitimate push services providing location-based notifications can be ==utilized by attackers to track a user’s location==

## Limits

- websites that required login were discarded due to challenges in automating the web crawling


---
#### References
- [[(Chinprutthiwong, Vardhan, et al., 2021)]]

[^1]: OpenBugBounty does not offer official APIs to check for bugs in a specific website. However, it can be queried with: `https://www.openbugbounty.org/search/?search=mywebsite.com` to check weather bugs have been reported