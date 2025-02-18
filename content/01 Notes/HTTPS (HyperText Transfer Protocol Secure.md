---
ID: 2025-02-18-14:04
tags:
  - "#definition"
  - cyberSecurity
---
## Definition

HTTPS is a hypertext transfer protocol that provides a secure
connection between the user’s browser and the server.
It uses encryption to protect the privacy of data transmitted between the browser and the server and prevents [[MiTM (man-in-the-middle) attack]]

**How it works**
- The server provides a digital certificate that contains information about its identification and a public key for data encryption
- The browser checks the validity of the certificate and makes sure that it was issued by a trusted certification authority (e.g. Google, Facebook etc)
- After verifying the certificate, the browser and the server establish a secure connection through which the data is transmitted
- This ensures the confidentiality and integrity of the data and protects against “interception and substitution” attacks

### Advantages

The advantages of using HTTPS include:
- protection against eavesdropping and data modification
- increasing user confidence in a web resource (modern browsers empathize the trustfulness of a web page with a green lock in the URL bar)
- improving search engine rankings (since HTTPS is a ranking factor for Google)

### Limitations 

The implementation of HTTPS:
- requires additional costs for certificates
- may require additional server configuration
- may affect the performance of the web application due to the additional burden on data encryption and decryption

---
#### References
- [[(Tkachenko et al., 2024)]]