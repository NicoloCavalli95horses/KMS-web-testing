---
ID: "2025-02-03-10:28"
tags:
  - "#definition"
---
## Definition

An applet is a small program that can be run inside another application, usually a web browser. Applets were once widely used to provide interactive functionality on web pages, but are ==now largely obsolete due to security concerns and the increasing adoption of alternative technologies such as JavaScript, HTML5, and WebAssembly.==

**Java Applet**
A Java applet is a program written in Java that runs inside a web browser using the Java Plugin (which is now deprecated and no longer supported in modern browsers).
- Java applets were used for games, animations, and interactive graphical user interfaces before the advent of more secure and performant technologies.

### Example

```Java
import java.applet.Applet;
import java.awt.Graphics;

public class HelloApplet extends Applet {
    public void paint(Graphics g) {
        g.drawString("Hello, World!", 20, 20);
    }
}

```

The script can be executed with the tag `<applet>`

```html
<applet code="HelloApplet.class" width="300" height="100">
</applet>

```

### Why are Java applets obsolete?

- **Security concerns**: many attacks exploited vulnerabilities in the JVM in the browser.
- **Removed support in modern browsers**: Chrome, Firefox, Edge, and Safari have removed support for NPAPI plugins, which are needed to run applets.

More modern alternatives include JavaScript, WebGL, WebAssembly, and HTML5 Canvas.


---
#### References
- https://en.wikipedia.org/wiki/Applet

