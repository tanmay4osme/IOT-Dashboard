const aedes = require("aedes")();
const { dataDB } = require("./database/index.js");
const protosrv = require("net").createServer(aedes.handle);
const protobuf = require('protobufjs');

aedes.on('publish', (packet, client, message) => {
  if (packet.cmd === 'publish') {
    protobuf.load('./proto/entry.proto', (err, root) => {
      if (err) throw err;
      const type = root.lookupType('Loggings.Log');

      // print full object : eg Log { temperature: 20 }
      const m = type.decode(packet.payload);

      dataDB
        .writePoints([
          {
            measurement: 'temperatures',
            fields: { temperature: m.temperature },
            tags: { host: 'localhost' },
          },
        ])
        .catch((err) => {
          console.error(`Error saving data to InfluxDB! ${err}`);
        });
    });
  }
});

module.exports = protosrv;


