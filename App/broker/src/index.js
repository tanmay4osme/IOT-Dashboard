const server = require("./broker.js");
const BROKER_PORT = 3001;

server.listen(BROKER_PORT, () => {
  console.log(`Server is listening on port ${BROKER_PORT}`);
})

