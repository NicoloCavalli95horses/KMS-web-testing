---
ID: 2024-12-16-14:17
tags:
  - definition
  - cyberSecurity
---
## Definition

Content spoofing, also referred to as *content injection* (similar but not equal to [[code-injection]]), *arbitrary text injection* or *virtual defacement*, is an attack targeting a user made possible by an injection vulnerability in a web application.

When an application does not properly handle user input, an attacker can *supply* *content* to a web application, typically via a parameter value, that is reflected back to the user. Therefore, the user sees a ==modified page under the context of the trusted [[domain]]==
- This attack is typically used in conjunction to [[social engineering]] because the attack is exploiting a code-based vulnerability and a user’s trust.

The impact of a content spoofing attack strongly depends on the context:
- user-supplied information that is reflected in a way that is correctly escaped and clearly visually marked, such as in [[error]] messages, may be harmless
- On the other hand, input that is not clearly visually distinguished from the ‘valid’ content may be used in [[social engineering]] attacks, and when the input is not correctly escaped it may even contain ‘active’ components, allowing attacks similar to [[XSS (cross site scripting)]]

## References
https://owasp.org/www-community/attacks/Content_Spoofing