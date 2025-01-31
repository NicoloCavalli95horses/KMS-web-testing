---
ID: 2025-01-31-13:41
tags:
  - "#definition"
  - softwareEngineering
---
## Definition

The call stack is a data structure used by your program to ==keep track of executing functions and their calls==.
- Each time a function is called, it is "pushed" onto the stack
- when the function finishes executing, it is "popped" off the stack

This process follows a [[LIFO (last in, first out)]], meaning the last function to enter the stack is the first to complete and be removed.

### How the call stack works:

- Caller function (caller): when a function is invoked, the program stores a **frame** of the function in the call stack, containing information such as the return point (where to resume execution after the function ends), parameters, and local variables
- Called function ([[callee]]): when a called function finishes executing, its frame is removed from the stack, and execution resumes at the return point in the calling function

### Example

```Javascript
function a() {
  console.log("executing A");
  b();
}

function b() {
  console.log("executing B");
}

a();
```

In the example:
- When the `function a()` is called, its frame is added to the call stack.
- Inside `a()`, the function `b() `is called. The frame of `b()` is then pushed onto the call stack
- When `b()` finishes its execution, its frame is removed from the stack, and execution resumes at `a()`
- When `a()` finishes, its frame is removed and execution ends.

The call stack is essential for controlling the flow of execution of a program and for managing recursion.

If the call stack becomes too full, due to too many calls, an error called stack overflow occurs. This phenomenon is equivalent to the concept of [[buffer overflow]], but at a higher level of abstraction.