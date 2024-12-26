---
ID: 2024-08-03-15:39
tags:
  - JavaScript
---
# Prototype

JavaScript object inherits properties from a prototype object. The prototype itself can inherits from another object too. This process describes a prototype chain.

While primitive values are passed by their value, objects are ==passed as reference==. This means that they are never copied:

```JavaScript
const a = { test: true };
const b = a;
a.test = false;
console.log( b.test ); // false
```

Every object is linked to a prototype from which it can inherit properties - by default, this is **Object.prototype**. When you create a new object with *Object.create(),* you can select which object should be its prototype.

### Delegation

```JavaScript
const father = { brownEyes: true }
const son = Object.create( father );
console.log(son); // {}

// son object does not have the brownEyes key but this is found on the prototype object (father)
console.log(son.brownEyes); // true

console.log(son.unknownProperty); // undefined

// hasOwnProperty neglets the prototype chain
console.log(son.hasOwnProperty('brownEyes')); // false

```

The prototype link is used only in retrieval. If we try to retrieve a property from an object, and this object doesn't have it, JavaScript attempts to retrieve the property from the prototype object. If the prototype doesn't have the property too, the it goes to its prototype, and so on until the process finally bottoms out with Object.prototype. If no property is found, the output is undefined. This process is called delegation.

==If we add a property to a prototype, all the objects that inherit from that prototype can see that property immediately.==

### Enumeration

The for in loop can loop over all the property names of an object. The enumeration will include all the properties of all the prototypes objects. Use *hasOwnProperty()* to prevent undesired behaviors

Object properties are not sorted. Use an array if you need to list or execute actions in a given order.

### Delete

Delete operator will delete an object key, ignoring the prototypes. ==Removing a property from an object may bring to life a previously overwritten property, from the prototype==


```JavaScript
const deviceConfig = { state: 'idle' };
const robot = Object.create(deviceConfig);

// imagine the robot state changing over time
robot.state = 'init';
robot.state = 'running';
// ...
robot.state = 'paused';

delete robot.state

console.log( robot.state ) // idle
```

### Global abatement

Use a global object that acts as a container for your application will reduce the chance of bad interactions with other applications, widgets, libraries or plugin (see [[prototype pollution]])
