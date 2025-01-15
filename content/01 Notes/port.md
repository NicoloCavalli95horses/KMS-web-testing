---
ID: 2025-01-14-17:45
tags:
  - "#definition"
---
## Definition

In computer networking, a port or port number is a ==number assigned to uniquely  identify a connection endpoint and to direct data to a specific service.==

At the software level, within an operating system, a port is a logical construct that identifies a specific process or a type of network service. 
- A port at the software level is identified for each transport protocol and address combination by the port number assigned to it. The most common transport protocols that use port numbers are the Transmission Control Protocol (TCP) and the User Datagram Protocol (UDP); those port numbers are 16-bit unsigned numbers.

A port number is always associated with a network address of a host, such as an IP address, and the type of transport protocol used for communication. 
It completes the destination or origination address of a message.

Specific port numbers are reserved to identify specific services so that an arriving packet can be easily forwarded to a running application. For this purpose, port numbers lower than 1024 identify the historically most commonly used services and are called the well-known port numbers. Higher-numbered ports are available for general use by applications and are known as ephemeral ports.

Ports provide a multiplexing service for multiple services or multiple communication sessions at one network address. In the client–server model of application architecture, multiple simultaneous communication sessions may be initiated for the same service.

## References
https://en.wikipedia.org/wiki/Port_(computer_networking)