---
ID: 2025-03-31T09:10:09.151Z
tags:
  - paper
  - projectSLR
  - CSFR
  - clientDefense
  - crossDomainPolicy
Project:
  - SLR
---
A client-side protection mechanism for CSRF attacks. Implemented as a Firefox extension, provides an effective default protection that can be improved by incorporating application-specific knowledge from the server-side, with manual effort.

## Context

[[CSRF (cross-site request forgery)]] is a web application attack vector with which an attacker forces an unwitting user’s browser to perform actions on a third party website, possibly reusing all cached authentication credentials of that user.

In 2008 a CSRF vulnerability was discovered on the home banking website of ING Direct, ==which allowed an attacker to transfer funds from any user account to an account chosen by the attacker==

**Contributions**
1. client-side mitigation technique against CSRF that intercepts outgoing requests within the browser and enforces a configurable cross-domain policy
2. expressive, server-side cross-domain policies to improve the accuracy of client-side policy enforcement
3. proof-of-concept Firefox extension

### A new policy enforcement framework

A policy model determines what requests comprise cross-domain communication and what actions should be taken on cross-domain requests. A number of configuration are possible:
- **query the user**: ask the user for an appropriate action, by means of a dialog window (for debugging purposes mostly)
- **allow the request**: do not intervene
- **block the requests**: top the request from being executed
- **modify the request**: remove data from the request, such as cookies, cached credentials, and extra headers

To configure the best policy, additional information can be specified (server-side):
- origin of the document that spawned the request
- origin and resource that is being accessed by the request
- whether any parameters are being passed with the request
- whether any cookies or credentials are attached to the request

**Default policy**
The authors propose a default cross-domain client-side policy
- All requests originating from the same origin are allowed
- Cross-domain POST requests are blocked
- Cross-domain GET requests are allowed, without cookies and authorization headers

Policy implementation can be expressed as JSON files, for example:

```json
{
  "strictDomainEnforcement": true,
  "intendedCrossDomainInteraction": [
    {
      "blockHttpAuth": false,
      "blockCookies": false,
      "methods": ["*"],
      "cookieExceptions": [],
      "origins": [
        {
          "host": "www.ticket.com",
          "port": 443,
          "protocol": "https",
          "path": "/request.php"
        }
      ],
      "destinations": [
        {
          "port": 443,
          "protocol": "https",
          "path": "/confirm.php"
        }
      ]
  },
  {
    "blockHttpAuth": true,
    "blockCookies": true,
    "methods": ["getNoParam"],
    "cookieExceptions": ["language"],
    "origins": [
      {
        "host": "*"
      }
    ]
  }]
}
```


The policy is client-side by default, but can be improved/supported by other server-side declarations, eliminating false positives and enhancing the overall security:
- server-side declaration can relax or tighten the client-side policy, claiming which cross-domains are legitimate through high-detailed whitelists or blacklists

## Approach

The proposed policy can be implemented both as a server proxy or as a browser extension (client-side):
- The proxy has the advantage of being browser independent
- The browser extension is necessarily browser-dependent, but has the advantage of easy access to crucial contextual information

The authors proposal was implemented as a [[Firefox extension]]

### Limits

The server policy is expressed in JSON syntax, which poses a security challenge when evaluated with the javascript `eval` method.
- when the policy file contains javascript code, this code is executed in the browser with the privileges of the extension
- however, this can be mitigated by using the `nsIJson` interface for secure JSON processing

A small modification of Firefox engine was necessary to access `Authorization` and `Proxy-Authorization` headers from `nsIHTTPChannel`

Server-side specifications can fine-tune the client-side default policy, but have to be defined manually

### Evaluation

- a proof-of-concept application was developed to test 59 scenarios in which a CSRF may occur. The policy successful protected against a CSRF attack
- the Firefox plugin was also tested on 7 famous web application and no degradation of performance was found, except iGoogle

---
#### References
- [[(Maes, Heyman, et al., 2009)]]
- Server-side policy description: https://people.cs.kuleuven.be/~lieven.desmet/legacy/SecuCode2009-serverpolicy-abnf.txt
