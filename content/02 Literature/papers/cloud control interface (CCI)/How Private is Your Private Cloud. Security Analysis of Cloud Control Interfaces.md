---
ID: 2025-03-19T09:18:07.851Z
tags:
  - paper
  - XSS
  - CSFR
  - IaaS
  - CloudSecurity
Project:
  - SLR
---
## Context

An IaaS cloud provides the consumer with full control over the (virtualized) infrastructure to use. A consumer has the choice between:
- (virtual) hardware configurations
- operating systems (bundled into a Virtual Machine, VM)
- network configurations
- storage systems

Even if all other components of a cloud system (VMs, virtual networks, persistent storage) are protected by perimeter security systems (network separation, firewalls, IDS), the ==Cloud Control Interface necessarily must be exposed to the outside world==, since it must allow for “on-demand self-service”
## Approach



---
#### References
- [[(Felsch, Heiderich, et al., 2015)]]