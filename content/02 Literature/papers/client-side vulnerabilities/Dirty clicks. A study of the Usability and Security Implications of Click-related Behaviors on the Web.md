---
ID: 2025-03-04-09:53
tags:
  - paper
  - cyberSecurity
  - webApplication
  - clientSideAttacks
  - clickingBehaviour
  - hci
---
## Context

The first comprehensive study of the possible security and privacy implications that clicks can have from a user perspective, analyzing what is shown to users and what actually happens after.
- Click-related issues are classified
- Target websites are analyzed
- A set of countermeasures is proposed

**A server-focused research**
Most of the work performed to date on clicking behavior has focused on the server side (i.e., on how an application can identify if a click was actually made by a real user, and not by an automated machine or a script)
- important implications for pay-per-click (PPC) advertising)

**A widespread problem**
Around 80% of the tested domains adopt some form of misleading technique that would prevent users from making informed decisions on whether they want or not to click on a given link
- similar techniques were find in both legitimate website and in "dubious" website (free streaming, porn)

70% of the domains exposed users to unexpected [[man-in-the-middle attacks]], 20% of which were completely unpredictable

10-20% of the time a link results in a visit to a highly dangerous website

###  The click contract

Basing on web recommendations/standards and user experience handbooks, the authors propose a **click contract** that should be respected by websites to improve both security and usability.

**What You See Is What You Get**
1. When a user clicks on a link whose target URL is displayed by the browser at the bottom of the screen, she expects to navigate to that same destination. In case redirections happen afterwards as a consequence of the click, the user expects to remain within the same domain of the displayed URL, or the website she is on at the moment of clicking
2. If an object is clickable, but the browser does not show any domain at the bottom of the web page, a user expects the click to generate some action within the current website and not to navigate to a different domain
3. The user does not expect any external navigation to take place when she clicks on a non-clickable element of the page (such as a simple text paragraph)
4. When the user clicks an HTTPS link, she expects that the communication towards the target URL will be encrypted

**Trust in the Endpoints**
1. If a user on a website A clicks on a link to a domain B, she does not expect any other domain, apart from A and B (or those included by them), to execute code in her browser
2. If cookies are created in the process that follows a click, the user only expects cookies from the domain she clicked, or from any of the third party domains included by it
3. If a new tab is opened by the browser after the user clicks on a link, the new tab should not be able to interact with the other tabs already open in the browser (see [[tabnabbing]])

## Approach

A list of top-ranked domains (+12k), according to Alexa, were analyzed. The hypothesis was that the prevalence of "dirty clicks" was higher in "grey" websites (free streaming, porn)

The click analysis tool was implemented as a web crawler that:
- receives as input the main URL of a website
- loads the page
- recursively visits three randomly selected pages up to a distance of three clicks from the homepage
- 13 pages per website were analyzed
- ==everything that has the "cursor" property on "clickable" is considerate a button==

### Results

**Insecure communication**
- **Insecure access**: the user clicks on an HTTPS link but the visited page is actually using HTTP
- **Hidden HTTP connection**: the user click on b.com and eventually lands on b.com, which correctly support HTTPS, but there were intermediate HTTP insecure webpage invisible for the user.. The two endpoint are secure but the entire communication is not
- **Unexpected mixed content**: by default, over a secure connection, browsers block what is generally known as active mixed content (i.e., elements served over HTTP that can directly interact with the content of the page). However, other elements such as images and video files  are allowed. This opens the door to ==possible security and privacy attacks that use passive mixed content.==

**Misleading clicks**
- **Invisible Layer**: The user clicks some non-clickable object of the web page (e.g., some random text or image), despite the fact that there should not be any expected result, this triggers a web page redirection or the opening of a new tab
- **Fake href Attributes**: The user wants to click on a given element, such as a simple `<a>` tag, and the user’s expectation is that the browser will go to the website indicated by the link (as specified in the href attribute). However, the user is redirected to a different website, not related to the expected one
- **Fake Local Clicks**: The user clicks on a clickable object in a web page that does not explicitly indicate a target URL. As a result, the user expects the destination to be in the same domain of the current website. However, the user is redirected to a completely unrelated domain without any prior notice.

**Misleading redirects**
- **Different domain**: the user is redirected to a domain different from the one that he was expecting. The user click on a.com and is redirected to c.com instead of b.com
- **Hidden domain**: the user click to b.com, is redirected to c.com and then again back to b.com. The user is not aware of the redirection

Despite the common intuition that this type of techniques would be prevalently used in gray webpages for aggressive advertisement reasons, ==our results show that most of these bad practices are equally common in both datasets.==

**Misleading cookies**
- **undesired cookies**: cookies that are added after a redirect without the user being aware of it
- **undesired HTTP cookies**: cookies can be stolen in a man-in-the-middle attack over an HTTP connection
- **First party bypass**


> [!WARNING] Loading external content over HTTP is very common
> More than half of the domains indirectly put their users in jeopardy not by performing an insecure redirections, but by loading external content over an insecure channel.

---
#### References
- [[(Sanchez, 2020)]]