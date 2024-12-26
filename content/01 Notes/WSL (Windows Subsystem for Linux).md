---
ID: 2024-08-24-10:46
tags:
  - linux
  - wsl
  - os
  - tool
---
## Main concepts

WSL (Windows Subsystem for Linux) is a Windows feature that allows you to run a Linux environment directly inside Windows, without having to install a [[VM (virtual machine)]] such  or configure a [[dual boot]]. In practice, it's like having a "virtual" Linux that runs inside your Windows operating system.

## What is it for?

WSL is useful for developers, system administrators, and anyone who works with typical Linux tools or applications, but who prefer (or need) to work in a Windows environment.
- ==A WSL allows you to run Linux commands, scripts, and software directly from Windows, as if you were working on a native Linux system==

## Advantages

**Integration**
WSL is tightly integrated with Windows, so it's easy to pass files and commands between Windows and Linux. You can, for example, edit a file in a text editor on Windows and then compile or run it in Linux without having to transfer the file from one operating system to the other.

**Efficiency**
Compared to using a virtual machine, WSL uses fewer system resources (memory, CPU, etc.), since it doesn't need to run an entire separate operating system.

**Ease of use**
It's simple to install and configure. There's no need to reboot your computer or do complex hard drive partitioning like dual booting.

**Support for multiple distributions**
WSL offers a choice of multiple Linux distributions (Ubuntu, Debian, Fedora, etc.), which can be installed directly from the Microsoft store.

## Disadvantages

**Hardware limitations**
WSL doesn't offer full access to all hardware features like a native Linux installation. For example, it may not support direct USB or GPU access for some advanced applications.

**Limited performance**
While WSL 2 (the latest version of WSL) offers improved performance by using a full-fledged Linux kernel, performance can still be slower than a native Linux installation in some cases.

**Software Compatibility**
Some software or services that require direct access to the Linux kernel may not work properly or may not be supported.

## Real-world example

Imagine you are a web developer working on a web application written in Python using the Django framework, which is typically developed and run on Linux. With WSL, you can install Ubuntu on Windows and work with the Linux commands you use to manage your development environment, such as git, pip, virtualenv, and python Manage.py runserver.

You can then develop your application on Windows, test it in a real Linux environment, and still use your favorite development tools on Windows, such as Visual Studio Code.

In short, WSL provides a convenient and efficient way to combine the best of both worlds: the flexibility of Linux with the accessibility and familiarity of Windows.