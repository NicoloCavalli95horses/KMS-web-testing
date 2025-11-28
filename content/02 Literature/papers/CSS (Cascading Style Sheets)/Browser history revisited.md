---
ID: 2025-11-28T07:16:36.852Z
tags:
  - paper
  - CSS
  - cyberSecurity
  - historySniffing
  - webHistory
Rank: A
Project:
---
## Context

Browsing history can reveal a lot about a person: their age, gender, location, political leanings, preferred adult sites—even who they are in the real world.

Until 2010-2012, using the CSS `:visited` and `:link` selectors, attackers could conditionally style a link based on whether its destination URL appears in the victim’s browsing history. After that, new attacks were discovered:
- using `MozAfterPaint` and `requestAnimationFrame` APIs
- using timing channels based on browser's caching of embedded resources

This papers present:
- three visited-link attacks, abusing new browser features which give attackers a range of capabilities to operate on sensitive history data, from executing arbitrary JavaScript code in the rendering pipeline with the CSS Paint API to composing complex graphical computations using CSS and SVG
- a cache-timing attack that abuses Chrome’s new JavaScript bytecode cache

We evaluate our attacks against four major browsers (Chrome, Firefox, Edge, and Internet Explorer) and five security-focused browsers (ChromeZero, Brave, FuzzyFox, DeterFox, and the Tor Browser).

Our attack on the CSS Paint API permits history sniffing at the high rate of 3,000 URLs per second.

**Mitigation proposal**
We propose to associate the referring origin with all persistent URL data, including history and cache entries and only expose this data to code—whether web applications or core browser components—running on behalf of the same origin
## CSS Paint API

The CSS Paint API, introduced in 2018, lets websites hook into the browser’s rendering pipeline and draw parts of HTML elements themselves for example, to fill the background of a web page with a repeating checkerboard pattern that adapts to any window size and display resolution. By detecting when these hooks are invoked, ==an attacker can observe when the browser re-paints a link element on the page.== Toggling a link between destination URLs causes the link to be re-painted if its visited status changes, so the attacker can infer whether or not those URLs have been visited.

**How the attack work**
- we want to know if the victim has browser to `facebook.com`
- we create a malicious webpage at `evil.com` and we display a dummy link we know the victim has not visited (eg. a random link such as `iojio23jio.com`)
- we create the `<a>` element pointing to the dummy URL and we use the paint API to style its background
- with JS, we change `a.href` to `facebook.com`
- if `facebook.com` is visited, the browser must display it in a different color
- in this case, the `<a>` element gets re-painted again, hence the attacker can infer the URL status
- two calls indicates visited, and one call indicates unvisited
- counting these calls is not easy but we can use an ==event-loop timing channel.==The re-paint usually lasts 20ms and blocks the JS event loop. Sine the event loop is shared, we can detect the change

This attack can at best exfiltrate 60 URLs per second.

Google acknowledged the attack and patched Chrome on release 67. CSS Paint API is now on link elements and their children

## CSS 3D Transformation

CSS 3D transforms can be used to translate, rotate, project, and even animate HTML elements in a three-dimensional space.

An attacker stacks these 3D transforms on top of other CSS effects to create a link element that the victim’s browser struggles to draw. Then the attacker repeatedly toggles the link element between two different destination URLs and, using the `:visited` selector, forces the browser to complete expensive re-paint operations when the link changes visited status.

## Limits


---
#### References
- [[(Smith, Disselkoen, et al., 2018)]]
