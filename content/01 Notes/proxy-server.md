---
ID: 2025-02-12-14:11
tags:
  - "#definition"
  - network
---
## Definition

In computer networking, a **proxy server** is a software that acts as an ==intermediary== between a client requesting a resource and the server providing that resource.
- proxy-servers and reverse proxy-server are used to improve privacy, security, and possibly performance


### Proxy Server (Forward Proxy)

It is used by ==clients== (users, browsers, devices), and acts as an intermediary between the client and the server they want to connect to.

==The client sends a request to the proxy, which forwards it== to the destination server and returns the response to the client.

Common uses:
- **Anonymization**: Hides the client's IP.
- **Caching**: Reduces the load on a network by storing frequently requested resources.
- **Filtering**: Blocks unauthorized websites (e.g. in corporate firewalls).
- **Access to geo-blocked content** (e.g. VPN).

*Example*: A user wants to access example.com, but goes through a proxy that filters or modifies the request before sending it to the destination server.

### Reverse Proxy

It is used by servers, it acts as an intermediary between clients and one or more backend servers

==The client thinks it is connecting directly to the server, but it actually connects to the reverse proxy,== which forwards the request to an appropriate backend server and returns the response.

Common uses:
- **Load Balancing**: Distributes traffic across multiple servers to avoid overload.
- **Caching**: Improves performance by storing common responses.
- **Security**: Hides the internal topology of servers and can apply protections against DDoS attacks.
- **SSL Terminating**: Handles HTTPS encryption on behalf of the backend servers.

*Example*: a user visits example.com, but their request is first handled by a reverse proxy like NGINX, which decides which backend server to serve the request.

---
#### References
- https://en.wikipedia.org/wiki/Proxy_server
