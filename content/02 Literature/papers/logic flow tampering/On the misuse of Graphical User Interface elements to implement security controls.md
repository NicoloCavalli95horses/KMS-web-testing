---
ID: 2025-01-13-13:53
tags:
  - paper
  - gems
  - cyberSecurity
  - accessControl
  - rbac
---
This papers appears to be a shorter version of [[(Mulliner, Robertson, Kirda, 2014)]]

## Abstract

[[GUI (graphical user interface)]] contain a number of common visual elements widgets such as buttons, textfields, and lists, and GUIs typically provide the ability to change attributes on these widgets to control their visibility and behavior. 
- While these attributes are extremely useful to provide visual cues to users to guide them through an application’s GUI, they can also be misused for purposes they were not intended
- in applications with multiple privileges levels, GUI element attributes may be misused to obtain access to protected resources, execute functions without permissions, etc

In this paper, a new method to detect misuse of GUI elements is presented

**Access control and GUIs**
Enforcing [[access control]] is a basic requirement of any application that includes users with different level of authorizations (see [[RBAC (role-based access control)]]), but relying on a widget's attribute (visibility, value, enable) it is not safe.

Windows, Java Swing, GTK and Android all provide tools to externally modify the GUI of the [[SUT (system under test)]].

**Types of GEMs**
Based on what the user can do by exploiting the [[GEMs (GUI Element Misuse)]], we can identify: unauthorized information disclosure/modification and unauthorized callback execution, with transient or permanent effects.

**GEM detection**
1) application seeding
2) UI exploration
3) GEM candidate identification
4) GEM checking

---
## References
[[(Mulliner, Robertson, Kirda, 2017)]]