---
ID: 2024-12-16-10:47
tags:
  - definition
  - cyberSecurity
---
## Definition

A buffer overflow condition exists when a program attempts to put more data in a  buffer than it can hold, or when a program attempts to put data in a memory area past a buffer.

In this case, a buffer is a sequential section of memory allocated to contain anything from a character string to an array of integers. 

==Writing outside the bounds of a block of allocated memory can corrupt data, crash the program, or cause the execution of malicious code.==

### Example in C

```C
#include <stdio.h>
#include <string.h>

void vulnerableFunction(char *input) {
    char buffer[8];
    strcpy(buffer, input); // no control over the input size
    printf("Buffer content: %s\n", buffer);
}

int main() {
    char input[20] = "veryLongInput";
    vulnerableFunction(input);
    return 0;
}
```

In high level languages, this problems are prevented by the programming language, which manages the memory allocation automatically. However, it is still possible to create a buffer overflow-like issue by performing operation with huge numbers:

```JavaScript

let hugeArray = [];
for (let i = 0; i < 1e10; i++) {
    hugeArray.push(i); // will crash
}

```
## References
https://owasp.org/www-community/vulnerabilities/Buffer_Overflow