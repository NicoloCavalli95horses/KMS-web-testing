---
ID: 2025-02-07-10:11
tags:
  - "#definition"
  - JSON
  - SEO
  - structuredData
---
## Definition

JSON is a lightweight, language-independent data interchange format.
It is easy to parse and easy to generate, however:
- it is difficult to integrate JSON from different sources, ==as the data may contain keys that conflict with other data sources.==
- JSON has no built-in support for hyperlinks, which are a fundamental building block on the Web. 

```json
{
  "name": "Manu Sporny",
  "homepage": "http://manu.sporny.org/",
  "image": "http://manu.sporny.org/images/manu.png"
}
```

It's obvious to humans that the data is about a person whose name is "Manu Sporny" and that the homepage property contains the URL of that person's homepage. A machine doesn't have such an intuitive understanding and sometimes, even for humans, it is difficult to resolve ambiguities in such representations. 

This problem can be solved by using unambiguous identifiers. That's why JSON-LD was developed:

```json
// The '@id' keyword means 'This value is an identifier that is an IRI'
{
  "http://schema.org/name": "Manu Sporny",
  "http://schema.org/url": { "@id": "http://manu.sporny.org/" }, 
  "http://schema.org/image": { "@id": "http://manu.sporny.org/images/manu.png" }
}
```

### What is the purpose of JSON-LD

As other structured data, JSON-LD improve the visibility in search engines like Google, allowing the generation of ==rich snippets==
- better indexing
- rich snippets
- CTR (click-through rate) improved
- improved reliability

---
#### References
- https://www.w3.org/TR/2014/REC-json-ld-20140116/

