---
ID: 2025-01-27-10:13
tags:
  - inputValidation
  - cyberSecurity
  - clientSideAttacks
  - GUI
  - JavaScript
---
### Semantic input validation

**Data type conversion**
Validate an input by converting its type (e.g., "1" to 1)

**Data format validation**
Includes verification that data is presented in the right pattern (e.g., correcting wrong dates, wrong phone numbers, email, URLs)

**Inter-value constraint validation**
There are often relationship among input value than have to be checked (e.g., checking that both the credit card code and the expiration date are correct)

### Syntactic input validation

**Build-in length restriction**
Text boxes can include a `maxlength` attribute to restrict the length of text

**Build-in value restriction**
Native tags like checkbox and radio boxes restrict the user to a certain predefined set of inputs (e.g., no more than a selection can be accepted)

**Build-in data access**
Cookies and hidden form fields contains data that are accessible to the user. These fields need checking

> [!WARNING] HTTP REFERER header
> HTTP provides the REFERER header to help detecting a tampered form: the original URL is included. This is often not enough because even this piece of information in the header can be tampered

**Build-in input field selection**
Dropdowns can be used to limit the freedom of choice of the user.

**Build-in control flow restriction**
A fixed URL can be defined by the `action` attribute fixing the target of the HTTP request. Checking URL tampering is important.

### General techniques

![[illegal_characters.png]]

- **Filters**: illegal or special characters should be filtered out
- **Numeric limits**: numeric input should always be clamped between a min and a max value
- **Email addresses**: always ensure that the email address is valid
- **URLs**: always ensure that URLs provided as input are valid and that the destination exist. See [[URL validation]]
-  [[RegEx (Regular Expression)]]: use RegEx to sanitize the input


---
## References

- [[(Offutt, Wu, Du, 2004)]]
- [[(Viticchie, Basile, Avancini, et al., 2016)]]
- Included in literature review, by [[(Onukrane, Skrodelis, et al., 2023)]]
