---
ID: 2025-04-30T09:52:24.845Z
tags:
  - paper
  - projectSLR
  - dataSecurity
  - authorization
  - socialNetworkSecurity
  - parameterTampering
Rank: A*
Project:
  - SLR
---
Collaboration with Facebook engineers to develop a tool that prevents malicious HTTP requests from accessing sensitive resources in large-scale web applications. Likely invariants are automatically identified from testing or pre-release stages to prevent authorization bugs. White-box approach that sits between back-end code and database

==Front-end software role in HTTP requests tampering==:
- *Bypass of client-side authorization checks*: sometimes the web server logic processes HTTP requests assuming information that depends on client-side authorization checks, which can be bypassed
- *API discovery*: legitimate use of the web application allows an attacker to understand the arguments of requests and subsequent responses. The threat model considers the presence of a regular user account, and a user who is logged in or logged out). This can be a manual trial and error process, or can be automated

## Context

In very large scale web applications (e.g., online social networks), many types of user interactions, with different levels of permissions coexists (user, group administrators, business, etc).
- Manually maintaining and enforcing [[RBAC (role-based access control)]] rules is complicated and human errors are possible, especially with time and resource constraints
- many [[parameter tampering]] opportunities are possible in a very large scale web application

**Authorization bugs**: can lead to identity theft, data leakage, business losses, brand reputation damage.
- auth bugs are among OWASP top 10 vulnerabilities and are very easy to exploit

**Contributions**
- A scalable distributed dynamic invariant detection system for highly interconnected data
- A two-step invariant generation mechanism and a set of design and implementation choices that allow the system to scale and to achieve negligible runtime overhead
- A set of domain-specific enforcement excuses that tackle the inherent susceptibility to false positives of invariant detection systems
- Results showing that dynamic invariant detection can effectively identify incorrect authorization checks and prevent attackers from exploiting them in a real-world OSN

## Approach

- Invariant Detector (IVD) provides a safety net against missing or incorrect authorization checks, supporting the developer's job
- It mines likely invariants from legitimate *database writes*, and blocks HTTP requests which break existing invariants
- IVD has a short learning period, usually covered by internal testing, [[dogfooding]], or a pre-release period, making it ready to act by the time a new product feature is made available to users
- IVD adapt automatically to the application growth, by continuously learning invariants with no manual intervention
- Our white-box approach infers invariants at the database layer, allowing more expressiveness and unprecedented scalability
- Bugs detected and blocked by IVD are possibilities for new authorization rules 

![[IVD_invariant_detector_facebook.png]]

**Writing and reading a [[graph database]]**
Database writes and reads can happen before or after an authorization check:
- in database *writes*, the authorization check is performed first, then the *write* command is executed
- in database *reads*, the *read* command is executed first, then the authorization check is performed (the property to be checked is contained in the object actually stored in the database)
- database *reads* are therefore several orders of magnitude more frequent than *writes*
- for this reasons, IVD focuses on *write* operations on a graph database

**Identification of invariant (Invariant Learning phase)**
IVD uses an unsupervised learning process to infer invariants:
- The process is based on ==observing the normal behavior== of the social network, in particular the database *writes* resulting from requests from legitimate users or testers
- IVD intercepts requests between the OSN and its database

**Request Sampler**
Samples a (configurable) number of requests for each "invariant category" (defined by endpoints, entity types, and operation). Records the request and local and global property values ​​at the time of the database request.
Samplers are distributed and stateless, but synchronize sample rates.
An external component periodically adjusts sample rates.

**Invariant Inference Engine**
The invariant inference engine looks for patterns in the data logged by the request sampler, by working offline. It breaks down logs by invariant category and analyzes each category separately:
- identifies sets of local and global properties that are always the same (equality invariants) or associations that always exist between related objects (association existence invariants) across all requests sampled for a given category
- The inference process is autonomous and resilient to workload changes or temporary failures

**Invariant Checker**
The invariant checker sits between a client and the database system, similarly to the request sampler. It runs synchronously on all database requests. For each database request:
- it retrieves the endpoint that made the request and the involved entity types to determine the invariant category for the request
- it then uses the category to get all relevant invariant predicates. The predicates are evaluated and any violations are logged
- if a ratified invariant is violated, the database request gets aborted and an application exception is thrown

## Evaluation

IVD was deployed at Facebook in 2015 and has since detected several critical vulnerabilities that have since been fixed
- average overhead of 1-2 milliseconds

## Limits

Few false negatives were found:
- IVD was not able to report a bug that allowed a user could delete a video posted by other users. Not enough data were available for the model to learn the right invariants in this scenario
- Too complex invariants are difficult to detect

---
#### References
- [[(Marinescu, Parry, et al., 2017)]]
