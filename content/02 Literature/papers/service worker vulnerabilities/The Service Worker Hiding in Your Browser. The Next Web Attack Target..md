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

## Evaluation

Often a tool or a solution is implemented. How was that solution evaluated?

## Results

- some websites blindly trusting the data from the [[IndexedDB]] and use it inside critical functions in the SW context. Information from the document context can flow into the SW context thanks to the IndexedDB
- legitimate push services providing location-based notifications, which can similarly be utilized by attackers to track a user’s location

## Limits

What are the limits of the research? What could be improved?

---
#### References
- [[(Chinprutthiwong, Vardhan, et al., 2021)]]
