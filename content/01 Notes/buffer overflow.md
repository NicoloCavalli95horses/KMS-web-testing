---
ID: 2024-12-16-10:47
tags:
  - definition
  - cyberSecurity
  - bufferOverflow
---
## Definition

==Buffer overflow is a software vulnerability that occur when the amount of data in a buffer, which is a sequential section of computing memory that hold data temporarily, exceeds its storage capacity.==

That extra data overflows into adjacent memory locations and corrupts or overwrites the data in those locations
- Writing outside the bounds of a block of allocated memory can corrupt data, crash the program, lead to [[DoS (Denial of Service)]] or cause the execution of malicious code
- the overflow can be exploited by hackers, to gain unauthorized access to corporate systems

A buffer overflow condition exists when a program attempts to put more data in a buffer than it can hold, or when a program attempts to put data in a memory area past a buffer. 

It is one of the best-known software security vulnerabilities yet remains fairly common.

## What is a buffer?

- In a stream video, a buffer may be used to temporarily memorize data so as to assure a fluid reproduction.
- In an OS, a buffer is used to read or write file on the hard disk

A buffer is an array-like structure that has a fixed size and that has to be handled manually. Not every programming language let the user directly manipulate buffers. With C/C++ allow memory management, high level languages generally handle automatically this problem.

## Call stack overflow in web applications

Attackers may corrupt a web application’s execution [[callstack]], performing a "buffer overflow" attack in a context similar to a low level buffer:
- technically the call stack may be considered a buffer since it has a limited and fixed size and it is used for storing data temporarily
- similarly to a buffer overflow attack, a call stack overflow may lead to DOS, to executing arbitrary code, and take control over the machine

Flaws can exist in both application servers and web servers, ==specially web applications that use libraries like graphics libraries.== 

```JavaScript
function recursiveFunction() {
  recursiveFunction();
  // RangeError: Maximum call stack size exceeded
}

recursiveFunction();
```

## Detect buffer overflows

- [[static analysis]] techniques:
	- the program is scanned to discover the code segments that are possibly vulnerable. Each candidate has to be manually inspected to confirm the vulnerability
	- the number of false positive is often very high, as well as the human effort required
- [[dynamic analysis]] techniques: a special code is inserted into software so that buffer overflow occurrences can be detected and properly processed.
	- The false positive are rare because they have software execution information 
	- The method is computationally expensive because the inserted code need to be executed for each buffer operation and function call
- Application security tools
	- STOBO is a tool that can execute a systematic testing of buffers overflows
	- Checkmarx
	- HP Fortify: supports most used language, including JavaScript, Java, C/C++, PHP, Python, XML/HTML
	- Klocwork
	- Coverty
	- Splint

### Examples

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
- https://owasp.org/www-community/vulnerabilities/Buffer_Overflow
- https://www.fortinet.com/resources/cyberglossary/buffer-overflow#:~:text=Also%20known%20as%20a%20buffer,the%20data%20in%20those%20locations.
- [[ref_strengthening_web_app_security_buffer_overflow]]
- [[ref_empirical_study_detecting_buffer_overflow]]
