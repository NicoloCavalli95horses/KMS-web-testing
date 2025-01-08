---
ID: 2025-01-08-15:29
tags:
  - "#definition"
  - testingTechniques
  - ripper
  - eventModel
---
## Definition

A GUI ripper is an automated tool used in the context of software testing, especially for [[GUI (graphical user interface)]] Its purpose is to =="extract" the structure and behavior of an application's GUI.==

**Why is it called a "ripper"?**
The term "ripper" comes from the idea of ​​"ripping" or "extracting" (to rip).
In A GUI ripper automatically explores a graphical application, analyzing the layout and relationships between GUI components, as well as the events that may be generated.

A GUI ripper typically:
- **Automatically explores the GUI**: the application is launched and the ripper interacts with the GUI as a human user would, clicking buttons, opening menus, etc.
- **Identify** [[standard widgets]] or [[ad hoc widgets]]: it analyzes the GUI components (buttons, text boxes, windows, etc.) and detects their properties.
- **Collects associated events**: it detects the events that each widget can generate (for example, a button click or text input).
- **Builds a model**: it creates a formal representation of the GUI structure and its possible transitions. This representation can take the form of a [[EFG (event flow graph)]] and [[integration tree]]

GUI rippers exist for different GUI applications: desktop, mobile or even web applications. For each different context, the process of exploring the widgets and collecting the events may vary, but typically, it is not necessary to access the source code.

### How widgets are discovered without the source code access?

- OS such as Windows, macOS and Android expose APIs that allow the GUI structure to be analyzed
- In environment like Swing, Java, Qt or GTK, APIs are available to analyse widgets and their events
- A real interaction with the [[SUT (system under test)]] can be used to discover hidden components or to confirm certain events
- In web based application, the DOM can analyzed directly
- **Screen scraping**: some GUI rippers take screenshots of the GUI and use visual recognition algorithms (e.g., [[OCR (optical character recognition)]]) to recognize widgets

## References
[[ref_gui_ripping_reverse_engineering_of_gui]]