---
ID: 2025-01-21-15:31
tags:
  - "#definition"
  - clientSideAttacks
  - cyberSecurity
  - GUI
---
## Definition

 Clickjacking, previously known as UI Redress attack, is a term first introduced by Jeremiah Grossman and Robert Hansen in 2008 to describe a technique whereby cross-domain attacks are performed by ‘hijacking’ user-initiated mouse clicks to perform actions that the user did not intend [[(Selim, Tayeb, et al., 2016)]]
 
 Clickjacking attacks merge malicious UI elements with non-malicious UI elements, or transparently trick the browser into sending input to a malicious server or function call, rather than an intended function call
 - Often, iframes and CSS techniques are exploited to create the invisible layer
 
There are many methods of attacking an application using clickjacking, with JavaScript, HTML, and CSS.
- Clickjacking attack are considered a form of ==user-interface keylogger==

When used against unsuspecting end users, clickjacking attacks can allow an attacker to steal valuable user input (sensitive data, financial transactions, etc...)

> [!SUMMARY] Requirements
> - The user has to click to a malicious link which points to a legitimate-looking website (may be a copy of a real trusted website)
> - The fake website contains invisible iframes and the actions of the user are captured by this invisible layer without him being aware of it

JavaScript may also be used to position the iframe under the mouse cursor, such that the user will click on the target no matter where they click on the malicious page. [[(Selim, Tayeb, et al., 2016)]]

The victim action on the transparent layer looks "safe" from the browser's point of view, because the [[SOP (Same-Origin Policy)]] it is not technically violated [[(Balduzzi, Egele, et al., 2010)]]

Contrarily to [[SQLIA (SQL injection attack)]], clickjacking does not depend on a bug in the application, such as an input validation failure, but it is just a misuse of HTML/CSS features to trick an user [[(Balduzzi, Egele, et al., 2010)]]

![[clickjacking_example.png]]

![[clickjacking_example_twitter.png]]
## Risks and consequences

**Camera and microphone exploit in Adobe Flash, 2008** 
The user:
- was mislead to play a web game, by clicking on a malicious link
- every click within this game corresponded with a click on a Adobe Flash settings page, that was embedded in a iframe
- When interacting with the clickjacking web page, the end user was tricked into passing clicks through to the privileged Adobe Flash privacy settings
- The result was that the Adobe Flash browser plug-in would share both camera and microphone control with the hacker

Attackers have used clickjacking attacks to trick users into liking a fan page on Facebook or re-tweeting a message on Twitter [[(Hazhirpasand, 2020)]]

**Tweetbomb and likejacking**  [[(Shahriar, Haddad, et al., 2015)]]
- using clickjacking to trick an user to like a post on Facebook or share a post Tweeter, causing an increase of traffic to the attacker's content

From [[(Balduzzi, Egele, et al., 2010)]]:
- initiate money transfers
- clicking on banner ads that are part of an advertising click fraud
- posting blog or forum messages

## Prevalence

The current prevalence of clickjacking it is not clear

## Clickjacking classification

**Compromising target display integrity**  [[(Hazhirpasand, 2020)]] [[(Selim, Tayeb, et al., 2016)]]
- a sensitive UI is hidden/made invisible and an attractive decoy is placed over or beneath it, nudging the user to interact with it

**Compromising pointer integrity**  [[(Hazhirpasand, 2020)]] [[(Selim, Tayeb, et al., 2016)]]
- a fake cursor (pointer) is used instead of the real cursor

**Compromising temporal integrity attack**  [[(Hazhirpasand, 2020)]] [[(Selim, Tayeb, et al., 2016)]]
- the sensitive element is not hidden, the users can potentially see it but are nonetheless tricked into making an unwanted click because they are engaged in a distracting activity. ==Humans need at least a few hundred milliseconds to react to a sudden visual change ==
- online games are a perfect example of this attack. Hackers can exploit this situation to get access to webcam, or to bypass security captcha embedded in an iframe
- an hidden iframe may be added in front of the mouse just before the user performs the click and removed just after [[(Balduzzi, Egele, et al., 2010)]]

## Mitigation techniques

**Frame busting** [[(Hazhirpasand, 2020)]]  [[(Selim, Tayeb, et al., 2016)]] [[(Shahriar, Haddad, et al., 2015)]] [[(Sood, Enbody, et al., 2011)]] [[(Sinha, Uppal, et al., 2014)]]
Frame busting is a technique to prevent a given web page from being loaded in a sub-frame. Many JS snippet have been proposed to implement that solution
- given that is a client-side implementation, it can be modified by an attacker, so does not really protect against a well-crafted targeted attack
- using the `sandbox` attribute would allow an attacker to bypass the framebusting[^1]
- using *nested iframes* could break the logic, given that even if the second iframe is reloaded and takes the place of the first iframe, the legitimate content is still framed

```javascript
// framebusting example
// window.self === self === window
// window.top is the topmost window on the iframe stack
if (window.top != window.self) {
  // if your website is embedded in an <iframe> this will force the page to reload. The malicious website is replaced with the legitimate one
  top.location.href = location.href;
}
```

Rigid clickjacking prevention are challenging to implement by browser vendors, because it is not easy to distinguish between a legitimate and a malicious usage of iframe [[(Selim, Tayeb, et al., 2016)]]

**X-Frame-Options on HTTP header**
using `X-Frame-Options` header in `HTTP` will prohibits a website from being rendered in a iframe. [[(Aditya Sood, Richard Enbody, et al., 2011)]] ,[[(Selim, Tayeb, et al., 2016)]], [[(Shahriar, Haddad, et al., 2015)]] , [[(Sood, Enbody, et al., 2011)]] [[(Sinha, Uppal, et al., 2014)]], [[(Balduzzi, Egele, et al., 2010)]]
- only 11.11% of Alexa's top 1 million sites implement `X-Frame-Options` header 
- Header-based solutions are difficult to scale up for organizations hosting multiple websites referring each other [[(Shahriar, Haddad, et al., 2015)]]

**Confirmation dialog** [[(Shahriar, Haddad, et al., 2015)]]
A confirmation dialog has been proposed to mitigate clickjacking attacks when there is a possible out-of-context click.
- the user experience is degraded and the user is involved in a security measure that should be his responsibility

**GUI randomization** [[(Shahriar, Haddad, et al., 2015)]], [[(Sinha, Uppal, et al., 2014)]]
Randomizing the layout of small part of the UI to prevent an attacker to correctly locate the position of the target element
- the user experience is degraded
- the performance of the page is degraded

**Blocking of mouse click** [[(Shahriar, Haddad, et al., 2015)]]
Blocking the mouse if browser detects that the clicked cross-origin frame is not fully visible

**Browser plugins/extensions** [[(Shahriar, Haddad, et al., 2015)]], 
- ClickIDS for Firefox: to detect overlapping clicks by comparing the mouse position to the position of clickable elements inside an iframe. The user is warned when an overlap is found (implemented by [[(Balduzzi, Egele, et al., 2010)]]) 
- [Noscript](https://addons.mozilla.org/en-US/firefox/addon/noscript/): disables all JavaScript elements. It can degrade the user experience or prevent the user to fully access all the functionalities of a web application

**Client-side proxy** [[(Shahriar, Haddad, et al., 2015)]]
- The approach intercepts requests and responses and uses a set of policies to examine for matching with known clickjacking attacks. The approach delays the generation of response pages due to rigorous checking of JavaScript code.

From [[(Sinha, Uppal, et al., 2014)]]:
- **ProClick**: a client-side proxy that analyzes a web page for clickjacking symptoms before its rendering. It leverages on the HTTP communication to detect iframes 
- **ClearClick**: a browser plugin that monitors the page behavior during click actions. If a user is about to click on a page that has been framed or on a plug-in object, ClearClick takes a screenshot of the iframed page with opacity as zero. This screenshot is compared to the parent page's screenshot and if any difference is found in the two images the click action is prevented [[(Balduzzi, Egele, et al., 2010)]]

## Limits of existing studies

- Not all the possible ways to embed a cross-site application have been studied
- Most of the work focuses on the `<iframe>` tag, but also `<object>` and `<embed>` can be used

---
## References
- [[(Hoffman, 2024)]]
- Included in literature review, by [[(Onukrane, Skrodelis, et al., 2023)]]
- Granting web permissions, by [[(Hazhirpasand, 2020)]]
- HTTP header example from [[(Aditya Sood, Richard Enbody, et al., 2011)]]
- [[(Selim, Tayeb, et al., 2016)]]
- Risk assessment, by [[(Shahriar, Haddad, et al., 2015)]]
- Short literature review, by [[(Sood, Enbody, et al., 2011)]]
- Short literature review, by [[(Sinha, Uppal, et al., 2014)]]
- [[(Balduzzi, Egele, et al., 2010)]]

[^1]: A number of values can be specified to control the behavior of the iframed content. More details [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
