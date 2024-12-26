---
ID: 2024-08-08-11:48
tags:
  - definition
  - JavaScript
  - programmingLanguage
  - designPattern
---
## Definition

An IIFE *(Immediately Invoked Function Expression)* is a JavaScript function that executes immediately after it is defined. It is a common technique used to create a new scope of variables and protect your code from polluting the global namespace. The syntax of an IIFE includes an anonymous function wrapped in parentheses, followed by more parentheses to invoke it immediately.

```JavaScript
(function() {
    var _priv_ = "I'm a private variable";
    console.log(_priv_); // I'm a private variable
})();

```

### Advantages

**Scope Isolation**
IIFEs create a new lexical scope, preventing internal variables from polluting the global namespace. This is especially useful for avoiding variable conflicts.

**Conflict Prevention**
Since variables within an IIFE are not accessible from the outside, the risk of conflicts with other variables or functions defined in the global context is reduced.

**Closures**
IIFEs can capture and maintain private state using closures, which is useful for creating modules with encapsulated data and functions.

**Immediate Execution**
IIFEs are executed immediately after they are defined, which can be useful for initialization code that needs to be executed immediately.

### Disadvantages

**Code Readability**
Using IIFEs can make code less readable and more difficult to understand for programmers who are not familiar with this pattern.

**Complex Debugging**
Debugging IIFEs can be more complicated, as variables and functions are encapsulated and not accessible from the outside, making it more difficult to trace and troubleshoot problems.

**Not Ideal for Large Projects**
In very large projects, extensive use of IIFE can make code difficult to manage compared to more structured modules such as ES6 Modules.
With the introduction of ES6 modules, the use of IIFEs is less common and considered less modern than current development practices. ES6 modules offer native code import and export capabilities, which are more flexible and powerful.

## References
[[ref_javascript_the_good_parts]]