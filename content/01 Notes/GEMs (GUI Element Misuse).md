---
ID: 2025-01-13-09:43
tags:
  - "#definition"
  - GUI
  - testingTechniques
  - cyberSecurity
---
## Definition

GEMS (GUI Element Misuse) are a novel class of access control vulnerabilities in [[GUI (graphical user interface)]].
- GEMs arise when developers rely on and misuse UI elements attributes to implement [[access control]] checks
- GEMs can be used as a basis for privilege escalation exploits and general access control bypass (GEMs based privilege escalation)
- GEMs can be exploited by non-technical users

GUI is not a reliable mechanism to enforce access control decisions: [[ad hoc widgets]] and [[standard widgets]] can often be modified from outside of the application.

## Types of GEMs

According to the attributes/states "enabled", "visible", and "value", it is possible to classify the GEMs as follows:
- ==Unauthorized information disclosure==: the GUI manage read access to data by relying on "visibility" attribute. For instance, the text content is invisible or hidden, but still present in the GUI. Two types of GEMs can be distinguished: 
	- the content is hidden all the time except for the admin
	- the content is hidden after a user with higher privileges has interacted with the GUI
- ==Unauthorized information modification==: the GUI manage write access to data by relying on "enabled" or "visibility" attributes. For instance, an input box is disabled or invisible. Two categories may be considered depending on the impact of the GEMs:
	- *transient* modification are not permanent and last as long as the user's session
	- *persistent* modification are permanent and saved by the system
- ==Unauthorized callback execution==: the GUI manage callback/execution access by relying on "visibility" attribute. For instance, a disabled button that can execute a function that requires high-privileges

## GEMs Mining

A process to automatically reveal GEMs in a GUI. 

## References
[[(Mulliner, Robertson, Kirda, 2014)]]
