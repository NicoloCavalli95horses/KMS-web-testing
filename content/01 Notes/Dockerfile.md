---
ID: 2024-09-12-10:43
tags:
  - definition
  - docker
  - deploy
  - CI
  - CD
---
## Main concepts

A [[Dockerfile]] describes how the image is composed.
It is basically a list of all the different layers of an image (or it gives the instructions in order to create that layer). 

A Dockerfile is a set of instruction. Generally speaking, each line of the file kind of represents a different layer of the image:

```Dockerfile
# the parent layer (Node.js v.17 with Alpine Linux distribution)
FROM node:17-alpine

# it tells docker to use this path as the base from the working relative path
WORKDIR /app

# copy all the source code: from → to (specified as relative paths)
COPY . .

# instructions used to install the dependencies
RUN npm install

# define a port to expose (if the app needs one)
EXPOSE 4000

# instructions used by a container to run the application
CMD ["node", "app"]
```

## Build an image

`docker build -t myApp .`  → create an image using the Dockerfile instructions. 
`-t` → specify a tag to be used to identify the image  
`.` → relative path to the Dockerfile from the cd (if you are in the same folder of the Dockerfile obviously)

## Docker ignore

Most of the time is useful to specify a `.dockerignore` file to prevent the copy of unnecessary code.

## References
[Docker](https://www.docker.com/resources/what-container/)
[The Net Ninja - Docker Course](https://www.youtube.com/watch?v=31ieHmcTUOk&list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7)
