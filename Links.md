## 1. Databases

### 1.1 - MongoDB

> This database is used for authentication and storage of user actions like notifications and logs.
> To use MongoDB with nodejs we use a ODM like mongoose.

- Documentation

  - https://docs.mongodb.com/manual/
  - https://mongoosejs.com/docs/guide.html

- Tutorials
  - https://www.youtube.com/watch?v=WDrU305J1yw
  - https://www.youtube.com/watch?v=5e1NEdfs4is
  - https://www.youtube.com/watch?v=vjf774RKrLc&t=2819s
  - https://www.youtube.com/watch?v=cVYQEvP-_PA

### 1.2 - InfluxDB

> This database will be used for the realtime storage of the sensordata. Also we want a second database cluster
> for the backup.
> To interact with the database we use a node driver : https://github.com/node-influx/node-influx

- Documentation

  - https://docs.influxdata.com/influxdb/v1.8/

- Tutorials
  - https://www.youtube.com/watch?v=OoCsY8odmpM
  - https://www.youtube.com/watch?v=KfcS4VsGJY4

## 2. Communication

### 2.1 - MQTT Broker

> To setup communication with the sensors we need a MQTT broker

- https://github.com/moscajs/aedes

- Documentation
  - https://github.com/moscajs/aedes/tree/master/docs

### 2.2 - Protobuffers

> We use protobuffers as an alternative for JSON format (faster).
> We use `protobuf.js` for decoding and encoding the buffers.

- Documentation
  - https://developers.google.com/protocol-buffers
  - https://github.com/protobufjs/protobuf.js

## 3. Server

### 3.1 - Node.js

https://nodejs.org/en/docs/

### 3.2 - Feathers

> Feathers.js is a server framework for building a Realtime and/or REST API.

- Documentation

  - https://feathersjs.com/

- Tutorials
  - https://www.youtube.com/watch?v=eXnKKnaoA08&list=PLM_i0obccy3uvP4ZMI6NwTzM0BvYBQ7Xd
  - https://www.youtube.com/watch?v=8y33WCVkLwc&t=534s

It uses all of these technologies:

- Helmet

  > Helmet helps you secure your Express apps by setting various HTTP headers. It’s not a silver bullet, but it can help!

  - https://www.npmjs.com/package/helmet
  - https://helmetjs.github.io/docs/

- cors

  > CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

  - https://www.npmjs.com/package/cors
  - https://github.com/expressjs/cors#readme

- Winston

  > A logger for just about everything.

  - https://www.npmjs.com/package/winston
  - https://github.com/winstonjs/winston#readme

- express
  > Fast, unopinionated, minimalist web framework for node.
  - https://www.npmjs.com/package/express
  - https://github.com/expressjs/express

### 3.3 - JWT

> JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.

- Documentation

  - https://jwt.io/introduction/
  - https://www.youtube.com/watch?v=7Q17ubqLfaM

- Tutorials
  - https://www.youtube.com/watch?v=2jqok-WgelI&t=1542s
  - https://www.youtube.com/watch?v=7nafaH9SddU

### 3.4 - Docker

> Docker provides a way to run applications securely isolated in a container, packaged with all its dependencies and libraries.

- Documentation

  - https://www.docker.com/resources/what-container
  - https://docs.docker.com/

- Tutorials
  - https://www.youtube.com/watch?v=_dfLOzuIg2o
  - https://www.youtube.com/watch?v=pGYAg7TMmp0
  - https://www.youtube.com/watch?v=fqMOX6JJhGo
  - https://www.youtube.com/watch?v=Kyx2PsuwomE&t=1582s

## 4. Client

### 4.1 - Vue.js

> Vue is a progressive framework for building user interfaces.

- Documentation

  - https://vuejs.org/v2/guide/
  - https://github.com/vuejs/vue

- Tutorials
  - https://www.youtube.com/watch?v=Wy9q22isx3U
  - https://www.youtube.com/watch?v=nhBVL41-_Cw
  - https://www.youtube.com/watch?v=-uCUCmrNgeo&t=1133s
  - https://www.youtube.com/watch?v=lYWYWyX04JI&t=1094s
  - https://www.youtube.com/watch?v=Wy9q22isx3U

### 4.2 - Vuex

Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official devtools extension
to provide advanced features such as zero-config time-travel debugging and state snapshot export / import. (copied from : https://vuex.vuejs.org/ )

- Documentation

  - https://vuex.vuejs.org/

- Tutorials
  - https://www.youtube.com/watch?v=5lVQgZzLMHc
  - https://www.youtube.com/watch?v=LW9yIR4GoVU
  - https://www.youtube.com/watch?v=BGAu__J4xoc&list=PL4cUxeGkcC9i371QO_Rtkl26MwtiJ30P2

### 4.3 - FeathersVUEX

A vuex wrapper to work with Feathers backend

- Documentation
  - https://vuex.feathersjs.com/api-overview.html

### 4.4 - Feathers client

Client library for a feathers backend

- Documentation
  - https://docs.feathersjs.com/api/client.html

### 4.5 - Axios

Library for making http requests

- Documentation
  - https://github.com/axios/axios

### 4.6 - vee-validate

A form validation library for vuejs

- Documentation
  - https://logaretm.github.io/vee-validate/guide/basics.html

### 4.7 - Vuetify.js

A material design component framework

- Documentation
  - https://vuetifyjs.com/en/getting-started/quick-start/

### 4.8 - Electron

A library to build cross-platform desktop apps

To build the vue app for production : https://github.com/nklayman/vue-cli-plugin-electron-builder

- Documentation
  - https://www.electronjs.org/docs

## 5. Common

### 5.1 - ESLint

Find and fix problems in your JavaScript code

> Plugin eslint-config-airbnb

We are using the airBnB style guide.

- Documentation
  - https://eslint.org/

### 5.2 - Jest

A javascript testing framework

- Documentation
  - https://jestjs.io/

### 5.3 - Git & Github

Source control

- Documentation
  - https://git-scm.com/

### 5.4 - Dependencies management

Automated dependency updates with pull requests

- Documentation
  - https://dependabot.com/

### 5.5 - Documentation

- Markdown
- Gitbook

### 5.6 - KANBAN bord

https://agilescrumgroup.nl/wat-is-kanban-methode/
