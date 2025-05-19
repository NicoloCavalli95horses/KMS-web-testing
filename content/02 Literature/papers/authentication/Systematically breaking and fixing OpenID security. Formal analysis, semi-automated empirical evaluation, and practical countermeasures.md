---
ID: 2025-03-20T08:33:20.693Z
tags:
  - paper
  - authentication
  - projectSLR
  - OpenID
  - logicVulnerability
Rank: A*
Project:
  - SLR
---
Flaws in the OpenID protocol are discussed. A number of client-side attacks are still possible in OpenID-enabled websites ([[XSS (cross site scripting)]], [[CSRF (cross-site request forgery)]], [[session hijacking]])

## Context

[[OpenID]] is an identification protocol that allows users to log in to multiple sites using a single identity provider (e.g. Google, Facebook).

Even though [[OpenID]] is rapidly being adopted, its security has yet to be demonstrated.
- 2007: it was demonstrated that it is possible to log a user exploiting [[CSRF (cross-site request forgery)]]
- 2008: session swapping vulnerability found
- 2010: parameter forgery attack found (extension parameters can be forged when not HTTPS)

The paper aims at understanding the root weaknesses in the protocol and assessing the prevalence of those weaknesses

## Approach

- We formalized the [[OpenID]] 2.0 protocol in the High Level Protocol Specification Language (HLPSL) 
- then verified the model using the Automated Validation of Internet Security Protocols and Application (AVISPA) model checking engine

## Results

- lack of authenticity guarantee of the authentication request
- lack of contextual bindings between the authentication messages and the browser
- lack of integrity protection of the authentication request
- existing countermeasures (in 2012) do not address the root causes of the issue

---
#### References
- [[(Sun, Hawkey, et al., 2012)]]
