---
ID: 2025-04-03T08:58:58.491Z
tags:
  - paper
  - projectSLR
  - behavioralModel
  - biometric
  - behavioralBiometric
  - userModels
  - authentication
Project:
  - SLR
---
Authentication enhancement through behavioral biometric measurement to mitigate session hijacking attack
## Context

Many authentication schemes were proposed over the years; as of today, the most used authentication scheme is still username and password.

Even with advanced system like 2FA (two factor authentication), the core idea it is still the same: ==the user is authenticated only once==, and if his credentials are stolen nothing will stop the attacker from impersonating the user.

Therefore, a continuous authentication scheme is necessary to keep verifying user’s behavior throughout the session.

Traditional mouse/touch metrics include:
- movement coordinates,
- timestamps,
- scrolling,
- mouse press or release,
- touch pressure and size
- movement velocity
- curvature,
- number of clicks,
- number of double clicks,
- ...

On this paper the focus is on *user continuous verification using pointing device movements.*

## Approach

The authors propose user continuous verification analyzing contextual sequences (how the user browses a website)

---
#### References
- [[(Levi, Hazan, et al., 2019)]]
