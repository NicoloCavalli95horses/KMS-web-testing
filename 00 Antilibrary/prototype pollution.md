| ID       | 2024-12-11-09:53         |
| -------- | ------------------------ |
| **Tags** | #definition #JavaScript  |
## Definition

> A prototype pollution occurs when a lot of properties and methods are added on a shared ancestor (object prototype).
> 	- this can make the prototype heavier and can create conflits with the children objects properties
> 	- security issues may occur if the prototype pollution affects the behavior of children objects

When we create an empty object in JavaScript the created object already has many attributes and methods defined for it, for instance, the **toString** method. These attributes come from the prototype.

When we call the **toString** method on an object, the language runtime will look for the **toString** method defined on the class a given object belongs to. If it cannot find such a definition, it will look for it in the parent object, then its parent object, until it hits the top of the object hierarchy (==prototype chain ==)

> If we modify a prototype shared by two or more objects, all objects will reflect this modification
	- They don’t even have to be in the same scope or otherwise related. And most objects by default share the same prototype, so if we change the prototype of just one of these objects, we can change the behavior of all of them.


Merging two objects can expose the code to a prototype pollution attack — in fact, any function which recursively sets nested properties can create an attack vector

### How to prevent prototype pollution

Using the **Object.create()** method instead of **{}** or **new Object()** when creating new objects. 
- This way, we can set the prototype of the created object directly via the first argument passed
- If we pass null, the created object will not have a prototype and therefore cannot be polluted
- ==This also means that common and useful prototype functions aren't available anymore==

```JavaScript

const a = Object.reate(null);
a.toString

```

## References
https://learn.snyk.io/lesson/prototype-pollution/
[[ref_managing_security_vulnerabilities_dependencies_react]]