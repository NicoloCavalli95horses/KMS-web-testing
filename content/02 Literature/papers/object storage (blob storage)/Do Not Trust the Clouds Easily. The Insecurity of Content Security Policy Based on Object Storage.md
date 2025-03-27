---
ID: 2025-03-27T13:57:53.557Z
tags:
  - paper
  - cloudComputing
  - projectSLR
  - XSS
  - crossDomainPolicy
  - CSP
  - objectStorage
Project:
  - SLR
---
Bypassing CSP exploiting the whitelist of trusted domains. If the root domain of a cloud object storage service is present in a CSP configuration, a [[XSS (cross site scripting)]] may be carried out.

## Context

The main goal of this article is to demonstrate an attack that uses an [[object storage service]] to bypass [[CSP (Content Security Policy)]]

An object stored in an object storage service such as AWS S3, is composed of (i) key identifier (ii) data content (iii) metadata.
While each object has a unique identification ID, the default root domain is shared.

For example, the following URLs are valid object identifiers:
- `http://gzhu.s3.ap-northeast-2.amazonaws.com/24479C70-9EEF-4645-BFD4-6D0BCC88E8F1.jpeg`
- `http://gzhu.s3.ap-northeast-2.amazonaws.com/67576753-dfe4-5853-DWR1-GYUEF87UHEFJ.jpeg`

All the resources stored in a object storage service usually share the same default root domain (`amazonaws.com`)

### How the attack work

**1. Obtaining a list of domains that the target website accepts**
An attacker can often obtain a list of all the domains accepted by the CSP of the target website. The HTTP headers are often revealed:
- using a simple [[curl]] command (e.g., `curl -I http://google.com`)
- checking the source HTML file (sometimes the CSP is readable even in the `<meta>` tag)
- using an online tool, such as Google CSP Evaluator

**2. Uploading a malicious script to the cloud vendor's object storage that is accepted**
- if among the whitelisted domains there is the cloud vendor root domain (`amazonaws.com`), an attacker can upload his script directly in the accepted vendor's object storage

**3. The XSS attack is not blocked by the CSP**
- a XSS may be performed to inject the malicious script into the target website

### Approach

[Zoomeye](https://www.zoomeye.ai/), [Fofa](https://en.fofa.info/) and Quake are powerful cyberspace research engine that crawls the web. They report the HTTP header of the GET request

![[do_not_trust_clouds_table.png]]
### Observations

- sometimes, the `default-src` directive points to a root domain, but other directives are more specific. In this case, the default directive is ignored by CSP ==and therefore the bypass is not possible
- sometimes the directive value contain metadata related to the geographic location ID of the object storage. In this case ==the attacker can still choose the same storage location== to bypass the CSP whitelist
- If the directive value contains also the bucked ID, the CSP is too specific to be by-passed
- The developers often ==make spelling mistakes when setting the CSP whitelist, such as the object storage location ID “ap-northeast-2”==
- object storage services are mainly used to store unstructured data, Indeed, `img-src` and `media-src` directives are found to be the most used
- On average, ==the configuration error rate of these websites with object storage root domains in the whitelist is as high as 78.3%.==
- Google’s object storage root domain is mainly included in the whitelist of `script-src` and `default-src`. The two directives together account for more than 99.5% of results. In contrast, Amazon’s object storage root domain distribution is more diverse. ==This difference is related to the different business models adopted by Google and Amazon.==
	- Google use the same root domain `googleapis.com` for more than 2000 public subdomains. Most of these subdomains are used to serve static resources or business API. This centralized architecture is part of Google business model
	- The developers may believe that these domains are only controlled by Google, therefore, they are all safe
	- According to our statistics, `script-src: *.googleapis.com` appears in the CSP of more than ==ten million websites==
- We found that websites with misconfigured CSP are mainly concentrated in countries with developed Internet
- The number of websites with incorrectly configured CSPs has been ==increasing year by year==

> [!SUMMARY] Do not trust Google!
> When developers trust the API or static resources provided by Google, they are implicitly trusting also trust `storage.googleapis.com`. But `storage.googleapis.com` is the domain of Google Cloud’s object storage service, and ANYONE can store ANY file on it!

### Causes

- developers trust cloud vendors too much and are too gentle with the CSP configuration. They put the object storage root domain into the `default-src` of the CSP whitelist, or even worse, into the `script-src`
- ==the CSP whitelist paradoxically may offer an attacker a clear indication on how to attack==

---
#### References
- [[(Lv, Shi, et al., 2023)]]
