---
ID: 2025-03-12T13:55:55.363Z
tags:
  - paper
  - SQLIA
  - XSS
  - HTTP
---
## Context

The web applications follow a three tier architecture involving web clients, web servers and databases. Most of the web based attacks target these components to compromise the applications, databases, system resources and network.

This paper presents a ==web application policy enforcement and attack detection== framework that can identify attacks ==by analyzing the HTTP traffic== [^1]

The HTTP traffic is made of packages of information in textual format

```HTTP
GET /index.html HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
```

Since the text can be encoded, parsing the textual content is not enough to guarantee a protection from [[SQLIA (SQL injection attack)]], [[directory traversal (path traversal)]] and [[XSS (cross site scripting)]]. ==Therefore, it is necessary to filter packets at the bit level to ensure that the request is not malicious.==

## Approach

Two components are implemented: HTTP detection engine and HTTP analyzer

**HTTP packet detection engine**
Takes network packets as input and identifies the whole HTTP message that is composed of several packets, which may not come all in a row
- This is done using a bit-coding approach. HTTP traffic is detected by capturing  the ==first 40 bits of the TCP packet payload and comparing it with generated signature pattern==
- For example, in case of HTTP POST method, the pattern includes five characters namely ’P’, ’O’, ’S’, ’T’  and ’ ’. This patter when converted into hexadecimal will  result in 0x50, 0x4f, 0x53, 0x54 and 0x20
- the HTTP detection engine can classify ==only GET and POST requests==

**HTTP analyzer**
Identify malicious requests that contains well-known patterns
- the HTTP parser analyzes the HTTP packets
- The module identifies a packet as malicious using:
	- packet header attributes (HTTP URL, User-Agent, Content-Type, HTTP POST)
	- possible attack patterns (`'1'='1'` or `../../` or `<script>`)
	- blacklisted malicious URLs database

## Results

The tool was tested using [ZAP](https://www.zaproxy.org/) and sqlmap to launch attacks to a test server. The test server was able to detect directory traversal, cross site scripting and SQL injection using this framework

---
#### References
- [[(Muraleedharan, Thomas, et al., 2020)]]

[^1]: This paper is considered relevant to a SLR on [[Web application security]] with focus on client-side vulnerability, since injection attacks mitigated by the authors's solution may steam from a misuse of input fields