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

### Causes

- developers trust cloud vendors too much and are too gentle with the CSP configuration. They put the object storage root domain into the `default-src` of the CSP whitelist, or even worse, into the `script-src`
- ==the CSP whitelist paradoxically may offer an attacker a clear indication on how to attack==

## Approach

Describe the paper approach in simple term.

---
#### References
- [[(Lv, Shi, et al., 2023)]]
