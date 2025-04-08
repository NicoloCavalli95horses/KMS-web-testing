---
ID: 2025-04-08T10:02:33.329Z
tags:
  - paper
  - projectSLR
  - CSFR
  - clientDefense
Project:
  - SLR
---
## Context

[[CSRF (cross-site request forgery)]] attacks are often mounted on top of [[XSS (cross site scripting)]] vulnerabilities.
- An XSS vulnerability allows one to inject arbitrary HTML or JS code
- JS code or HTML specific attribute values with arbitrary URLs perform then unexpected activities

**Contributions**
- Firefox extension to defend against CSRF
- benchmark test suite that can be used to emulate CSRF attacks from browsers

## Approach

A prototype plugin for the Firefox browser was developed

The authors proposes the detection of CSRF attacks with the notion of *visibility[^1] and content checking*[^2] of suspected requests. The idea is:
- to intercept a suspected request containing parameters and values
- to relate the suspected parameters and values with one of the visible forms present in an open window
- if there is an exact match, the suspected request is modified to make it benign, is launch it to the remote website, and the content type is identified. The latest is then matched with the expected content type
- Any mismatch between request attribute values or content type results in a warning

The approach:
- does not rely on cross-origin policies or server-side states
- does not imply storing URLs or tokens to be matched at a later stage for attack detection

## Evaluation

The plugin was evaluated on three real world programs that are vulnerable to the CSRF attacks

## Results

100% of the attacks simulated in a in-house test suite were detected by the plugin
We can conclude that the notion of visibility and content checking can be an effective CSRF attack detection technique

## Limits

- They assume that a web server correctly set a response content-type
- POST or GET requests with no parameters are not detected (for example, a CSRF that execute a logout request or other requests were parameters are not required)
- A user needs to manually enable the plug-in from the tools menu of a browser after the target page that needs to be monitored is loaded
- They build their own benchmark test suite, which can be biased since they know what they are evaluating and how

---
#### References
- [[(Shahriar, Zulkernine, et al., 2010)]]

[^1]: **Visibility notion**: one of the tab the user has opened in the browser ==must relate to the ongoing GET/POST request==. The assumption here is that there must be a match between the request data and the DOM content

[^2]: **Content notion**: the web server response is usually visible to the user (e.g., the user is redirected to a new page, or a confirmation popup appears). The hypothesis here is that the content type of the request should match the content type of the response
