<p align="center">
  <a href="https://github.com/JensVanhulst/IOT-Dashboard" target="_blank" rel="noopener noreferrer">
    <img width="200" src="https://cdn.pixabay.com/photo/2018/04/21/02/11/iot-3337536_960_720.png" alt="IOT dashboard">
  </a>
</p>

<p align="center">
   <a href="https://opensource.org/licenses/MIT">
    <img alt="GitHub" src="https://img.shields.io/github/license/JensVanhulst/IOT-Dashboard?style=for-the-badge">
  </a>

  <a href="https://github.com/JensVanhulst/IOT-Dashboard/network/dependencies">
    <img alt="David (path)" src="https://img.shields.io/david/JensVanhulst/IOT-Dashboard?label=Website%20dependencies&path=App%2Fclient&style=for-the-badge">
  </a>

  <a href="https://github.com/JensVanhulst/IOT-Dashboard/network/dependencies">
    <img alt="David (path)" src="https://img.shields.io/david/JensVanhulst/IOT-Dashboard?label=Server%20dependencies&path=App%2Fserver&style=for-the-badge">
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


# IOT-Dashboard

This project is a experimental IOT-Dashboard by which you can manage realtime data and display this data onto graphs. 
This dashboard also provides user authentication/roles, where the owner can manage the accounts and create new ones.

The dashboard also provides certain predictions about the sensor data, which indicates if something is about to happen. (tbd) 

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
  - [Documentation](#documentation)
  - [Versioning](#versioning)
  - [People](#people)
  - [Questions](#questions)
  - [Issues](#issues)
  - [License](#license)

---

## Getting Started

To get started follow the instructions below to work on the project or download the latest release.

## Installation & setup
If you want to contribute to this project, 
make sure you have the following tools installed on your system.

> Required tools

| Software name  | Version  | Link                         |
|----------------|----------| ---------------------------- |
| Node.js        | v12.16.2 | https://nodejs.org/          |
| MongoDB        | v4.2     | https://www.mongodb.com/     |
| Git            | @latest  | https://git-scm.com/         |  
| InfluxDB       | v1.8     | https://www.influxdata.com/  | 
| Feathers       | v4.5.3   | https://docs.feathersjs.com/ |

> Recommended tools

| Software name      | Version | Link                               |
|--------------------|---------| ---------------------------------- |
| Visual Studio Code | @latest | https://visualstudio.microsoft.com |
| Postman            | @latest | https://www.postman.com/           |
| GitHub Desktop     | @latest | https://desktop.github.com/        |

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

Make a directory on the server. 

1. Make sure the following software is installed on the server
   - Node (v12.6.1)
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

## Documentation

To check out the docs, visit [Documentation](https://vanhulstjens.gitbook.io/iot-dashboard/).

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## People

- **Jens Vanhulst** - _CONTRIBUTOR_ - [JensVanhulst](https://github.com/JensVanhulst)
- **Kasper Toetenel** - _CONTRIBUTOR_ - [Kasper Toetenel](https://github.com/SheldonPi1999)
- **Wesley Vrancken** - _CONTRIBUTOR_ - [Wesley Vranken](https://github.com/wesvr)
- **Emile Knaepen** - _CONTRIBUTOR_ - [Emile Knaepen](https://github.com/eknaepen)
- **Bart Stukken** - _SCRUM-MASTER_ - [Bart Stukken](https://github.com/Bart-PXL)
- **Koen Gilissen** - _PRODUCT-OWNER_ - [Koen Gilissen](https://github.com/koen-gilissen)

 <img width="200" src="https://www.pxl.be/Assets/website/pxl_algemeen/afbeeldingen/grotere_versie/logo_PXL_University%20of%20applied%20sciences%20and%20arts.png" alt="IOT dashboard">

## Questions

For questions and support please submit an issue.

## Issues

To create a new issue please follow the issue templates provided.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
