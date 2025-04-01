---
ID: 2025-03-25-16:42
tags:
  - "#definition"
  - HAR
  - HTTP
---
## Definition

A .HAR (HTTP Archive) file is a JSON file that ==records network traffic between a browser and a server==. It is used to diagnose network and performance problems in web applications.

### What is a HAR file used for?

- **Debugging network problems**: It allows you to analyze HTTP requests and responses, load times, and errors
- **Performance analysis**: shows how long it takes a web page to load resources such as CSS, JavaScript, images, and APIs
- **Debugging security problems**: it can reveal suspicious requests, unwanted redirects, or vulnerabilities such as man-in-the-middle
- **Reproducing bugs**: by recording all HTTP traffic, it can be used to replicate issues reported by users.

### How to generate a HAR file?

In Google Chrome, for example:
- Open Developer Tools (F12 or Ctrl+Shift+I / Cmd + Option + I on Mac).
- Go to the Network tab.
- Reload the page to capture traffic.
- Right-click a request, select Save all as HAR with content, and save the file.

---
#### References
- https://en.wikipedia.org/wiki/HAR_(file_format)
- Used by [[(Neef, Kleissner, et al., 2024)]]