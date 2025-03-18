---
ID: 2025-03-18-10:48
tags:
  - "#definition"
  - FlashSecurity
---
## A Brief History of Adobe Flash

- Flash began in the 1990s as FutureSplash Animator, developed by FutureWave Software
- Macromedia acquired it in 1996 and renamed it Macromedia Flash
- Adobe acquired Macromedia in 2005 and continued development under the Adobe Flash name

## Why was it so popular?

In 2012, Flash was used by the vast majority of web applications for several reasons:

- **Advanced Multimedia** – Allowed the creation of animations, games, and interactive interfaces with scalable vector graphics.
- **Support for Audio and Video** – Was the leading standard for streaming video before the widespread adoption of HTML5 (YouTube used Flash Player).
- **Cross-platform** – Runs on any browser with the Flash Player plugin installed.
- **Advanced Interactivity** – Allows the creation of complex interactive experiences using ActionScript

## What vulnerabilities did it have and why?

- **Excessive complexity** – Flash Player was a monolithic piece of software with many features, increasing the attack surface
- **Arbitrary code execution** – Many exploits used [[buffer overflow]] or memory corruption to execute malicious code
- **Lack of effective sandboxing** – Vulnerabilities allowed attacks such as [[drive-by download]], which would execute malicious code just by visiting a website
- **Frequent zero-days** – Flash was a prime target for hackers and malware, with numerous critical vulnerabilities discovered each year
- **Performance issues** – High CPU and memory consumption, especially on mobile devices

## Deprecation and end of support

In 2017, Adobe announced that it would end support for Flash by December 31, 2020. The main reasons were:

- Adoption of HTML5, WebGL, and WebAssembly, which offered similar functionality without the need for external plugins.
- Growing opposition from companies like Apple, which had already banned Flash from iPhone and iPad in 2010
- ==Chronic security issues and ongoing vulnerabilities== that made it a risk.
- As of January 1, 2021, Flash Player has been officially disabled and browsers have blocked the execution of Flash content

---
#### References
- HTTP traffic analysis of web application that used Flash, in [[(Bernard, Debar, et al., 2012)]]