const server = require("./broker.js");
const BROKER_PORT = process.env.BROKER_PORT || 1883;

server.listen(BROKER_PORT, () => {
  console.log(`Server is listening on port ${BROKER_PORT}`);
})

