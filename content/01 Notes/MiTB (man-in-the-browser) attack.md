## Definition

Similarly to [[MiTM (man-in-the-middle) attack]], a Man-in-the-Browser attack uses malicious software (malware) to intercept and manipulate communication between a user and their web browser.
- Typically, a [[trojan horse]] program infects a user's browser and then silently captures sensitive information like login credentials and financial details

MiTB attacks can be done through:
- **malicious add-ons (browser plugins)**: browsers' plugins have often access to security-critical APIs, which are often not accessible from web application scripts. An attacker could exploit a browser plugin to listen or modify the data before being encrypted by the HTTPS protocol
- **browser [[cache poisoning]]**: modern browsers rely heavily on their inner cache to store user information. An attacker could intercept and modify the cache and make the browser to execute illegitimate behavior ([[XSS (cross site scripting)]], [[redirect attack]] )


---
#### References
- [[(Sadqi, Maleh, 2022)]]
- https://portswigger.net/web-security/web-cache-poisoning