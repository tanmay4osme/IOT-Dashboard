<p align="center">
  <a href="https://github.com/JensVanhulst/IOT-Dashboard" target="_blank" rel="noopener noreferrer">
    <img width="100" src="/App/website/public/android-chrome-512x512.png" alt="Vue logo">
  </a>
</p>

<p align="center">
   <a href="https://opensource.org/licenses/MIT">
    <img alt="GitHub" src="https://img.shields.io/github/license/JensVanhulst/IOT-Dashboard?style=for-the-badge">
  </a>

  <a href="https://github.com/JensVanhulst/IOT-Dashboard/network/dependencies">
    <img alt="Libraries.io dependency status for GitHub repo" src="https://img.shields.io/librariesio/github/JensVanhulst/IOT-Dashboard?style=for-the-badge">
  </a>

  <a href="https://github.com/JensVanhulst/IOT-Dashboard/releases">
    <img alt="GitHub release (latest by date including pre-releases)" src="https://img.shields.io/github/v/release/JensVanhulst/IOT-Dashboard?include_prereleases&style=for-the-badge">
  </a>

  <a href="https://github.com/JensVanhulst/IOT-Dashboard/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/JensVanhulst/IOT-Dashboard?style=for-the-badge">
  </a>

  <a href="https://github.com/JensVanhulst/IOT-Dashboard/graphs/contributors">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/JensVanhulst/IOT-Dashboard?style=for-the-badge" alt="Contributions">
  </a>

  <a href="#">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/JensVanhulst/IOT-Dashboard?style=for-the-badge" alt="Language">
  </a>

</p>

---

# IOT-Dashboard

One Paragraph of project description goes here

---

## Table of Contents

- [IOT-Dashboard](#iot-dashboard)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation & setup](#installation--setup)
  - [Installation for development](#installation-for-development)
    - [Clone](#clone)
    - [Setup](#setup)
    - [To run development server (client)](#to-run-development-server-client)
    - [To run development server (server)](#to-run-development-server-server)
    - [Build application (client)](#build-application-client)
    - [Build application (server)](#build-application-server)
  - [Installation for production](#installation-for-production)
  - [Features](#features)
  - [Documentation](#documentation)
  - [Versioning](#versioning)
  - [People](#people)
  - [Questions](#questions)
  - [Issues](#issues)
  - [License](#license)

---

## Getting Started

To get started follow the instructions below to install the code or install a release version.

## Installation & setup

## Installation for development

### Clone

- Clone this repo to your local machine using `https://github.com/JensVanhulst/IOT-Dashboard.git`

### Setup

> Install all packages needed

```shell
$ cd IOT-Dashboard/App/client
$ npm install

$ cd IOT-Dashboard/App/server
$ npm install
```

### To run development server (client)

> If you want to develop on web version run the commands below
> This will start a local development server on `http://localhost:8080`

```shell
$ cd IOT-Dashboard/App/client
$ npm run serve
```

> If you want to develop for electron app run commands below
> This will open an electron window with hot reloading

```shell
$ cd IOT-Dashboard/App/client
$ npm run electron:serve
```

### To run development server (server)

> This will start a local development server on `http://localhost:5000`

```shell
$ cd IOT-Dashboard/App/server
$ npm start
```

### Build application (client)

> If you want to build for electron app make sure you are in the App folder and run :
> This will open an electron window with hot reloading

```shell
$ npm run electron:build
```

> If you want to build the web version run :
> This will create a `dist` folder that you need to transfer the content to the `public` folder.

```shell
$ npm run build
```

### Build application (server)

Make a directory on the server ...

1. Make sure the following software is installed on the server
   - Node LTS
   - Docker & docker-compose
2. Run the following commands

```shell
$ docker-compose build
```

> To spin up the server instance run:

```shell
$ docker-compose up
```

> To stop the server instance run :

```shell
$ docker-compose down
```

> To get into a docker container and get a bash shell run:

```shell
$ docker exec -it <container name> /bin/bash
```

## Installation for production

- Install the electron version
  - Go to [Releases](https://github.com/JensVanhulst/IOT-Dashboard/releases) and pick your operating system package
- Go to website : `http://193.190.154.184:24070/` or `http://intelliflow.pxl-ea-ict.be:24070/`

## Features

## Documentation

To check out the docs, visit [Documentation](https://vanhulstjens.gitbook.io/iot-dashboard/).

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## People

- **Jens Vanhulst** - _CONTRIBUTOR_ - [JensVanhulst](https://github.com/JensVanhulst)
- **Kasper Toetenel** - _CONTRIBUTOR_ - [Kasper Toetenel](https://github.com/SheldonPi1999)
- **Wesley Vrancken** - _CONTRIBUTOR_ - [Wesley Vranken](https://github.com/wesvr)
- **Emile Knaepen** - _CONTRIBUTOR_ - [Emile Knaepen](https://github.com/eknaepen)
- **Bart Stukken** - _TEACHER_ - [Bart Stukken](https://github.com/Bart-PXL)

## Questions

For questions and support please use the email address: jens.vanhulst@student.pxl.be.
The issue list of this repo is **exclusively** for bug reports and feature requests.

## Issues

Please make sure to read the [Issue Reporting Checklist]() before opening an issue. Issues not conforming to the guidelines may be closed immediately.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
