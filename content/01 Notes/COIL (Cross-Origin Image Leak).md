---
ID: 2025-01-16-11:12
tags:
  - "#definition"
  - canvas
  - HTML
  - cyberSecurity
---
## Definition

Cross-Origin Image Leak (COIL) is a ==general vulnerability related to the handling of cross-origin resources in the context of the web. ==
- This is a problem that can arise anywhere there are interactions between content or resources from different origins, if security policies are not respected or implemented correctly

## COIL attacks opportunities

- **HTML** elements, such as [[canvas DOM element]], video and audio tags. 
	- If a cross-origin image is loaded into a page, some vulnerabilities can allow inferring information about its contents, for example through indirect analysis (timing attacks or rendering measurements).
	- \<video> and \<audio>: Loading cross-origin media can expose metadata or playback behavior
- **WebGL**: allows loading textures and manipulating them. If cross-origin textures are used, improper handling could lead to leaks similar to those of Canvas.
- **CSS**: certain CSS properties can be exploited to infer characteristics of cross-origin resources (e.g. background image loading).
- **Fetch/XHR**: Fetch or XMLHttpRequest requests can also expose cross-origin resources if they are not protected by [[CORS (Cross-Origin Resource Sharing)]].
- **Worker Threads**: with technologies like Web Workers or Service Workers, access and manipulation of cross-origin resources could be exploited in unexpected ways.
- **Timing Attacks:** access to cross-origin resources can be exploited indirectly, by measuring server response time or content rendering behavior.

## Canvas as a specific example

The Canvas API is often an attack vector for COIL because:
- It allows fine-grained read operations on images' pixels
- It allows a wide range of graphics transformations that can be used to infer information indirectly
- It is widely used in modern web applications, increasing the risk of insecure configurations.

## Summary

COIL is a category of cross-origin vulnerabilities that exploit various vectors (Canvas, WebGL, <img>, Web Workers, etc.) to infer information about resources from different origins. Protection against this vulnerability requires a robust implementation of security policies, such as Same-Origin Policy (SOP), CORS, and other measures specific to each application context.

Cross-Origin Image Leak (COIL) via Offscreen Canvas is a security vulnerability that can occur in the context of web applications that use the HTML5 Canvas API.

## References
