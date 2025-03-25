---
ID: 2024-08-24-11:04
tags:
  - docker
  - deploy
  - definition
  - CI
  - CD
---
## Main concepts

Images are ==blueprint== for containers and are ==read only==. 

An image include:
- a runtime environment (e.g., Node, the runtime environment for JavaScript)
- the whole application code
- any dependencies
- extra configuration (e.g., [[ENV (environment variables)]])
- commands (e.g., `npm install`)

Containers are ==running instance of an image==:  a container runs our application
- containers are isolated process

Given the fact that an image is a blueprint of an application, is completely shareable (even though the source code is present and it may include heavy files).

An image can produce ==more containers==

## How an image is composed

Images are made up from several "layers"
- the base layer is a ==parent image==, that includes a lightweight OS and the runtime environment. Common parent images are found in [[Docker Hub]]
- the source code, with commands needed to execute it
- dependencies
## References
[The Net Ninja - docker course](https://www.youtube.com/watch?v=ZVQmnziXEpA&list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7&index=4)