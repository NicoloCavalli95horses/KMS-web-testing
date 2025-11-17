---
ID: 2025-10-03T06:33:23.930Z
tags:
  - paper
  - REST
  - BAC
  - BOLA
Rank: C
---
## Context

In REST, data and functionality are considered resources and are accessed and manipulated by using a uniform and well defined set of rules. REST is constrained to a client/server architecture (the client is the one requesting the resources, while the server has the resources itself) and is designed to use a stateless communication protocol (typically, HTTP).

RESTful web services expose their services to the Internet using Application Programming Interfaces (called RESTful or REST APIs).

Today, most REST APIs are described with OpenAPI, which defines a standard language-independent interface for RESTful APIs. Many frameworks for building REST APIs (such as Falcon, Flask, or Tornado, to name a few) include OpenAPI support.

**Contributions**
- we investigate the automatic transformation of a REST API specified by OpenAPI to Petri nets, which is a mathematical model commonly used to represent distributed, concurrent, or parallel systems
- obtaining a formal model as a Petri net ==allows us to take advantage of all existing Petri net analysis techniques and detect possible security risks== directly in the specification
- we provide a tool, dubbed Links2CPN, that automatically performs the model transformation. We apply our tool on different case studies of vulnerable web applications to show its applicability
## Background

OpenAPI specification (OAS) defines a widely accepted, vendor-independent, language-independent open specification for the description of RESTful APIs

Colored [[Petri nets ]]are a well-known formalism for the design and analysis of concurrent systems. CPNs are supported by CPN tools, which is a tool that allows us to easily create, edit, simulate, and analyze CPNs.

[[BOLA (Broken Object Level Authorization)]]: it is an [[IDOR (Insecure Direct Object Reference)]] on a REST api. An attacker sends a request to a `/basket/{id}` endpoint with a different `id` than the one given by the server in a previous request. For example, if the client requests `/basket/2`, the server will respond with the another user’s shopping basket information.
## Approach

Links2CPN is a Python3-based tool that analyzes information system event logs and detects BOLA attacks using our methodology

---
#### References
- [[(Santos Filho, Rodriguez, et al., 2025)]]
