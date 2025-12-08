---
ID: 2025-12-08T08:30:09.278Z
tags:
  - paper
  - SVG
  - clientSideAttacks
  - XSS
Rank: A*
---
## Context

SVG is based on XML and was first published by the W3C in 1999. The W3C and WHATWG draft specifications for HTML5 require modern web browsers to support SVG images’ embedment in a multitude of ways.
- SVG images can now for example be engrafted in a given document either in the classical way via specific tags such as ==`<embed>` or `<object>` tags,== or in the novel ways such as ==with `<img>` tags or inline== in any HTML5 document.

An SVG file can contain interactive and animated elements. Processing events and raster images, embedding videos, and rich-text are also feasible. Contrary to popular belief, ==SVG files should thus not be considered to be plain images or animations, and it is necessary to treat them as fully functional, one-file web applications== capable of potentially containing HTML, JavaScript, Flash and other interactive code structures.

**Contributions**
We introduce several novel attack techniques of using SVG images to target modern, real life web applications
- Active Image Injection (AII) attack, in which arbitrary JavaScript code can be delivered via SVG files
- SVG-based [[XSS (cross site scripting)]]
- SVG chameleons (files that are interpreted differently depending on how they are opened)
- deception of filtering techniques via SVG files

## SVG files

The SVG family consists of several members and we use the following three file types as examples in later sections:
- SVG Full 1.1: SVG Full describes the full SVG feature set including 81 different SVG elements and tags. The specification is designed without a special focus on the devices parsing the SVG data.
- SVG Basic 1.1: SVG Basic is supposed to deliver a subset of the SVG Full specification to ease the implementation for developers of browsers for PDAs and handheld devices. SVG Basic only provides 70 of the 81 SVG elements specified in SVG Full 1.1. Contrary to SVG Tiny 1.2, the SVG Basic 1.1 features also include support for SVG fonts.
- SVG Tiny 1.2: SVG Tiny is specifically designed for smartphones and similar mobile devices with limited computing, rendering, and display capabilities. The subset of allowed SVG elements and tags has been reduced to 47 elements. SVG Tiny also ships several exclusive possibilities for event binding and external resource loading.

Additionally, the SVG specification provides interface descriptions for an ==SVG Document Object Model (DOM)==, which implies that SVG files also offer some dynamic capabilities. Users can create SVG files capable of providing event handling, effects, time-based changes and animations, as well as zoom effects and other helpful display enhancements. A large set of filters can be applied to the elements of SVG files to even more greatly increase the possibilities for image transformation and animation. The ability to combine SVG with the XML Linking Language (XLink) features allows SVG files to link elements to other elements in the same image file, other image files or arbitrary objects referenced via Uniform Request Identifiers (URIs). Furthermore, these image files support the implementation of International Color Consortium (ICC) and Standard Red-Green-Blue (sRGB) color profiles, allowing the embedment of arbitrary content such as Flash, PDFs, Java and HTML via the `<foreignObject>` element

**SVG deployment**
- **as uploaded file**
- **via CSS backgrounds and img tags**: this is the most dangerous and effective attack, given that ==the majority of web applications judge img tags to be harmless==
- **via inline SVG** (with the SVG tag)
- **via font file**: an SVG can be specified as a font completely consisting of SVG data
- via **iframe, embed, or object tags**

> [!WARNING] Warning
> SVG files should be displayed and executed with a heavily limited set of features to prevent universal XSS attacks

## SVG attacks

### Local JavaScript execution  

Tricking the victim into saving an SVG image from a website and opening it later on for repeated viewing pleasure. Once saved locally and double-clicked, the browser will open the file – since most users do not have a dedicated software installed that changes the application to handle the SVG MIME type. The SVG file is consequently opened from a file URI and in case it contains JavaScript, this code will be executed in the same context
- Depending on the web browser the victim is using, the JavaScript can then attempt to read other files from the hard-disk or neighboring directories, and cause a data leakage incident.

### SVG chameleons

SVG Chameleons are files containing both SVG and HTML content. Using in-line XML transformation (XSLT), we managed to craft an SVG file that acts like an image if embedded via <img>, CSS or similar ways, but ==unfolds to a full stack HTML file containing no SVG elements anymore as soon as opened directly==. This attack works with Gecko-based browsers, since it appears to be the only layout engine supporting in-line XSLT in SVG files.

### Facilitating Cross Site Scripting Exploits

SVG images provide many possibilities for executing JavaScript in uncommon ways.
SVG Tiny, for example, allows to execute JavaScript by using a handler element with an event attribute

```html
<svg xmlns="http://www.w3.org/2000/svg"> <handler xmlns:ev="http://www.w3.org /2001/xml events" ev:event="load"> alert (1) </handler > </svg >
```

Another way of embedding JavaScript in SVG files makes use of a `<feImage>` tag with an `xlink:href` pointing to a `data: URI`.

```html
<svg xmlns =" http :// www . w3 . org /2000/ svg " xmlns:xlink="http://www.w3.org/1999/ xlink "> <feImage > <set attributeName="xlink:href" to="data:image/svg+xml;charset=utf -8; base64 ,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53 My5vcmcvMjAwMC9zdmciPjxzY3JpcHQ %2 BYWxl cnQoMSk8L3NjcmlwdD48L3N2Zz4NCg %3 D %3 D"/> </feImage > </svg >
```

### Facilitating filter bypass

While in HTML documents entities such as `&#x61`; will be treated as such, XHTML and XML documents will have the entity be treated like its canonical representation (e.g., the character a). In practice, this implies that within a XHTML/XML document the code `<script>&#x61;lert(1)</script>` will execute the `alert()` method, while an HTML document with the same content causes the script engine to throw an error.

## Limits

What are the limits of the research? What could be improved?

---
#### References
- [[(Heiderich, Frosch, et al., 2011)]]
