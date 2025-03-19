---
ID: 2025-01-14-16:33
tags:
  - "#definition"
  - cyberSecurity
  - gui
---
## Definition

In computer security, a drive-by download is the unintended download of software, typically malicious software. The term "drive-by download" usually refers to a download which was authorized by a user ==without understanding what is being downloaded==

In other cases, the term may simply refer to a download which occurs without a user's knowledge (similar to a [[trojan horse]]).
- Common types of files distributed in drive-by download attacks include computer viruses, spyware, or crimeware.

**Occasions for attacks**
- visiting a website
- opening an e-mail attachment
- clicking a link
- clicking on a deceptive pop-up window

In such cases, the "supplier" may claim that the user "consented" to the download, although the user was in fact unaware of having started an unwanted or malicious software download. 

Similarly if a person is visiting a site with malicious content, the person may become victim to a drive-by download attack. 

A drive-by install (or installation) is a similar event. It refers to installation rather than download (though sometimes the two terms are used interchangeably).

## Mitigation techniques

- **Internet Explorer** : the `X-Download-Options` HTTP header can be used to modify the user interface download dialog box, removing the open button (specifying a no-open value in the header). This prevents the user from opening malicious files that might run content directly on the domain (example, HTML files)  [[(Aditya Sood, Richard Enbody, et al., 2011)]]

---
## References
- https://en.wikipedia.org/wiki/Drive-by_download
- [[(Chen, Shi, 2018)]]