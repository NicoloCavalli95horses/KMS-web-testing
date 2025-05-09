---
ID: 2025-04-07T12:40:03.105Z
tags:
  - paper
  - projectSLR
  - businessFlowTampering
  - GUI
  - authentication
  - HCI
Rank: B
Project:
  - SLR
---
## Context

Authentication and authorization of web applications are continuously targeted by attackers to get unauthorized accesses. Efforts are made in detecting and finding input validation (see [[string validation]]).

In contrast, less attention is paid to [[BFT (business flow tampering)]] and [[logic vulnerability]]

The main difference between logic flaws and input validation flaws is their exploits. To exploit an ==input validation flaw the attackers mainly leverage on coding mistakes==, such as a lack of input variables control, to then inject malicious code (e.g., [[SQLIA (SQL injection attack)]], [[XSS (cross site scripting)]]).
A ==logic flaw exploit ==requires the attacker to find out ==a defect in the way the application makes decisions==.

**Definition of logic flaws in authentication**
*Logic flaws are ways of using the legitimate authentication processing flow of a web-based application in a way that it results with negative impacts either on the users or the organization.*

**Contribution**
- empirical study to assess the presence of logic flaws in authentication processes
- recommendation on designing the user’s authentication procedure, considering human factors and design errors

## Approach

- 9 well-known web application were analyzed
- a set of recommendations is proposed

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

## Recommendation for designing an authentication process

1. **Credential uniqueness assurance**. It is highly recommended to issue one credential per identity
2. **Identity verification assurance**. The registration phase shall ensure that the provided identity "objectively" exists and is verified correctly. For example, always verify that an input email exists and belongs to the entity who has provided it
3. **Credential recovery/reset providing assurance**. This usability requirement comes to enforce the procedure by allowing the entity to give sufficient information for future credential reset and recovery (e.g., recovery by e-mail, secret question).
4. **Path equivalence assurance**. Path equivalence means that every path that leads to a registration should at least match the minimum required security level ==(security levels can be assessed according to NIST Recommendations)==
5. **Interaction frequency limit assurance**. Limiting the number of attempts in a login form defends against brute forcing attacks. A malicious entity, however, may abuse that functionality to perform [[DoS (Denial of Service)]] attacks. The number of attempts available should be carefully designed
6. **Path equivalence assurance**. Web applications may use different means to authenticate an entity (e.g., multi-factor authentication, biometrics). Path equivalence means that the security of the authentication process is the minimum security level of the provided means. So that, designers shall fix the required security level and ensure that all other existing paths support at least that minimum security level.
7. **Entity authentication assurance**. Remote devices such as a mobile phone can be used as second authentication factor and allows the validation of the authentication procedure remotely
8. **Active session limitation assurance**. It is a good practice to limit the lifetime of an active session
9. **Entity authentication assurance**. Sensitive actions such as identity modification (e.g., password modification) shall require a new instant authentication
10. **Deadlock avoidance assurance**. The legitimate user should be always able to update or recover its own credential.

---

See also: [[behavioral biometrics analysis]]
#### References
- [[(Ndiaye, Barais, et al., 2019)]]
