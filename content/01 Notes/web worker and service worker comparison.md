---
ID: 2025-02-17-14:25
tags:
  - "#definition"
  - serviceWorker
  - webWorker
  - parallelComputing
  - JavaScript
---
## Definition

Even though both a [[web worker]] and a [[service worker]] run in an independent thread, and they both share API such as `postMessage` to talk to the main execution thread, the two technologies have different goals:

| Feature                               | Web worker                                                                                                              | Service worker                                                                                                         |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Goal                                  | Heavy computation on the background                                                                                     | Intercept and handle network requests, caching mechanisms, push notifications                                          |
| Access to DOM (document object model) | No                                                                                                                      | No                                                                                                                     |
| Persistent                            | No, they stop working as soon as the browser is closed, but potentially they are active the whole time                  | Yes, it can be enabled even offline, even with the browser closed, but they can be paused by the browser if not in use |
| Can handle cache                      | No                                                                                                                      | Yes                                                                                                                    |
| Handle push notification              | No                                                                                                                      | Yes                                                                                                                    |
| Can work offline                      | Yes, but only if:<br>- the workers's script has been downloaded<br>- the workers's logic does not involve web resources | Yes                                                                                                                    |
| Intercept network requests            | No                                                                                                                      | Yes                                                                                                                    |
| Communication with the main thread    | `postMessage`  API                                                                                                      | `postMessage` API                                                                                                      |
| Most used for                         | Data processing, cryptography, AI                                                                                       | Offline behaviors, used in [[PWA (progressive web application)]], caching, push notification                           |
**Web workers** are mostly used to execute complex operations without blocking the user interface

**Service workers** are mostly used to handle network requests, caching mechanisms or support offline functionalities
