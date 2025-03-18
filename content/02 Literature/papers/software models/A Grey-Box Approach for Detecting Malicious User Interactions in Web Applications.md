---
ID: 2025-03-17T09:51:53.316Z
tags:
  - paper
  - userModels
  - behavioralModel
  - blackBoxTesting
  - whiteBoxTesting
  - greyBoxTesting
Project:
  - SLR
---
This research leverage a graph-based representation of known attack scenarios (sequences of URLs from syslogs) to train an algorithm to classify new user interactions as benign or malicious. Isomorphism in subgraph of the new interactions are verifyied 
## Context

Moder applications implement a multi-tier model involving ==multiple application providers that interface together== in order to supply a service. For example, an e-commerce may leverage on an authentication service and on a payment service, and a blog may leverage on a service to handle a comment or forum section.
- when there is a flow that combine multiple services, more subtle vulnerabilities may emerge
- these vulnerabilities are mostly managed manually

## Approach

A [[black-box testing]] approach offers good opportunities to detect flaws in a service workflow, but active (i) fuzzing techniques have a limited coverage, while (ii) passive learning techniques have usually a high false positive rate

[[white-box testing]] techniques instead can leverage the source code but (i) don't take into account service workflows or the user interactions with the [[GUI (graphical user interface)]], (ii) suffer from high false negatives rates

The approach of the authors is in between:
- we first propose a black-box approach that leverages a set of real world user interactions with the service, and further applies unsupervised clustering techniques such as [[co-clustering]] in order to infer a behavioral model for the service
- This model is represented through a behavior graph where nodes represent elementary user requests, and edges represent logical transitions between requests occuring within the same session with the service
- Then, our system leverages information about possible security flaws that may have been detected using standard white-box techniques
- These flaws are represented as attack graphs where nodes capture possible vulnerabilities and edges capture attack paths through the target service
- Our system uses the information in the attack graph in order to prune the behavior graph by eliminating from the model possible attacks that may have occurred during the learning phase
- Therefore we proceed with an intermediary step where we automatically convert the attack graph into an intermediate event graph (see [[ESG (event sequence graph)]])
- Finally, we prune the behavior model from possible attacks by applying [[standard graph matching]] and [[subgraph isomorphism]] to both behavior graph and the event graph

## Components of the model

**Behavior graph generator**
- a set of real world user interactions are processed. These are `http requests`, or access logs
- unsupervised learning is applied to infer behavior classes
- common pattern are associated with observable features that are further represented into a statistical model. ==This model captures all user behaviors when they connect to the service. The different actions are mapped as a set of URLs==
- the output of this module is a set of different user behaviors

**Attack graph mediator**
- in order to separate benign and malicious behaviors, our system leverages a semi-supervised learning approach, using ==ground truth attack scenarios ==represented within an attack graph
- this module "translate" the ground truth attack graph into an intermediate event graph that is usable by the next module

**Behavior graph pruning**
This module applies sub-graph isomorphism to both the event graph and the user behavior graph. The purpose of this module is:
- identifying and isolating malicious behaviors and attacks that may have occurred during the learning phase, and that are similar to known attack scenarios represented in the previous event graph
- identifying all benign user interactions with the service, and associates them with different behavior classes
- unknown pattern are classified as new possible attack behavior

> [!error] User interactions as a sequence of URLs
> URLs are used as a way to represent user behaviors

## Testing the model

- a case study was presented. The authors collaborated with a service provider and collected data over a period of six weeks, including 33.7 GB of data in **syslog** format that consists of 1.3 million active user sessions
- each log includes: timestamp, anonymized user identity and remote IP address, URL of the service
- ==the service provider informed the authors of certain malicious patterns (user interaction) that they knew could be exploited. This was the output of a risk analysis==. These malicious interactions could lead to [[CSRF (cross-site request forgery)]], cookie theft, identity theft
- this information were then mapped into a set of malicious attack graph paths, used then in the **attack graph mediator** (see attack examples)
- the new interactions were therefore classified into benign or malicious, given the ground truth

## Attack examples

**Video Game Purchase Fraud**
- an attacker proceeds first by executing a cookie hijack and then impersonates the identity of another victim user
- after connecting to the service, the attacker is able to edit the user info, and then the attacker changes his email address
- Later, the attacker commands a game, and receives the confirmation payment. By exploiting the vulnerability of the service, the attacker will let the victim user be charged for the game, and delivered to the new email address

**Phishing with IP spoofing**
- The attacker connects to the WiFi of the victim user, and behaves as the legitimate user (*IP spoofing*)
- Then he proceeds with an email [[phishing]] exploit
- In this scenario, the attacker connects to the service, may access all the account details for the victim user, and may then send as many phishing emails as needed on behalf of the victim user account

**Media access without paying**
- The attacker connects to the media service, and he exploits a vulnerability in the application that allows him to access from a media content to another without access to the billing service

## Results

32 classes of real user behavior were identified. The most interesting ones includes:

- **Class 1**: This class behavior represents user interactions when connecting to the billing service
- **Class 2:** This class behavior captures the workflow for the application that provides access to users’ calling history and their internet consumption
- **Class 3**: This class behavior represents the way users access to the email service, including their ability to send any number of emails (counter)
- **Class 4**: This class behavior depicts the way users access to the media service, that allows them to pay when accessing contents
- **Class 5:** This class behavior represents the flow used to buy a new phone

The authors were ==able to identify the malicious interactions, and even new malicious behavior, by recognizing same or similar behavioral patterns that could lead to the same outcomes== (isomorphic sub graphs)

---
#### References
- [[(Ben Jaballah, Kheir, et al., 2016)]]
