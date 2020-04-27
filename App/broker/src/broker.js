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
      
      // Write to db
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
