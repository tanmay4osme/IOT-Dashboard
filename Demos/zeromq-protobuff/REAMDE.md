# ZeroMQ communication with protobufs based on push / pull

## API

**_ baseURL : http://localhost:5001/api/v1 _**

- GET all data : baseURL + temperature
- GET count of data : baseURL + amount

## Run app via docker

```bash
cd Demos/zeomq_protobuff/server
```

```bash
docker-compose up
```

Go into client folder

```bash
cd Demos/zeomq_protobuff/client

```

Install dependencies

```bash
npm install
```

```bash
node src/index.js
```

# Manual

## Server

### Install dependencies

```bash
  npm install
```

## MAKE SURE YOU HAVE AN INFLUX DB INSTALLED LOCALLY !

Spin up server

```bash
cd server && npm run start
```

- Start the client with the steps from above (docker section)

### Development links

- https://github.com/protocolbuffers/protobuf/tree/master/js
- https://zeromq.org/languages/nodejs/
- https://github.com/protobufjs/protobuf.js#using-proto-files
- https://www.influxdata.com/
- https://docs.influxdata.com/influxdb/v1.7/introduction/installation/
- https://oznetnerd.com/2017/06/11/getting-know-influxdb/
