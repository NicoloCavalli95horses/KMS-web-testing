---
ID: 2025-03-05-11:00
tags:
  - webinar
  - CI
  - CD
speaker:
  - Jolan Philippe
abstract: "Modern distributed systems, especially in Edge Computing and Cyber-Physical contexts, are increasingly managed by cross-functional and cross-geographical DevOps teams—referred to as cross-DevOps. In a such approach, reconfiguration must be decentralized: teams manage different parts of the system independently, without relying on central coordination or continuous connectivity.\rIn this presentation, I'll introduce Ballet, a declarative decentralized reconfiguration tool that automates the coordination of changes across cross-DevOps teams through distributed choreographies. During the planning phase, Ballet is able to detect and explain conflicts arising from concurrent reconfiguration goals. If no conflict is found, the reconfiguration plan is fully inferred. As a guarantee, we developed a model checker to formally verify that inferred plans will correctly terminate, providing formal certification of this assumption. Only then is the reconfiguration applied.\rThis talk illustrate Ballet's engine using a real-world scenario: the management of a multi-site OpenStack assembly."
---
Declarative reconfiguration
- specify the desired state
- automated reconfiguration
- adopted in IaC (infrastructure as code)

Different DevOps teams may work on large-scale multi-site infrastructure with different CI/CD configuration
