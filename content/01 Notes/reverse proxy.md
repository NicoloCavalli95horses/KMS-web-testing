---
ID: 2025-04-23-16:10
tags:
  - "#definition"
  - network
---
### Reverse Proxy

It is used by servers, it acts as an intermediary between clients and one or more backend servers

==The client thinks it is connecting directly to the server, but it actually connects to the reverse proxy,== which forwards the request to an appropriate backend server and returns the response.

Common uses:
- **Load Balancing**: Distributes traffic across multiple servers to avoid overload.
- **Caching**: Improves performance by storing common responses.
- **Security**: Hides the internal topology of servers and can apply protections against DDoS attacks.
- **SSL Terminating**: Handles HTTPS encryption on behalf of the backend servers.

*Example*: a user visits example.com, but their request is first handled by a reverse proxy like NGINX, which decides which backend server to serve the request.

See also [[proxy server]]

---
#### References
- [[(Upasana Sarmah, D.K. Bhattacharyya, et al., 2018)]]