---
ID: 2025-01-13-09:36
tags:
  - paper
  - gems
  - gui
---
## Abstract

[[GUI (graphical user interface)]] are often rich in [[standard widgets]] and [[ad hoc widgets]]. This visual elements are characterized by a set of properties (status, visibility, writability, etc). These properties, if bad implemented, can be misused by the used to get access to resources or information that should not be available.

[[GEMs (GUI Element Misuse)]]: a novel class of access control vulnerabilities on GUIs.
- this GEMs have been classified
- a general algorithm have been used to automatically identify and confirm the presence of GEMs (GEM Miner)
- GEM Miner has been evaluated on three complex real-world GUI-based applications

## Introduction

In a typical GUI, each widget can be pro grammatically hidden, disabled or made read-only by manipulating the state of the widget itself.
- disabling elements is useful for the developer, in order not to create a new UI for each user actions, and for the user, to understand which actions are possible and which not.

> [!WARNING]
> Often developers are tempted to use widget attributes as an access control mechanism. For example, a textarea might be presented as disabled, for the user with no permission. Relying on these attributes is very risky, because several techniques can be used to force a different widget state

- ==WinSpy++==, for instance, can be used to select, view and modify attributes of any window in a Windows Application
- Java Swing, GTK has tools to externally modify the GUI behavior

## References
[[ref_hidden_gems_auto_discovery]]