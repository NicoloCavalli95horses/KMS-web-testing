---
ID: 2025-01-13-09:36
tags:
  - paper
  - gems
  - gui
  - cyberSecurity
  - accessControl
  - rbac
---
## Abstract

[[GUI (graphical user interface)]] are often rich in [[standard widgets]] and [[ad hoc widgets]]. This visual elements are characterized by a set of properties (status, visibility, writability, etc). These properties, if bad implemented, can be misused by attackers to get access to resources or information that should not be available, in a [[RBAC (role-based access control)]] system.

[[GEMs (GUI Element Misuse)]]: a novel class of access control vulnerabilities on GUIs.
- different types of GEMs can be distinguished based on the fact that information access, information editing or callback execution is permitted
- a general algorithm have been used to automatically identify and confirm the presence of GEMs (GEM Miner)
- GEM Miner has been evaluated on three complex real-world GUI-based applications

## Main concepts

In a typical GUI, each widget can be programmatically hidden, disabled or made read-only by manipulating the state of the widget itself.
- disabling elements is useful for the developer, in order not to create a new UI for each user actions, and for the user, to understand which actions are possible and which not.

Often developers are tempted to *use widget attributes as an access control mechanism.* 
- For example, a textarea might be presented as disabled, for the user with no permission.

==Relying on these attributes is very risky, because several techniques can be used to force a different widget state==
- ==WinSpy++==, for instance, can be used to select, view and modify attributes of any window in a Windows Application
- Java Swing, GTK has tools to externally modify the GUI behavior

These GEMs can be automatically detected by a GEMs miner.

**Detecting GEMs**
1. **Application seeding**: a number of test scenario are created (for example, users or roles at distinct privilege levels). These step is application dependent because you need to know how the application work. ==At least two distinct levels of privilege have to be found in order for a GEM to be identified.==
 2. **UI exploration**: semi-automatic exploration of the GUI of the [[SUT (system under test)]] to get the space of possible UI states. ==Reachable widgets and their states are extracted==
3. **GEM candidate identification**: a collection of UI states is analyzed to identify candidate access control vulnerabilities. The attributes "enabled", "visible" and "value" are checked. Different paths for users with different privileged are tested to compare the different reachable states. ==Discrepancies between attributes for the same widget at two different privilege levels suggest the presence of a GEM.==
4. **GEM checking**: the candidates and the path through the GUI to reach them is analyzed to confirm their presence

The GEM miner targets Microsoft Windows platform
- it has been tested on two Win32 API-based applications and one .NET application
- multiple GEMs have been found

> [!WARNING]
Widgets should always be destroyed after they are no longer needed. In a client/server setting, access control must be implemented on the server side

## Related work

Concepts such as vulnerability or [[security testing]], [[fuzzling]] and GUI testing are well-known in SE.
- In web application, [[black-box testing]] techniques are typically used to look for [[XSS (cross site scripting)]] vulnerabilities
- client side parameter tampering is not new, but automatically detect GUI misuse that lead to privilege escalation it is

## References
[[ref_hidden_gems_auto_discovery]]