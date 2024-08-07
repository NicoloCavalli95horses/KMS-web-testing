
| ID       | 2024-08-07-10:27 |
| -------- | ---------------- |
| **Tags** | #JavaScript      |

# Functio
Functions are used for code reuse, information hiding, and composition.
Function are objects, and therefore presents a prototype chain, that may includes one or more Function.prototipe and that will end up in the SAME Object.prototype. Everything in JavaScript is included into a giant Object.prototype. If we add a property at this root level, both all the functions and all the new created objects will access this property.

Object.prototype.newProperty = 'This is a new property';

const myObject = {};
function myFunction() {}

console.log(myObject.newProperty); // "This is a new property"
console.log(myFunction.newProperty); // "This is a new property

Note that since function are objects, we can access functions properties with the dot syntax

So what is the difference between an object and a function?
 - a function can be invoked
 - a function have parameters
 - in addition to the declared parameters, every function receives two additional parameter, arguments, and this

*Arguments*
Arguments is a silent keyword that we can use to get an array of all the parameters, without specifying their name. This give us some flexibility but it is not very used

function func1(a, b, c) {
  console.log(arguments[0]); // 1
  console.log(arguments[1]); // 2
  console.log(arguments[2]); // 3
}

func1(1, 2, 3);

The rest operator '...' has a similar function, but it allows us to freeze some parameters while simultaneously allowing an indefinite number of parameters

function test(a, ...args) {
  console.log('the value of a:', a);
  console.log('the other values:', ...args);
}

test(10, 20, true, []);

*This*
