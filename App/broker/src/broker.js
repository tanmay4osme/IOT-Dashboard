const aedes = require("aedes")();
const { influx } = require("./database/index.js");
const server = require("net").createServer(aedes.handle);

aedes.on("publish", (packet, client, message) => {
  if (packet.cmd === "publish") {
    influx.writePoints([
      {
        measurement: 'light',
        fields: { light: packet.payload },
        tags: { host: 'localhost' },
      }
    ])
    .catch((error) => {
      console.log(`Error saving data to InfluxDB! ${error}`)
    })
  }
});

module.exports = server;
