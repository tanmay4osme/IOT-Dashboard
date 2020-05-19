const aedes = require("aedes")();
const dataDB = require("./database/index.js");
const server = require("net").createServer(aedes.handle);

aedes.on("publish", (packet, client, message) => {
  if (packet.cmd === "publish") {
    dataDB.writePoints([
      {
        measurement: 'test',
        fields: { test: packet.payload },
        tags: { host: 'localhost' },
      }
    ])
    .catch((error) => {
      console.log(`Error saving data to InfluxDB! ${error}`)
    })
  }
});

module.exports = server;
