---
ID: 2026-01-07T07:39:42.841Z
tags:
  - paper
  - BAC
  - authorization
  - webApplication
Rank: A*
---
## Context

BAC issues are the most prevalent in the web. Nonetheless, the ability to automatically find this vulnerabilities is limited by ethical and technical reasons. The majority of the limited research into this space has been conducted on open-source applications.

**Hantke et al.**: ethical research in the context of BACs can be done if no third-party data is leaked or modified

**Contributions**
- We conduct a thorough analysis and ==discussion of research ethics== when scanning for server-side vulnerabilities, highlighting how to minimize risks and how to increase benefits to the entire ecosystem
- We design and implement the Variable Swapping Framework for conducting ethically sound access control vulnerability detection in the wild. Code available at github.com/Saiid2001/vsf
- We report on the results of our experiments and highlight that out of the 100 sites we tested, 7 are susceptible to at least one BAC

Interesting BAC scenarios:
- ==only an initial request is checked== for authorization. The attacker can exploit all the subsequent ones
- ==long hard-to-guess ID may be used== to reference unprotected private objects

Instagram (2019) allowed an attacker to access phone numbers and user details by abusing a contact import API endpoint

**Threat model**
The attacker has their own account and abuses AC policies to gain access to or manipulate a victim user’s resources by altering request parameters
## The Variable Swapping Framework (VSF)

- to avoid compromising external users, we target users we control, meaning we need at least 2 users per website
- to generate probing requests ethically, we collect pairs of requests from two fake users logged in to two browsers - a leader browser controlled by the researcher who performs usual user interactions and a follower browser that mirrors actions from the leader
- We introduce an automated pipeline to match request pairs and extract AC parameters (user credentials, resource identifiers, etc.)
- The VSF then constructs probing requests by only swapping the resource identifiers between requests while keeping the same user credentials

The researcher controls one browser, labeled leader, and navigates the website with the first user account. A second browser, labeled follower, automatically mirrors each interaction (clicking, filling inputs, navigating URLs) produced by the leader, but with the second user account logged in. Both the account have the same level of privilege.

## Evaluation

The vulnerabilities are manually confirmed by inspecting the GUI. Automated match of responses body was done when applicable (no POST requests)

## Results

Our exploit analysis concludes that 19 out of 30 BACs found are exploitable vulnerabilities with tangible harms:
- leaking private user information
- partial credential hijacking
- user resource manipulations

The variance in how it reports forbidden access varies widely between sites, making it harder to automate the analysis, e.g., returning a 200 code response but containing an error JSON object in the body.

## Limits

- manual creation of accounts in websites
- manual intervention is justified with ethical reasons
- only horizontal BACs are addressed
- manually crafted allowlist and blocklist of parameter names and values to be used in the swapping phase to generate endpoints
- manual candidate validation
- the mirroring idea is interesting but if the GUI differs from the two accounts the *follower* account cannot perform the same actions of the *leader*
- unexplored interactions due to manual effort and ethical reasons
- VSF scaling limits
- VSF does not handle vertical escalation: all the users have the same role

---
#### References
- [[(Chehade, Hantke, et al., 2025)]]
