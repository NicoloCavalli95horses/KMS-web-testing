---
ID: 2025-02-17-11:51
tags:
  - "#definition"
  - cyberSecurity
  - clientSideAttacks
  - webApplication
---
## Definition

Phishing refers to the practice of ==manipulating the user with the goal of stealing confidential information== (login credentials, payment card details, etc). This is usually done:
- by creating fake web pages that mimic legitimate resources (*phoney web pages*)
- by using persuasive emails 

Phishing was initially used for identity theft but now attackers are using it to steal sensitive information related to *national security, intellectual property and organizational secrets* [[(Ahmed, Altamimi, et al., 2023)]]

**Why people still fall for phishing?**
The average user is unable to distinguish malicious web pages from legitimate ones and does not have enough technical information about URLs. Therefore:
- does not know which URL to trust (for example: embedded in e-mail text, in a displayed tooltip, in the status bar)
- does not see the whole URL of a web page, due to tiny URL services
- clicks on links without checking, for an habituation effect

**A matter of bad UI design for cyber-security**
The role of the user interface design is not negligible [[(Spero, Biddle, 2021)]]
- a UI that prioritize the "primary tasks" and does not stress cyber-security features enough can lead to an incorrect [[mental model]] of the software, which can lead to an incorrect though (e.g., this link is legitimate), which can lead to an incorrect and unsafe behavior (e.g. clicking on the phishing link)

Often the title of the phishing website mimics a legitimate one (see [[typosquatting]]) or an IP address is used to mask part of the URL address (for instance, `http://192.168.0.1/paypal/login.php` instead of `“https://www.paypal.com/login.php` ) [[(Fonseka, Pashenna, et al., 2023)]]

Simply using a blacklist of malicious websites is not an effective solution, since new phishing websites can be created in any moment and the list should be constantly updated [[(Chanakya, Spoorthi, et al., 2024)]]

Phishing sites often masquerade as useful sites, leading users to unknowingly download malicious software, providing hackers with an easy path to intrude on computers. [[(Chanakya, Spoorthi, et al., 2024)]]

Moder phishing is also done with [[QR-code]], but also phishing mobile applications and advertisements [[(Ahmed, Altamimi, et al., 2023)]]. This advanced attacks may circumvent firewalls, digital certificates, encryption and even two-factors authentication

**Favorite phishing targets**
- banking sites
- third party payment systems
- e-commerce

From [[(Onarlioglu, Buyukkayhan, et al., 2015)]]: Critical security visual indicators, such as browser SSL connection indicators (e.g. the padlock icon on websites served via HTTPS), can be modified by malicious browser extensions to facilitate phishing attempts.

#### Example

Attackers may study the email communications of an employee for a while, and then at some opportune moment send an email spoofing the identity of a trusted other asking for a transfer of funds, which will be deposited into the attacker’s account

## Mitigation techniques

#### Blacklisting/whitelisting URLs
- low false positives
- hard to maintain
- miss zero-day attacks

#### Developing heuristics
- **Visual similarity and page content investigation**: if two login pages look similar (similar layout and colors) but the application domains are different, an alarm is raised. This approaches are great, but (i) screenshots are stored locally and are heavy (ii) comparison takes time
- **ML techniques to classify URLs**: Chrome's extension PhishCatcher [[(Ahmed, Altamimi, et al., 2023)]]. Shortcomings: (i) large dataset is needed (ii) not perfect agreement on model's features
- **ML techniques to classify emails**
- **Human training on phishing**

Malicious URLs often [[(Fonseka, Pashenna, et al., 2023)]]:
- Are longer than legitimate one
- Use special or unusual characters (`@, /, \`)
- Contain irrelevant information
- The characters `//` may be exploited to perform a [[redirect attack]]
- The src of the favicon image can be an important things to analyze in order to detect a malicious website. ==Attackers can use a favicon of a legitimate website in their phishing website but loading via an external server==.
- By examining whether external objects (images, video) contained within a webpage are loaded from another domain, researchers have found that this feature can be effective in distinguishing between legitimate webpages and phishing pages
- Attackers often use meta HTML tags (`<meta>, <script>, <link>`) to load external content onto a phishing page

**Types of mitigation**
- stateful:
---
#### References
- [[(Sadqi, Maleh, 2022)]]
- [[(Tkachenko et al., 2024)]]
- [[(Spero, Biddle, 2021)]]
- [[(Fonseka, Pashenna, et al., 2023)]]
- [[(Chanakya, Spoorthi, et al., 2024)]]
- [[(Ahmed, Altamimi, et al., 2023)]]

Project SLR:
- [[(Onarlioglu, Buyukkayhan, et al., 2015)]]