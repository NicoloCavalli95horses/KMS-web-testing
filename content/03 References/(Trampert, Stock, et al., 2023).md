---
ID: 2025-03-21T09:00:37.373Z
tags: ref

Project:
 - SLR
---
## External Link

https://dl.acm.org/doi/10.1145/3607199.3607223

## BibTeX

@inproceedings{10.1145/3607199.3607223, author = {Trampert, Leon and Stock, Ben and Roth, Sebastian}, title = {Honey, I Cached our Security Tokens Re-usage of Security Tokens in the Wild}, year = {2023}, isbn = {9798400707650}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, url = {https://doi.org/10.1145/3607199.3607223}, doi = {10.1145/3607199.3607223}, abstract = {In order to mitigate the effect of Web attacks, modern browsers support a plethora of different security mechanisms. Mechanisms such as anti-Cross-Site Request Forgery (CSRF) tokens or nonces in a Content Security Policy rely on a random number that must only be used once. Notably, those Web security mechanisms are shipped through HTML tags or HTTP response headers from the server to the client side. To decrease the server load and the traffic burdened on the server infrastructure, many Web applications are served via a Content Delivery Network (CDN), which caches certain responses from the server to deliver them to multiple clients. This, however, affects not only the content but also the settings of the security mechanisms deployed via HTML meta tags or HTTP headers. If those are also cached, their content is fixed, and the security tokens are no longer random for each request. Even if the responses are not cached, operators may re-use tokens, as generating random numbers that are unique for each request introduces additional complexity for preserving the state on the server side. This work sheds light on the re-usage of security tokens in the wild, investigates what caused the static tokens, and elaborates on the security impact of the non-random security tokens.}, booktitle = {Proceedings of the 26th International Symposium on Research in Attacks, Intrusions and Defenses}, pages = {714–726}, numpages = {13}, keywords = {CSP Nonces, CSRF, Security Tokens, Web Security}, location = {Hong Kong, China}, series = {RAID '23} }
