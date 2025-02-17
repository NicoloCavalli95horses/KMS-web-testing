---
ID: 2024-12-11-09:53
tags:
  - definition
  - JavaScript
  - programmingLanguage
  - cyberSecurity
---
## Definition

Prototype pollution attacks allow you to *compromise an object you do not have access to* via *compromising an object you do have access to*, ==that shares a prototypal inheritance relationship with the object you want to attack==

> [!SUMMARY]
> A prototype pollution occurs when a lot of properties and methods are added on a shared ancestor (object prototype).
> 
>This can make the prototype heavier, slowing down the system or leading to a DoS in the worst case, or it can create conflicts with the properties of child objects.
> 
> Security issues may occur if the prototype pollution affects the behavior of children objects (e.g., `user.role` property is changed to `admin` because the role property is modified on the prototype)

When we create an empty object in JavaScript the created object already has many attributes and methods defined for it, for instance, the `toString` method. These attributes come from the prototype.

When we call the `toString` method on an object, the language runtime will look for the method defined on the class a given object belongs to.
- If it cannot find such a definition, it will look for it in the parent object, then its parent object, until it hits the top of the object hierarchy (==prototype chain ==)

> [!WARNING]
> If we modify a prototype shared by two or more objects, all objects will reflect this modification. They don’t even have to be in the same scope or otherwise related
   Most objects by default share the same prototype, so if we change the prototype of just one of these objects, we can change the behavior of all of them.

Merging two objects can expose the code to a prototype pollution attack — in fact, any function which recursively sets nested properties can create an attack vector (using a library like `lodash` or `deepmerge`, to merge JS object could be a valid solution) 

### Risks and issues
- Privilege escalation issues
- Property injection
- Cause a [[DoS (Denial of Service)]]
- Remote code execution in worst-case scenario (server-side, with `eval()` functions or DOM node generation)

### Is the prototype pollution a form of [[XSS (cross site scripting)]]?

The attack does not require a script injection. Prototype pollution can be done exploiting:
- public REST APIs
- input validation
- vulnerable libraries

### How to prevent prototype pollution

Using the `Object.create()` method instead of `{}` or `new Object()` when creating new objects. 
- This way, we can set the prototype of the created object directly via the first argument passed
- If we pass `null`, the created object will not have a prototype and therefore cannot be polluted
- ==This also means that common and useful prototype functions aren't available anymore on the prototype-less object== (which is often not a problem because new properties on that object have their own prototype)

```JavaScript

const a = Object.create(null);
console.log(a.toString()) // ERROR, a.toString is not a function

a.test = 123;
// toString() exist on the object 123 (numbers are objects in JS)
a.test = a.test.toString();
console.log(typeof a.test); // string 

```

Use `Object.freeze()` to prevent any changes to the prototype (it is possible to freeze the prototype directly)

External prototype pollution could be considered a form of code-injection (see [[XSS (cross site scripting)]])

## References
- https://learn.snyk.io/lesson/prototype-pollution/
- [[(Anastasia, Stamatia, 2024)]]
- [[(Hoffman, 2024)]]