---
ID: "2025-03-19-14:17"
tags:
  - "#definition"
---
## Definition

VNC (Virtual Network Computing) is a remote desktop system that allows you to view and interact with a remote computer over a network. It is a protocol that transmits a computer's graphical interface from a VNC server (running the target operating system) to a VNC client (which views and interacts with the interface on a local device). VNC is widely used for remote support, system administration, or to access a machine remotely, especially in non-Windows environments.

noVNC, on the other hand, is a version of VNC that ==can be used directly through a web browser==
- It is a library that emulates a VNC client using only JavaScript, making it possible to access a VNC session without the need for external client software, directly through the browser
- The noVNC server is based on WebSockets and interfaces with a traditional VNC server.

---
#### References
- https://novnc.com/info.html
- [[(Felsch, Heiderich, et al., 2015)]] recommend to protect a noVNC connection using [[CAPTCHA (Completely Automated Public Turing-test-to-tell Computers and Humans Apart)]] 