---
ID: 2024-09-12-10:27
tags:
  - definition
  - docker
  - deploy
  - CI
  - CD
---
## Main concepts

**Docker hub** is an online repository for [[Docker Image]]. 
- as store our code in GitHub, we store our images in docker hub
- it contains images that can be used as a first layer (parent layer) in our images (E.g., Node runtime)
## How to download an image

`docker pull node` : download the latest image of Node.js
`docker pull node 17-alpine` : specify the Node.js version and the Linux distribution to use

> [!NOTE] Note
> It is often recommended to specify the image version and the Linux distribution to make it clear and to fix it (otherwise the latest one will be used insted)

## References
[Docker hub](https://hub.docker.com)

