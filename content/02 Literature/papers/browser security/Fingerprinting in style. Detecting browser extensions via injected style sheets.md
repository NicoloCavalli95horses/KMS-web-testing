---
ID: 2025-08-14T09:13:00.620Z
tags:
  - paper
  - browserFingerprinting
Rank: A
---
## Context

[[browser fingerprinting]] is a set of techniques to collect a variety of information about a browser, in order to create a unique ID of the user. In this work we show how style modifications from browser extensions can be abused to identify installed extensions, which provides an unique browser clue.

Online activity is tracked by a multitude of third parties. These third parties usually record browsing history with the goal of better ad targeting.

**Stateful tracking**
Makes use of [[cookie]] to enable trackers to recognize returning users and update their profiles. This approach is limited by the fact that an user can clear cookies or browse the web privately

**Stateless tracking**
Techniques that fingerprint a user's browsing environment (exact browser version, resolution of the screen, the way the graphic card render 3D images, etc).

It is possible to fingerprint considering the way browser extensions (ad-blockers, video downloaders, etc):
- modify a page's DOM,
- send messages with `postMessage` API, 
- made some resources available to the user

==Unlike traditional fingerprinting, browser extension fingerprinting can be abused to infer sensitive information about the user. This is because an user *choose* to install a specific extension. With that, they can guess user's age, religion, political affiliation and ethnicity==

## Approach

In this paper we present a method of browser extension fingerprinting that relies on CSS injection. In short, browser extensions styles GUIs with CSS rules in order to show the user little pop-ups (user-facing UI), or literally new content injected into the page (a new download menu on YouTube)
- extensions that inject content into a page, often style it in a certain way
- it is possible to prepare a fake page with thousands of invisible elements and to detect which element gets the style from the extension
- in this way a web page can detect the presence of specific extensions without the need of any user interaction

We designed an analysis pipeline that detects whether an extension injects CSS rules into public webpages, extracts correspondent CSS selectors and builds a set of triggers (DOM elements or hierarchies that identify the extension).

Given that an extension must have the permission to inject CSS rules in a given webpage, we can have:
- fingerprintable on any domain (ad-blockers, password managers, etc)
- fingerprintable on some domains (YouTube extensions, Gmail, etc)

Process in short
- identify what CSS rules are injected by an extension, parsing its `css` file declared in the `manifest.json`, and using Mystique to detect dynamically added style (via `tabs.insertCSS` API)
- create DOM triggers based on the CSS rules (DOM element that can receive that style). Up to 50 DOM elements/triggers per extension were considered
- confirm trigger fingerprints
- verifying collision between extensions. The triggers that produced the exact same change between two or more extensions were discarded

## Background

Information about the installed extensions can be leaked because in current browser implementations the effects of CSS rules injected by extensions are visible to all JavaScript code running, regardless of their origin. 

## Results

We analyzed more that 116K extensions from the Chrome extension store.
- out of 6645 extensions that add style on any URL, we detected 4446 extensions

Interesting facts:
- among the top CSS properties that are most modified by extensions, there are `transformOrigin`, `webkitPerspectiveOrigin`, `webkitTransformOrigin`
- some extension style some properties with high-precision values (e.g., 31.249px). This unique behavior has the disadvantage of uniquely identifying the extension
- color-related style changes are not as common as we expected
- reasons for collisions: same extension with different IDs in the Chrome store, same developer that uploaded different variant of the same extension, copies of the same extensions, shared CSS libraries between different extensions, random coincidence
- fingerprintable web extensions are likely to stay fingerprintable in the future, due to our longitudinal study

## Countermeasure

**Using a shadow DOM**: a shadow DOM is a self-contained web component. When a browser checks for the style of an element, its call is rerouted to a mirrored DOM that is free of all extension styles, deceiving any fingerprinting attempts.

## Limits

- the implementation support web extension only for Chrome, Firefox, Opera, Edge and Brave

---
#### References
- [[(Laperdrix, Starov, et al., 2021)]]
