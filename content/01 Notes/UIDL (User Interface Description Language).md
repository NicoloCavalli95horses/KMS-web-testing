---
ID: 2024-12-04-11:11
tags:
  - definition
  - softwareEngineering
  - GUI
---
## Definition

A User Interface Description Language (UIDL) is a structured, abstract language used to define the layout, behavior, and structure of a [[GUI (graphical user interface)]].
UIDL typically describes interfaces in a platform-independent way, allowing developers to generate interfaces for various devices and platforms from a single definition.

**Key Features of UIDL:**
- ==Abstract Representation==: focuses on what the UI should do, not how it is implemented
- ==Platform Independence==: enables deployment on multiple devices or systems
- ==Interoperability==: acts as a bridge between designers and developers

**JSON-based UIDL Example**

```json
{
  "type": "container",
  "style": {
    "flexDirection": "column",
    "alignItems": "center",
    "padding": "20px"
  },
  "children": [
    {
      "type": "text",
      "value": "Login",
      "style": {
        "fontSize": "24px",
        "fontWeight": "bold",
        "marginBottom": "20px"
      }
    },
    {
      "type": "input",
      "properties": {
        "placeholder": "Username",
        "name": "username"
      },
      "style": {
        "marginBottom": "10px",
        "width": "200px",
        "padding": "8px"
      }
    },
    {
      "type": "button",
      "value": "Submit",
      "action": "submitForm",
      "style": {
        "backgroundColor": "#007BFF",
        "color": "#FFF",
        "padding": "10px 20px",
        "borderRadius": "5px",
        "cursor": "pointer"
      }
    }
  ]
}

```
## References
[[(Lelli, Blouin, Baudry, 2015b)]]
https://www.w3.org/2004/02/mmi-workshop/vanderdonckt-louvain.pdf