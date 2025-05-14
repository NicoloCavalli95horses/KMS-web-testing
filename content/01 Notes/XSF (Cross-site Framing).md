---
ID: 2025-05-07-10:04
tags:
  - "#definition"
  - crossSiteFraming
  - clientSideAttacks
  - webApplication
---

> [!NOTE] XSF attacks
> XSF (Cross-site framing) attacks do not require physical access or control over the computer by malware or otherwise and are launched online

In many countries, computer records are often used in criminal investigations and admitted as legal evidence. Digital, computer, and network forensics, the science of collecting forensic evidence related to the use of computers and networks and to crimes involving them, is an important and well-established discipline.
- usually, computer records reflect the action of the user, even when these actions  are illegal or violate social, business, or ethical codes
- however, it is indeed possible to manipulate computer records to cause a false impression of wrongdoing (to frame a user)
- Michael Fiola, 2007, was charged with possession of child pornography and spent 5 years in prison. He was innocent, his laptop had a malware that downloaded this material

**Intentional framing**: a victim is chosen by the attacker and his browser's history, or his file system is filled up with illegal material
- this can have legal consequences, as the Micheal Fiola case
- or private-personal consequences, such as discredit a victim in the social, workplace, business or political context, by polluting user personalization algorithms in social media

**Unintentional framing**: the attacker choses a random victim just to hide his own traces

Cross-site framing can go undetected by forensic investigation procedure (until 2015)

**Framing without a malware** [[(Gelernter, Grinstein, et al., 2015)]]:
- the victim is tricked into visit a malicious website (with [[phishing]] techniques and social engineering, legitimate site-promotion techniques, or with [[tabnabbing]], [[clickjacking]], [[XSS (cross site scripting)]]). Attacks on a specific site requires the user to be authenticated
- evidence is planted in the victim's computer via [[CSRF (cross-site request forgery)]]. ==Google, Yahoo!, Bing, YouTube and Facebook save a history of the user’s search queries by default, even if the queries are sent from other sites.== Furthermore, problematic 'keyword' are not filtered or stopped by these applications. [[clickjacking]] can be used to inject browser history (the user clicks on a button that open a certain website, which is immediately closed)
- traces are covered:
	- An attacker can make the website benign after performing the attack, and the victim's browser will link only to the last legitimate version of the attacker's website. This process can be done while the original framing page and script continue to operate. Loading the ‘benign’ versions of the page and script into a new hidden iframe is sufficient for the browser to overwrite the framing versions in the cache with the benign versions now received
	- it is also possible to manipulate HTTP headers to hide suspicious activities

Since the victim is the end user, the web-service provider may not have significant business motivation to fix the issues that can lead to XSF

### Defenses

- prevent all cross-site requests
- using [[CSRF (cross-site request forgery)]] countermeasures
- blacklists and whitelists
- recording third-party requests for further analysis
- blocking or restricting pages from closing windows that arrive with a new HTTP header

---
#### References

Project SLR:
- [[(Gelernter, Grinstein, et al., 2015)]]