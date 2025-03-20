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

**Why people still fall for phishing?**
The average user is unable to distinguish malicious web pages from legitimate ones and does not have enough technical information about URLs. Therefore:
- does not know which URL to trust (for example: embedded in e-mail text, in a displayed tooltip, in the status bar)
- does not see the whole URL of a web page, due to tiny URL services
- clicks on links without checking, for an habituation effect

**A matter of bad UI design for cyber-security**
The role of the user interface design is not negligible [[(Spero, Biddle, 2021)]]
- a UI that prioritize the "primary tasks" and does not stress cyber-security features enough can lead to an incorrect [[mental model]] of the software, which can lead to an incorrect though (e.g., this link is legitimate), which can lead to an incorrect and unsafe behavior (e.g. clicking on the phishing link)

Often the title of the phishing website mimics a legitimate one (see [[typosquatting]]) or an IP address is used to mask part of the URL address (for instance, `http://192.168.0.1/paypal/login.php` instead of `“https://www.paypal.com/login.php` ) [[(Fonseka, Pashenna, et al., 2023)]]

### Examples

Attackers may study the email communications of an employee for a while, and then at some opportune moment send an email spoofing the identity of a trusted other asking for a transfer of funds, which will be deposited into the attacker’s account

### Mitigation techniques [[(Fonseka, Pashenna, et al., 2023)]]

Malicious URLs often
- Are longer than legitimate one
- Use special or unusual characters (`@, /, \`)
- Contain irrelevant information
- The characters `//` may be exploited to perform a [[redirect attack]]
- The src of the favicon image can be an important things to analyze in order to detect a malicious website. ==Attackers can use a favicon of a legitimate website in their phishing website but loading via an external server==.
- By examining whether external objects (images, video) contained within a webpage are loaded from another domain, researchers have found that this feature can be effective in distinguishing between legitimate webpages and phishing pages
- Attackers often use meta HTML tags (`<meta>, <script>, <link>`) to load external content onto a phishing page

---
#### References
- [[(Sadqi, Maleh, 2022)]]
- [[(Tkachenko et al., 2024)]]
- [[(Spero, Biddle, 2021)]]
- [[(Fonseka, Pashenna, et al., 2023)]]