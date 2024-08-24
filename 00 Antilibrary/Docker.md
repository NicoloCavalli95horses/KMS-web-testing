
| ID       | 2024-08-24-09:40 |
| -------- | ---------------- |
| **Tags** | #deploy          |
## Introduction

Imagine you are running a web application that requires a specific Node.js version (e.g., v.17). Your application does not work if you try to run it using a different Node.js version, because the application is using the latest syntax and the latest supported methods.

In general, if you want to run an application effectively, you must meet a series of software prerequisites. In slang, it is said ==replicate the development environment== (that is the condition in which the application was developed).

The development environment includes a collection of procedures and tools required to run a software, ad example:
- specific Operating System at a specific version
- specific version of a specific language
- specific libraries or dependencies on which the application relies
- specific commands to be executed to initialize the application (e.g., `npm install`)
## A manual solution

In order to solve the aforementioned problem, you could manually install the required software versions, download all the dependencies manually and install them, solve conflicts, clean caches. You can install a Virtual Machine in order to emulate a different Operating System in your machine. This will work. But, obviously, it is very time and resource consuming. That's why Docker was an immediate success.
## Why Docker is helpful

Docker was create to effortless replicate the development environment to ensure a smooth deploy and to ease code sharing between different machines. In order to do so, the core idea is to ==fully isolate== the piece of software you want to run, ==wrapping it with all the needed prerequisites==.
- A container is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.

Docker is a tool to create and manage *containers* and *images*
- an image is a template for a container
- a container is a running instance of an image

An image is a wrapper that allows an application to run ==in complete isolation, fully replicating the development environment to avoid issues related different  versions or==,  specifying 
## References
https://www.docker.com/resources/what-container/
