const aedes = require("aedes")();
const influx = require("./database/index.js");
const server = require("net").createServer(aedes.handle);

// write to database
influx
  .getDatabaseNames()
  .then(names => {
    if (!names.includes("logs")) {
      return influx.createDatabase("logs");
    }
  })
  .then(() => {
    console.log(`Database exists`);
  })
  .catch(err => {
    console.log(`Error creating influx database - ${err}`);
  });


  aedes.on("publish", (packet, client, message) => {
    if (packet.cmd === "publish") {
      console.log(`Packet is : ${packet} and message : ${packet.payload}`);
      //write to db
    }
  });

module.exports = server;
