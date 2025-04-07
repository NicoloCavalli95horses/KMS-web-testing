---
ID: 2025-04-07T12:40:03.105Z
tags:
  - paper
  - projectSLR
  - businessFlowTampering
Project:
  - SLR
---
## Context

Authentication and authorization of web applications are continuously targeted by attackers to get unauthorized accesses. Efforts are made in detecting and finding input validation (see [[string validation]]).

In contrast, less attention is paid to [[BFT (business flow tampering)]]. 

The main difference between logic flaws and input validation flaws is their exploits. To exploit an ==input validation flaw the attackers mainly leverage on coding mistakes==, such as a lack of input variables control, to then inject malicious code (e.g., [[SQLIA (SQL injection attack)]], [[XSS (cross site scripting)]]).
A ==logic flaw exploit ==requires the attacker to find out ==a defect in the way the application makes decisions==.

**Definition of logic flaws in authentication**
*Logic flaws are ways of using the legitimate authentication processing flow of a web-based application in a way that it results with negative impacts either on the users or the organization.*

**Contribution**
- empirical study to assess the presence of logic flaws in authentication processes
- recommendation on designing the user’s authentication procedure, considering human factors and design errors

## Approach

- 9 well-known web application were analyzed
- a set of recommendations is build on the analysis

## Results

**Registration logic flaws**
- **Improper Identity management**: the application failed to properly manage credential for a given identity. For example, ==two accounts may be bounded to the same identity (e.g., email)==
- **Insufficient identity verification**: the application does not sufficiently verify and ensure that the given identity information "objectively" exists and pertains to the claimant. For example, ==an email should be verified== by double-checking with a phone number.
- **Recovery / Reset deadlock**: the way the registration is powered does not provide sufficient information to lately permit recovery or reset credentials.
- **Weak path (security level)**: the registration phase contains multiple paths with different security level.

**Authentication logic flaws**
- **Improper control of interaction frequency**: the authentication mechanism does not support or improperly limits the number of attempts to get authenticated. ==Controlling the frequency of user interactions in the authentication process avoids attacks such as brute force==
- **Insufficient entity authentication and verification**: the authentication mechanism does not guaranty the entity’s authenticity and non-repudiation. For example, ==the password reset and the update of the personal identity are performed without any re-authentication of the current user==. This can lead to user substitution
- **Weak path (security level)**: the authentication mechanism supports multiple paths with different security level. For example, ==the reset link send per email does not check if the email is verified first.==

**Recovery/reset logic flaws**
- **Weak recovery process**: the registration mechanism suffers from a weak credential recovery. For example, a recovery email is send without (i) checking the validity of the email (ii) using secret question or (iii) OTP
- **Insufficient entity authentication**: the application does not sufficiently authenticate the current entity while recovering or resetting a credential

---
#### References
- [[(Ndiaye, Barais, et al., 2019)]]
