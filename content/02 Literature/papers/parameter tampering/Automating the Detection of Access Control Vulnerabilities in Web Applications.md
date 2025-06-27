---
ID: 2025-06-27T08:16:18.521Z
tags:
  - paper
  - parameterTampering
  - HTTP
  - accessControl
  - RBAC
Rank: B
---
## Context

The proposed solution primarily detects Access Control Vulnerabilities (ACVs) in web applications ([[logic vulnerability]], [[BFT (business flow tampering)]]). These vulnerabilities occur when users of a web application can access data or functions that should not be accessible to them.

More specifically, the solution can detect:
- **Function-level access control vulnerabilities**: these occur if a web application does not sufficiently check whether the current user is authorized to access a specific function (which often corresponds to a resource in the web application). For example, if a non-administrative user gains access to a function intended only for administrators, such as viewing registered customers
- **Object-level access control vulnerabilities**: These occur if a user gains unauthorized access to specific objects within a web application. For example, if a seller can modify their own products, but by changing the ID in the URL they can modify another seller's product, this is an object-level vulnerability

The solution focuses on detecting these vulnerabilities in the context of ==HTTP GET requests.== 
- The main goal is to identify resources of user U1 that can be illegitimately accessed by user U2
- This users have different privileges and rights (e.g., U1 is a paying user, U2 is a regular user)

The process is fully automated and adopts a “black box” approach, meaning that it analyzes the running web application from the outside without requiring access to the source code or formal access control models.

### Step of the differential analysis

**Crawling**
The crawling component collects all reachable content of the target application, scanning with both U1 and U2 credentials, as well as an anonymous user. Lists of HTTP request/response pairs are collected for each user.

**Filtering**
The filtering component analyzes the request/response pairs collected during U1's crawl.
- A key filter, the "other users content filter", removes content from U1's crawl results that is also present in U2's crawl results. The assumption is that if a URL is accessible by both (U1 and U2) during the crawl, it is assumed that both have legitimate access to that content and therefore should not be considered a potential vulnerability point for the test in question. This helps focus attention on resources that should be unique to U1.

**Replaying**
U1's filtered requests (i.e., resources that U1 found that U2 did not find during its crawl, and that were not filtered for other reasons) are then ==replayed using U2's identity. The goal is to observe the application's behavior when U2 attempts to access URLs that legitimately belong to U1.==

**Validation**
The validation component assesses if the differences between U1 and U2 correspond to a vulnerability
- U1 content similarity validator: Checks whether the content of the response received when the request is replayed by U2 is similar to the original response received by U1. If the contents are sufficiently similar (80% threshold by default), the request is retained as a potential vulnerability. This prevents false positives where U2 could access a resource but would receive significantly different or empty content (e.g. an empty list instead of U1's data), indicating correct application behavior
- U2 content similarity validator: This validator, introduced as an improvement over the original version, is essential to reduce false positives. It compares the content received when U2 plays a request with all the content received in responses during U2's crawl. If the similarity is high enough (95% threshold by default) for any comparison, the request is not flagged as a vulnerability. This is because if U2 can already access substantially the same content (albeit via a different URL) during its own crawl, then it clearly has legitimate access to that content, making access to U1's URL not a true vulnerability

---
#### References
- [[(Rennhard, Kushnir, et al., 2022)]]
