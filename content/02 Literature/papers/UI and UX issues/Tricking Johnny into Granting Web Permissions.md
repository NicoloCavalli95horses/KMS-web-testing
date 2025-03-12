---
ID: 2025-03-11
tags:
  - paper
  - browser
  - clickJacking
  - cyberSecurity
---
## Context

In a [[clickjacking]] attack, an attacker tricks a user into clicking on webpage element that is hidden or disguised as another element. This can result in a situation in which the user takes an action unwittingly

This study aims at answering to the following RQ: *How can the web permission dialog box be abused, and how effective are the existing preventive measures in browsers?”*
## Approach

- designed an experimental game, called “Furious Clicker,” to evaluate whether or not users can be tricked into granting webcam permission by clicking on the 'allow' button of the web permission API’s dialog box
- 120 participants took part in our web-based game experiment
- three experiments were conducted, each with 40 different participants, on both desktop and mobile browsers
- We used the mobile version of Google Chrome on Android, and the desktop version of Mozilla Firefox and Google Chrome on Mac OS

## Results

The participants were told that the goal of the test is to measure how fast people are able to click. They didn't know that the authorization label would be displayed

- 95% of participants were tricked on a ==mobile browser==. This is likely because tapping with your thumb physically obscures the permission panel more than clicking with your mouse
- 72% on a ==desktop browser==
- 47% of participants on a desktop browser ==where a prevention mechanism exists==
- only 8 people out of 120 knew how the granted permission could be revoked from the desktop and mobile browser

![[furious_clicker_clickjacking.png]]

Suggestions:
- invalidating the focus of the mouse pointer for a short period to allow users to perceive the instant UI changes
- Google Chrome in its newest version has patched this problem as follows: if the dialog box appears when the user is busy clicking, ==it does not accept any clicks until the user pauses for a second and clicks again==


---
#### References
- [[(Hazhirpasand, 2020)]]
