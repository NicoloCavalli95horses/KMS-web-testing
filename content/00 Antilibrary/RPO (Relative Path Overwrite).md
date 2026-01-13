---
ID: 2025-11-25-13:01
tags:
  - "#definition"
  - RPO
  - clientSideAttacks
  - cyberAttack
  - cyberSecurity
---
## Definition

Browser and servers process relative URLs differently. We can take advantage of that. RPO (Relative Path Overwrite) is a technique ==to take advantage of relative URLs by overwriting their target file.==

Characters such as a dot (`.`), slash (`/`), backslash (`\`), question mark (`?`) and  semi-colon (`;`), and their encoded equivalents have special meanings in URL. Servers and browsers may interpret these differently.
- The differences in interpretation are what attackers can utilize to extend attack possibility of RPO

In certain settings an attacker can manipulate a page’s URL in such a way that the web server still returns the same content as for the benign URL. However, using the manipulated URL as the base, the web browser **incorrectly expands relative paths of included resources,** which can lead to **resources being loaded despite not being intended to be included by the developer, or in a format not intended by the developer.**
- Depending on the implementation of the site, different variations of RPO attacks may be feasible
- For example, ==an attacker could manipulate the URL to make the page include user-generated content hosted on the same domain==

When an injection vulnerability is present in a page, an attacker could manipulate the URL such that the web page references itself as the style sheet, which ==turns a simple text injection vulnerability into a style sink==

> [!NOTE] In a nutshell
> In essence, this attack utilizes a crafted URL to  ==force the target web page to load itself as a stylesheet, when it contains both path-relative stylesheets and attacker-controllable contents.==

### Entry points
- URLs
- [[cookie]]
- forms
### Example

Let's say the URL `https://example.com/profile` returns the following:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="username">Mario Rossi</div>
</body>
</html>
```

The attacker finds a reflected parameter `https://example.com/profile?q=hello%0Abody{background:red}` which is ==reflected in the DOM as a string:== (not executed, otherwise it is a full [[XSS (cross site scripting)]])

```html
<p>You searched: hello
body{background:red}</p>
```

This is just reflected texts and obviously is not harmful.
However, the browser uses relative path resolution. If the attacker provides `https://example.com/profile?q=AAA/../styles.css` the browser may interpret the same HTML page as a CSS file and return that.

This happens because
- Given `<link rel="stylesheet" href="styles.css">` the browser calculates the relative path of the file
- It believes that the file is in `https://example.com/profile/styles.css`
- The server does not have a file in that location and returns the same HTML (`https://example.com/profile`)
- The browser execute it as CSS

In practice, RPO is ==more likely in server-side PHP web apps==:
- usage of relative paths
- tolerant server-side routing (eg., that does catch-all on `index.php`, that returns a 200 status even on non-existing pages)

---
#### References
- [[(Arshad, Mirheidari, et al., 2018)]]
- https://thespanner.co.uk/2014/03/21/rpo
- https://www.mbsd.jp/Whitepaper/rpo.pdf
- https://portswigger.net/research/detecting-and-exploiting-path-relative-stylesheet-import-prssi-vulnerabilities
