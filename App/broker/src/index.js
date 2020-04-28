const server = require("./broker.js");
const app = require("./app");
const protosrv = require("./proto_broker");

const API_PORT = 3002;
const BROKER_PORT = 3001;
const PROTO_BROKER_PORT = 3003;

app.listen(API_PORT, () => {
  /* eslint-disable no-console */
  console.log(`API Listening on : http://localhost:${API_PORT}`);
  /* eslint-enable no-console */
});

server.listen(BROKER_PORT, () => {
  console.log(`Broker is listening on port ${BROKER_PORT}`);
})

protosrv.listen(PROTO_BROKER_PORT, () => {
  console.log(`Broker is listening on port ${PROTO_BROKER_PORT}`);
})

