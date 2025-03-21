---
ID: 2024-07-27-11:25
tags:
  - definition
  - cyberSecurity
  - CORS
  - crossDomainPolicy
  - attackMitigation
---
Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a ==server== to indicate any origins ([[domain]], scheme, or [[port]]) other than its own, ==from which a browser should permit loading resources==.

CORS is a set of rules that control how web applications hosted on one domain can request resources from a different domain
- They are necessary to enhance **security** by preventing potentially malicious behavior from web pages
- CORS represent a way to customize the default behavior of [[SOP (Same-Origin Policy)]]
- CORS is implemented server-side

### Why CORS is Necessary if we have SOP already?

- SOP is a default policy which does not consider specific scenario
- Sometimes you want an API hosted in `a.com` to be accessible from `b.com`
- SOP does not specific the behavior with resources other than code, such as CSS HTML, video and images resources
- CORS gives resource owners ==control over which external domains can interact with their server==

### What can CORS do for me?

 - Specify ==which origins may call a resource==, with `Access-Control-Allow-Origin` header (ACAO header). You may specify a wildcard origin (not recommended); this is well-supported by browsers
 - Specify ==whether to attach cookies to requests==, with `Access-Control-Allow-Credentials` header or (ACAC header), with true or false
 - Specify ==what headers== may be sent along with requests, with `Access-Control-Allow-Headers` header. You may specify a wildcard header (not recommended)
 - Specify ==what HTTP methods are allowed==, using `Access-Control-Allow-Methods`

### Risks and shortcomings

- CORS alone does not solve all the security problem. For example, it cannot protect against [[CSRF (cross-site request forgery)]]
- bad implementations could still be exploited
- using a whitelist of trust domains comes with the disadvantage of having to manually update the list from time to time
- avoid using wildcards (`*`)
- avoid using `Access-Control-Allow-Origin: null` because the `null` value can be edited


See also: [[cross-domain policies]]

---
## References
- https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
- [[(Zhu, 2021)]]
- https://medium.com/datamindedbe/cors-and-the-sop-explained-f59de3a5078