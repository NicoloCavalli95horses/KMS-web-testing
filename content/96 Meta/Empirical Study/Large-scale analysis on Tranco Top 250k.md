---
ID: 2025-09-15-14:16
tags:
  - "#definition"
  - INRIA
---
## Prerequisites

- having a Renater permission to alert the Internet Provider about anomalous web activity
	- ask Michel Hurfin michel.hurfin@inria.fr, put Alexandre in copy ("Alexandre Sanchez" <alexandre.sanchez@inria.fr>; )
	- specify the study goals and how long will the study last (see Samuel template)
		- recommended minimum 6 months, considering the experiment may need to be replicated multiple times, or modified to accommodate reviewers comments
		- recommended starting date: February 2026

## Experiment venue

- LHS (Laboratoire de Haute Sécurité): https://www.lhs-rennes.fr/
- virtual machine (from 30 to 50 available to parallelize computation)
- the infrastructure is isolated, in terms of network, and protected by firewalls
- in LHS is it possible to do dynamic malware analysis and to test unknown and possibly dangerous domains at scale

## Technical requirements

- setup a virtual machine enabling the execution of the containerize software (define an [[ansible]] file)