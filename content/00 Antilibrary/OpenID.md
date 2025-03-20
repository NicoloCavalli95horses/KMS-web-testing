---
ID: 2025-03-20-09:53
tags:
  - "#definition"
  - OpenID
  - authentication
---
## Definition

The Web as we know it today is site-centric, which results in users having multiple passwords and profiles. Web users face the burden of managing this increasing number of accounts and passwords, which leads to “password fatigue”.
- password fatigue leads users to devise coping strategies that degrade the strength of their credentials

OpenID is a decentralized WSSO solution. ==It is a free protocol and users can choose or even setup their own OpenID provider==

### How does it work

1. **Login Request**: A user selects an identity provider or enters her OpenID URL via a login form presented by an relying party (the website the user is logging in) 

![[open_id_login.png]]

2. **Auth Request**: the relying party fetches the document on the given OpenID URL to discover the identity provider’s endpoint, and then ==redirects the user to the identity provider== for authentication 
3. The user authenticates to the identity provider by ==entering username and password, and then consents== to the release of her profile information
4. **Auth Response**: the identity provider redirects the user back to the relying party with the user’s OpenID identifier and profile attributes, both of which are ==signed by the identity provider==


### Known issues with OpenID

- [[phishing]] attack that redirects users to a malicious replica of an identity provider
- a [[MiTM (man-in-the-middle) attack]] between identity provider and relying party
- a [[DoS (Denial of Service)]] attack on both identity provider or relying party

---
#### References
- [[(Sun, Hawkey, et al., 2012)]]