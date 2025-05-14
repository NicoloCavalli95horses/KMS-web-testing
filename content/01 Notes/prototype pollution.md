---
ID: 2024-12-11-09:53
tags:
  - definition
  - JavaScript
  - programmingLanguage
  - cyberSecurity
  - prototypePollution
---
## Definition

Prototype pollution attacks allow you to *compromise an object you do not have access to* via *compromising an object you do have access to*, ==that shares a prototypal inheritance relationship with the object you want to attack==

The prototype pollution attack occurs when the objects receive properties and/or values that they are not designed to have [[(Kluban, Mannan, et al., 2024)]]

> [!SUMMARY]
> A prototype pollution occurs when a lot of properties and methods are added on a shared ancestor (object prototype).
> 
>This can make the prototype heavier, slowing down the system or leading to a [[DoS (Denial of Service)]] in the worst case, or it can create conflicts with the properties of child objects.
> 
> Security issues may occur if the prototype pollution affects the behavior of children objects (e.g., `user.role` property is changed to `admin` because the role property is modified on the prototype)

When we create an empty object in JavaScript the created object already has many attributes and methods defined for it, for instance, the `toString` method. These attributes come from the prototype.

When we call the `toString` method on an object, the language runtime will look for the method defined on the class a given object belongs to.
- If it cannot find such a definition, it will look for it in the parent object, then its parent object, until it hits the top of the object hierarchy (==prototype chain ==)

> [!WARNING]
> If we modify a prototype shared by two or more objects, all objects will reflect this modification. They don’t even have to be in the same scope or otherwise related
   Most objects by default share the same prototype, so if we change the prototype of just one of these objects, we can change the behavior of all of them.

Merging two objects can expose the code to a prototype pollution attack — in fact, any function which recursively sets nested properties can create an attack vector (using a library like `lodash` or `deepmerge`, to merge JS object could be a valid solution) 

### Trends

Many researches have focused on the identification of inputs that contaminate a prototypical object’s property, but little effort have been put on the analysis of the code affected by the prototype pollution (*gadgets*) [[(Liu, An, et al., 2024)]]
- studying [[prototype pollution gadgets]] is a new research field that aim at analyzing the code impacted by the vulnerabilities and how the [[sink function]] is reached from the input

### Risks and issues

On the front-end [[(Hakim, 2023)]] (p.3), [[(Liu, An, et al., 2024)]]:
- [[XSS (cross site scripting)]] (especially DOM-XSS)
- HTML injection
- Cause a [[DoS (Denial of Service)]]
- [[SQLIA (SQL injection attack)]]
- [[session hijacking]]
- [[RCE (Remote Code Execution)]]
- cookie theft/manipulation
- URL manipulation/[[redirect attack]]

[[(Peng Zhou, Yuhan Gao, et al., 2024)]]:
- Authentication bypass
- Account Takeover (ATO)
- Sanitizer bypass

**How a prototype pollution vulnerability can lead to XSS**

```txt
POST /api/savePreferences
Content-Type: application/json

{
  "__proto__": {
    "isAdmin": true,
    "template": "<img src=x onerror=alert(1)>"
  }
}
```

On the server-side [[(Hakim, 2023)]], [[(Liu, An, et al., 2024)]]:
- Privilege escalation issues
- [[RCE (Remote Code Execution)]] in worst-case scenario (`eval()` functions or DOM node generation)

### Is prototype pollution a [[XSS (cross site scripting)]]?

The attack does not require a script injection. Prototype pollution can be done exploiting:
- public REST APIs
- input validation
- vulnerable libraries

### How to prevent prototype pollution

Using the `Object.create()` method instead of `{}` or `new Object()` when creating new objects. 
- This way, we can set the prototype of the created object directly via the first argument passed
- If we pass `null`, the created object will not have a prototype and therefore cannot be polluted
- ==This also means that common and useful prototype functions aren't available anymore on the prototype-less object== (which is often not a problem because new properties on that object have their own prototype)
- `Object.create(null)` is effective but lack useful features and methods compared to regular objects [[(Katulanda, Henaka Arachchi, et al., 2023)]] 

```JavaScript

const a = Object.create(null);
console.log(a.toString()) // ERROR, a.toString is not a function

a.test = 123;
// toString() exist on the object 123 (numbers are objects in JS)
a.test = a.test.toString();
console.log(typeof a.test); // string 

```

Use `Object.freeze()` to prevent any changes to the prototype (it is possible to freeze the prototype directly) [[(Hakim, 2023)]]
- only immediate properties get freezed, not nested objects [[(Katulanda, Henaka Arachchi, et al., 2023)]] 
External prototype pollution could be considered a form of code-injection (see [[XSS (cross site scripting)]])

A popular JavaScript utility library, Lodash, implements input filtering to injection sinks against prototype defining keywords, such as proto, constructor, and prototype [[(Hakim, 2023)]]

Sometimes developers try to fix prototype pollution implementing a partial fix. Checking for the value of __proto__ is not enough to secure a statement from the issue, because constructor or prototype can still be used in a malicious way [[(Kluban, Mannan, et al., 2024)]]

From  [[(Peng Zhou, Yuhan Gao, et al., 2024)]]:
- **Dynamic fuzzing**: run each JavaScript function with a set of function inputs that are purposely crafted to trigger the pollution (*fuzzing inputs*). Then, check if the prototype properties have been polluted accordingly
- **Static analysis**: track some polluted taints from the selected sources (i.e., the inputs controlled by external users) to a set of predefined [[sink function]]s. A vulnerability is confirmed if there is at least one path the taint can be delivered from the sources to the sink (see [[static taint analysis]])

---

References
- https://learn.snyk.io/lesson/prototype-pollution/
- [[(Anastasia, Stamatia, 2024)]]
- [[(Hoffman, 2024)]]
- [[(Hakim, 2023)]]
- Discussed in [[(Katulanda, Henaka Arachchi, et al., 2023)]] in the context of using ML to detect HTTPS-based malware transmission

Project SLR
- [[(Liu, An, et al., 2024)]]
- [[(Kluban, Mannan, et al., 2024)]]
- [[(Peng Zhou, Yuhan Gao, et al., 2024)]]