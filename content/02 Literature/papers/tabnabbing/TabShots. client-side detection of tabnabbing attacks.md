---
ID: 2025-04-07T14:49:27.872Z
tags:
  - paper
  - projectSLR
  - tabnabbing
  - phishing
Project:
  - SLR
---
## Context

In [[tabnabbing]], the user is lured into visiting a malicious site, which looks innocuous. The user browses to a different website, keeping the original tab open. The attacker can react to this event with `window.onBlur`, by redirecting the victim to the malicious website, which is a copy of the previous innocuous website
- The victim is presented to a login page, simulating the end of a session, and lured into giving the credentials of the legitimate website to the attacker

A 2009 study of user’s browsing habits revealed that users have an average of 3.2 tabs open in their browsers

**Tabshots**
- a Google Chrome extension for detecting changes to a site when its tab is out of focus
- TabShots allows a browser to “remember” what the tab looked like before it lost focus, and compare it with the appearance after regaining focus
- TabShots records the favicon and captures a screenshot of the visible tab
- Whenever a user revisits a tab, a new capture is taken and compared to the previously stored one. If any changes are detected, the user is warned by adding a visual overlay on the current tab, showing exactly the content that was changed, ==assisting the user in distinguishing between legitimate changes and tabnabbing attacks==.
- TabShots also has a browser toolbar icon, indicating the current status of the site. The icon’s background color indicates how much of the site has changed, ranging from almost nothing (< 10%, shown as green), over moderate (< 40%, shown as yellow) to high (> 40%, shown as red)
- TabShots fully operates in the background, without any blocking impact on any browser action or processing
- The time required by TabShots to execute and compare the shots is under 300ms
- TabShots can save on a database URL and screenshots of the pages that a user label as malicious, creating a ==dataset of potential tabnabbing websites==. This is done upon user authorization.

## Limits

- difficulty to detect a small change in a page that results in a visible shifting of contents (e.g. adding one message in front of a list).
- false positives occur if the viewport changes (e.g., screen resize)
- the system is not based on JS detection. It is challenging to detect malicious JS that carries out the tabnabbing attack
- the plugin makes a capture of a tab at regular intervals. Would have been better to screenshot the tab only when the user leaves and then comes back, but browsers don't trigger an event in these situations
- showing the screenshots to the user may degrade the UX, interrupting the interaction
- the test of the extension did not cover the authenticated parts of the sites
- a human analyst has to decide whether malicious URLs submitted by the TabShots' users are true positive

---
#### References
- [[(De Ryck, Nikiforakis, et al., 2013)]]
