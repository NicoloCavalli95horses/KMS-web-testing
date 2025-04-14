---
ID: 2025-04-03T09:37:21.023Z
tags:
  - paper
  - projectSLR
  - [[clickjacking]]
Project:
  - SLR
---
## Context

The [[clickjacking]] attack is straightforward: malicious page is constructed such that it tricks users into clicking on an element of a different page that is only barely, or not at all noticeable.

 **Contributions**
 - automated approach to detect [[clickjacking]] attacks
 - describe the ClickIDS browser plug-in we developed, and the system we deployed to analyze more than a million unique Internet web pages
 - first, large-scale attempt to ==estimate the prevalence of [[clickjacking]] attacks ==on the Internet
 - assess to what extent [[clickjacking]] defense techniques have been adopted by examining thousands of popular websites.

## Approach

The authors developed a browser plugin called ClickIDS that intercepts the mouse click events, check the interactions with the elements of a web page and detects [[clickjacking]] attacks. 

In simple terms, a suspicious behavior is reported when two or more clickable elements[^1] overlap at the same or similar coordinates of the mouse click.
- each time a page is load (the event `load` is triggered), the plugin registers another `onclick` handler on top of the existing one. Every click of the user is therefore intercepted
- if a clicked element is clicked, the actual mouse coordinates are taken
- the main page is scanned and if an iframe is found with clickable elements in the same position, a [[clickjacking]] attempt is detected
- a modified version of the famous plugin NoScript was used to store the URLs of malicious websites found

**xdotool**, a wrapper around the X11 testing library, was used to move the mouse on the screen and to generate keyboard and mouse events.

## Evaluation

The authors evaluate their plugin using in-house websites that implemented specific attack scenarios

Then, they tried to assess the prevalence of [[clickjacking]] attacks in the wild, considering 70.000 URLs, that included:
- Alexa top 1000 most popular websites
- 20.000 profiles of MySpace social network
- the results of ad-hoc queries on popular search engine, using keywords such as 'porn', 'free download', 'online game', to maximize the change to get to malicious websites 
- [[domain]] from `malwaredomains.com` were included (it is a list of known [[phishing]] URLs)

A crawler was created to recursively explore the URLs resulting from these 70,000. A total of 830,000 unique domains was crawled

## Results

- Only 930 pages out of 1.065.482 websites contained invisible iframe ==(0.16%)==
- ClickIDS raised a total of 672 alerts, but only 6 were real [[clickjacking]] attacks
- A ==high number of false positive were found: in this cases, pop-ups or dropdown menu dynamically appeared in response to particular events, or banners were placed on top of a scrollable page. ==In both cases, the content of the pop-ups was not transparent but the scenario as a whole was consider [[clickjacking]] by the plugins
- There have been a few cases where invisible iframes were actually present on a web page, but the iframe was not overlapping the clickable content, so it was not attempting to clickjack the user (or failed).
- 9,038 unique URLs were also browsed to assess the prevalence of the framebusting technique to prevent [[clickjacking]] attacks. Only 352 websites (3,8%) implemented framebusting techniques to prevent being loaded in a frame

## Limits

- ClickIDS is precise in identifying attacks based on overlapping elements. However, it is not able to detect attacks based on partially obstructed pages.
- General `<div>` elements are not considered clickable elements, but if invisible iframe are found the plugin detects them as well and notify the user

---
#### References
- [[(Balduzzi, Egele, et al., 2010)]]

[^1]: Among the clickable elements they considered the most used HTML tags (a, button, input, ...) but not the general `<div>` element
