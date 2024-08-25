
| ID       | 2024-08-24-09:40 |
| -------- | ---------------- |
| **Tags** | #deploy #docker  |
## Introduction

Imagine you are running a web application that requires a specific Node.js version (e.g., v.17). Your application does not work if you try to run it using a different Node.js version, because the application is using the latest syntax and the latest supported methods.

In general, if you want to run an application effectively, you must meet a series of software prerequisites. In slang, it is said ==replicate the development environment== (that is the condition in which the application was developed).

The development environment includes a collection of procedures and tools required to run a software, ad example:
- specific Operating System at a specific version
- specific version of a specific language
- specific libraries or dependencies on which the application relies
- specific commands to be executed to initialize the application (e.g., `npm install`)

## A manual solution

In order to solve the aforementioned problem, you could manually install the required software versions, download all the dependencies manually and install them, solve conflicts, clean caches. You can install a [[VM (virtual machine)]] in order to emulate a different Operating System in your machine. This will work. But, obviously, it is very time and resource consuming. That's why Docker was an immediate success.

Problems related to VM installation:
- a VM has its own full operating system with its own kernel, and is typically slower, because it has to run on top on your current OS

## Why Docker is helpful

Docker was create to effortless replicate the development environment to ensure a smooth deploy and to ease code sharing between different machines. In order to do so, the core idea is to ==fully isolate== the piece of software you want to run, ==wrapping it with all the needed prerequisites==.

## Images and containers

Docker is basically a tool to create and manage *containers* and *images*
- an [[image]] is a template for a container. It describes what a container should have in order to run smoothly
- a ==container== is a running instance of an image: a lightweight, standalone, executable package of software that includes everything needed to run an application
- containers can communicate to each other or to the machine, if they need to, by exposing a [[port]]

This kind of isolation and standardization of the execution:
- prevent a time consuming and [[error]] prone manual configuration
- create a standard solution that is portable and replicable
- is lightweight: containers share the machine's OS system kernel and do not require an OS per application, reducing allocation costs and improving efficiency
- is secure, preventing unintentional or malicious communication between the container and its surroundings

## Installation notes

While for both Linux and Mac the installation is quite straightforward, Windows require a prior installation of a [[WSL (Windows Subsystem for Linux)]]. This because we need a Linux environment to run Docker and a WSL allows us to avoid the installation of a whole OS.

## References
[Docker](https://www.docker.com/resources/what-container/)
[The Net Ninja - Docker Course](https://www.youtube.com/watch?v=31ieHmcTUOk&list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7)
