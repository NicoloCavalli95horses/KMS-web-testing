---
ID: 2025-01-27-14:14
tags:
  - paper
  - paywalls
  - webMonetization
  - cyberSecurity
  - webApplication
---
Goals of the paper:
- measuring how widely paywalls have been adopted
- present an automated system for detecting whether a site uses a paywall

The web is increasingly moving away from “open” models to “paywalled” models (see [[paywalls]]), to keep the user engaged with the platform.

People are annoyed by ad-based websites because:
- Google and Facebook have a monopoly on the advertising industry (70% of revenues)
- Ad-based funding systems suffer from significant and increasing rates of fraud
- privacy concerns

### Paywall circumvention

We find that all observed paywalls are trivial to circumvent. Well-known techniques includes:
- emptying the cookie jar ==(75% effective)==
- enabling Incognito/Private Mode ==(sufficient to bypass most paywalls)==
- changing the screen size dimensions
- hiding the user’s IP address
- changing the user agent string
- using an ad blocker extension
- enabling “Reader Mode”
- using the Pocket web service5
- blocking HTTP requests for popular paywall libraries

### Paywall detection

Our model consists of two components:
1. a crawling component that visits a subset of pages on a site, records information about each page’s execution, and extracts some ML features
	- **text features**: the presence of specific keywords is checked ("subscribe", "sign up", "remaining", translated in 87 languages)
	- **structural features**: if the website has a [[RSS (RDF Site Summary)]] or atom feed, the number of text nodes increases after cookies are cleaned, etc
	- **visual features**: how many text nodes are obscured before and after cleaning cookies, number of text nodes, number of nodes that have z-index styles (to detect pop-ups)
2. a classifier, that uses the extracted features to predict if the site uses a paywall
	- a [[random forest]] is used from SciKit-Learn python library
	- the final accuracy was of 77%

---
## References
- [[ref_understanding_popularity_internet_paywalls]]