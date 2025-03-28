---
ID: "2025-03-27-17:02"
tags:
  - "#definition"
---
## Definition

The curl command is a ==command-line client== used to transfer data to and from a server using various protocols, such as HTTP, HTTPS, FTP, SCP, SFTP, and many others. The name curl stands for "**URL Client**", as it is a tool for interacting with URLs and web resources.

### Main features of CURL

- Make HTTP/HTTPS requests (GET, POST, PUT, DELETE, etc.)
- Download files from remote servers
- Send data to an API
- Supports authentication, cookies, proxies, and custom headers
- Supports resume downloads
- Can be used to test REST APIs

```txt
curl https://www.example.com
```

Response:

```txt
StatusCode        : 200
StatusDescription : OK
Content           : <!doctype html>
                    <html>...
RawContent        : HTTP/1.1 200 OK
                    Alt-Svc: h3=":443"; ma=93600,...
Forms             : {}
Headers           : {[Alt-Svc, h3=":443"; ma=93600,h3-29=":443"; ma=93600,quic=":443"; ma=93600; v="43"], [Connection, keep-alive], [Content-Length, 1256], [Cache-Control, max-age=865]...}
Images            : {}
InputFields       : {}
Links             : {@{innerHTML=More information...; innerText=More information...; outerHTML=<A
                    href="https://www.iana.org/domains/example">More information...</A>; outerText=More
                    information...; tagName=A; href=https://www.iana.org/domains/example}}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 1256
```

---
#### References

