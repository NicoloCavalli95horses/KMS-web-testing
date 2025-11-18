---
ID: 2025-11-18T09:04:45.807Z
tags:
  - paper
  - clientSideAttacks
  - clientDefense
  - CSS
  - crossOrigin
  - XSS
Rank: A*
---
## Context

Cross-origin CSS attacks use style sheet import to steal confidential information from a victim website, hijacking a user’s existing authenticated session; existing [[XSS (cross site scripting)]] defenses are ineffective.

We have implemented and deployed defenses in Firefox, Google Chrome, and Safari. Our defense proposal has also been adopted by Opera.
## Background

The [[SOP (Same-Origin Policy)]] is the basic principle used to secure Web applications from each other. An HTML document can include many sorts of content—including images, scripts, video- from any site. However, the document’s scripts ==may not directly examine content loaded from other sites.==

CSS files may be part of an imported document. 
To allow future extensibility, the ==CSS specification mandates error-tolerant parsing.==
Browsers skip over CSS directives they cannot interpret, while continuing to honor what they do understand.
- error-tolerant parsing can find valid CSS constructs in an input stream that was not intended to be CSS at all; for instance, in an HTML document
- we can exploit this behavior to **import an external website as CSS files** and access some security-critical data from it

> [!NOTE] Cross-Origin CSS data exfiltration
> If a malicious site can inject chosen strings into a target webpage and then load that page as a style sheet, it can extract information from the page. This is done by examining what the CSS parser makes of this “sheet.”

This type of attack works even if JavaScript has been disabled or it is unsupported

The core problem here is that ==an including page can override the content type of a cross-origin resource==
## Attack details

**Step 1: CSS String Injection**
The attacker injects two strings into the target document that serve to enclose the secret data. The attacker must know the structure, but not the specific content, of the target page. In practice, this injection is done exploiting query parameters or input fields **in the target websites** (the attacker does not copy and paste a modified HTML, but injects strings in the very target)
- By exploiting the CSS parser's error recovery rules, the strings are formulated to trick the parser into exiting error recovery mode and consuming the secret data as a valid CSS property value
- The first string typically begins with a synchronization sequence (e.g., `{}`) to exit error recovery mode, followed by the start of a valid CSS rule, such as `#f{font-family:'`
- The second string closes the string constant and terminates the CSS rule (e.g., `';}`)
- Confidential text, located between the leader and trailer, is absorbed as the CSS property value

**Step 2: Cross-Origin CSS Import**
The attacker convinces the victim to visit a malicious web page under their control (`attacker.com`). This can be done with social engineering techniques
- The attacker's page ==instructs the victim's browser to load the target document (which contains the injected strings and the secret)== as if it were an external style sheet
- This is done using the `<link rel="stylesheet" HREF="http://target.com">` tag or the `@import` CSS directive
- As the browser attempts to load a resource from the target site, it transmits the victim's session credentials (e.g., [[cookie]]). The target server responds with the victim's private page, which the browser attempts to parse as a style sheet

**Step 3: Confidential Data Extraction**
After the target document has been parsed as a style sheet, the attacker retrieves the secret through the CSS rule containing it

---
#### References
- [[(Huang, Weinberg, et al., 2010)]]
