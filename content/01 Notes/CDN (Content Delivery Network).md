---
ID: 2025-03-21-10:29
tags:
  - "#definition"
  - CDN
---
## Definition

A CDN (Content Delivery Network) is a network of geographically distributed servers that helps speed up the loading of web content and reduce the load on the main server. In order to do so, it caches the assets (or the pages) and delivers them to clients such that the original server needs to handle fewer requests.

 **What is a CDN for?**
- **Speed ​​up page loading**: static files (images, CSS, JavaScript) are served from the server closest to the user, reducing latency.
- **Reduce the load on the main server**: traffic is distributed across multiple servers, improving the scalability of the site.
- **Increase security**: many CDNs offer DDoS protection and caching to mitigate malicious traffic.
- **Improve availability**: if the main server is offline, the CDN can still serve cached content.

### Example

Imagine a website loads a widely used JavaScript file, such as jQuery.

**Without CDN**: the file is downloaded from the website's server for each user.
If the server is in Europe and a user is in Asia, the latency is high.

**With CDN**: the jQuery file is already stored in multiple data centers around the world. An Asian user will receive the file from a server close to them, reducing the loading time.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
```

### Risks

- CDN can degrade the security of [[CSRF (cross-site request forgery) token]], because file that should be requested each time are cached (and therefore the token). This means that the same token might be used by multiple applications and by the same application multiple times
- CDNs may be configured to ==cache content based purely on the suffix of the request URL rather than their content or headers== from the origin server

---
#### References
- CDN undermines CSRF token security. Discussed by: [[(Trampert, Stock, et al., 2023)]]