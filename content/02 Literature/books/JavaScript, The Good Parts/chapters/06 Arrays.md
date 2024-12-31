---
ID: 2024-08-21-14:40
tags:
  - JavaScript
---
# Arrays

Every array as a length property. It is not an upper bound, rather a value that increases as the array size increases. The length does not necessarily reflect the number of items stored in the array:

```JavaScript
  const arr = [ ];
  arr[999] = true;
  console.log(arr.length); // 1000;
 ```

You can shorten an array by manually decreasing the length

```JavaScript
  const arr = [1, 2, 3, 4];
  arr.length = 3;
  console.log(arr); // [1,2,3];
 ```

Since an array is really an object, we can append methods directly to an individual array

```JavaScript
const arr = [1, 2, 3, 4];
arr.sum = function () {
    return this.reduce((acc, curr) => acc + curr, 0);
}
const out = arr.sum();
console.log( out ); // 10
 ```