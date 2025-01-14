---
ID: 2024-12-16-10:47
tags:
  - definition
  - cyberSecurity
  - bufferOverflow
---
## Definition

Buffer overflow is a software coding error or vulnerability that can be exploited by hackers to gain unauthorized access to corporate systems. It is one of the best-known software security vulnerabilities yet remains fairly common.

The software error focuses on buffers, which are sequential sections of computing memory that hold data temporarily as it is transferred between locations.
- Buffer overflow occurs when the amount of data in the buffer exceeds its storage capacity
- ==That extra data overflows into adjacent memory locations and corrupts or overwrites the data in those locations.==

A buffer overflow condition exists when a program attempts to put more data in a  buffer than it can hold, or when a program attempts to put data in a memory area past a buffer. 

> [!WARNING]
> Writing outside the bounds of a block of allocated memory can corrupt data, crash the program, or cause the execution of malicious code

## Attacks in web applications

Attackers use a buffer overflow to corrupt a web application’s execution stack, execute arbitrary code, and take over a machine.
Flaws in buffer overflows can exist in both application servers and web servers, ==specially web applications that use libraries like graphics libraries.== 

Buffer overflows can also exist in custom web application codes. This is more likely because they are given less scrutiny by security teams but are less likely to be discovered by hackers and more difficult to exploit.

## Detect buffer overflows

- Static analysis techniques
- Ad hoc tools (STOBO tool execute a systematic testing of buffers overflows)

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
https://www.fortinet.com/resources/cyberglossary/buffer-overflow#:~:text=Also%20known%20as%20a%20buffer,the%20data%20in%20those%20locations.
[[ref_strengthening_web_app_security_buffer_overflow]]