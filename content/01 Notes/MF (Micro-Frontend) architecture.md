---
ID: "2025-03-06-10:44"
tags:
  - "#definition"
---
## Definition

Micro-Frontends enable to decompose the front-end into individual and semi independent micro applications, separating the business logic from the frontend, and creating ==independent services that interact together==

Micro-Frontends originated from the evolution of software architectures, and share the main principles, benefits, and issues of [[micro-service architecture]]:
- they are modeled around business domains, hiding implementation details between them
- Each team should own its service (back-end) and the related frontend, enabling to decentralize decisions and deploy independently

### How it works

- in micro-frontend each team develops the full stack, from the database to the back-end to the interface
- there are no shared states or global variables between each application
- it can increase the application performance

### Types of micro-frontends

**Horizontal**: multiple micro-frontends are present in the same view (the approach of the SPA application)
- often used with catalogs or e-commerce websites
- often composed on the server-side combining HTML fragments

**Vertical**: a single micro-frontend is used per view, either exported as HTML or JS file
- often used with more interactive project such as streaming platform
- often composed using an application shell that loads every micro-frontend once per time

### How to handle communication between components

- Web storage ([[IndexedDB]], [[LocalStorage]], [[SessionStorage]]) or [[cookie]] can be used as client sides approaches to manage the communication
- Query string (URL) data can be used as a reference
- Event bus (event emitter) system

### Implementation

- **Application Shell**: an application shell is a container of entire SPA or single HTML page. It is basically an HTML with some JS to load other JS files
- **iframes** can be used to compose the interface (SAP and Spotify for desktop application). They are useful to create independent sand-boxed environment and they solve library version clashing and memory leaks
- **Web component**: using the native API for custom elements[^1]
- **Module federation**
- [[ESI (Edge Side Includes)]]: a markup language for edge level dynamic web content assembly
- **Server-side** composition

### Limits and drawbacks

- risk of communication overhead if the system is not well designed and revised with the business growth
- potential performance issues when the vendors of a project are not carefully taken into account
- broken user experience when the governance behind a design system is not well thought
- iframes are not very performant in the web
- lack of many tools available in this context lowers the development experience

---
#### References
- [[(Taibi, Mezzalira, 2022)]]

[^1]: https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
