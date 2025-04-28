---
ID: 2025-04-27T10:03:56.557Z
tags:
  - paper
  - projectSLR
  - phishing
  - clientDefense
  - machineLearning
  - browser
Project:
  - SLR
---
## Context

A [[phishing]] attack occurred in Oct 2022 at INRIA: a fake login page under a credible URL was used to steal the credentials of researchers and students

**Contributions**
- a client-side anti-phishing mechanism based on machine learning is proposed and a Chrome extension is implemented

## Approach

- dataset was taken from 4 different resources (UCI Machine Learning Repository, collection of 90 hijacked journal websites, 310 blacklisted URLs from PhishTank, 310 genuine URLs from moz.com/top500) (in total, 400 legitimate and 400 malicious URLs)
- features of the model were divided in 4 groups: address bar based, abnormal based, HTML and JavaScript based, domain based
- a [[random forest]] classifier is used to create and merge several decision trees to render a reliable forecast
- if the website is classified as malicious, an alert is displayed to the user
- the user is allowed to whitelist a website in order to prevent a false positive

Features considered by the model:
- IP address, URL length, tiny URL, `@` symbol, redirecting using `//`, prefix or suffix in the domain, number of sub-domains, HTTPS or HTTP, favicon, using non-standard [[port]], request URL, URL in anchors (`<a>` tags), links in `<meta>`, `<script>` and `<link>`, sever form handlers, email submission, iframe presence 

## Evaluation

To assess the performance of the *PhishCatcher*, we tested and evaluated it against testing data and real scenarios
- on testing data, 98.5% of accuracy, 98.5% of precision and 98.5% of recall
- <10 real websites were manually checked
- PhishCatcher outperformed other anti-phishing tool such as SpoofGuard, EarthLink, Netcraft, Cloudmark, TrustWatch
- Average latency is 62.5 milliseconds, measured by manually running the extension over 40 websites


---

Browser extension available at: https://github.com/wilstef/PhishCatcher
#### References
- [[(Ahmed, Altamimi, et al., 2023)]]
