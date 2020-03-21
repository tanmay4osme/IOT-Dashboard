const aedes = require("aedes")();
const server = require("net").createServer(aedes.handle);
var protobuf = require("protobufjs");

aedes.on("subscribe", (subscriptions, client) => {
  console.log(
    "MQTT client \x1b[32m" +
      (client ? client.id : client) +
      "\x1b[0m subscribed to topics: " +
      subscriptions.map(s => s.topic).join("\n"),
    "from broker",
    aedes.id
  );
});

aedes.on("unsubscribe", (subscriptions, client) => {
  console.log(
    "MQTT client \x1b[32m" +
      (client ? client.id : client) +
      "\x1b[0m unsubscribed to topics: " +
      subscriptions.join("\n"),
    "from broker",
    aedes.id
  );
});

// fired when a client connects
aedes.on("client", client => {
  console.log(
    "Client Connected: \x1b[33m" + (client ? client.id : client) + "\x1b[0m",
    "to broker",
    aedes.id
  );
});

// fired when a client disconnects
aedes.on("clientDisconnect", client => {
  console.log(
    "Client Disconnected: \x1b[31m" + (client ? client.id : client) + "\x1b[0m",
    "to broker",
    aedes.id
  );
});

// fired when a message is published
aedes.on("publish", (packet, client, message) => {
  if (packet.cmd === "publish") {
    console.log(packet);

    protobuf.load("./proto/entry.proto", (err, root) => {
      if (err) throw err;
      const type = root.lookupType("Loggings.Log");

      var errMsg = type.verify(packet.payload);
      if (errMsg) {
        throw Error(errMsg);
      }

      //print full object : eg Log { temperature: 20 }
      const message = type.decode(packet.payload);
      console.log(message);

      // print only the value
      console.log(message.temperature);
    });
  }

  console.log(
    "Client \x1b[31m" +
      (client ? client.id : "BROKER_" + aedes.id) +
      "\x1b[0m has published",
    packet.payload.toString(),
    "on",
    packet.topic,
    "to broker",
    aedes.id
  );
});

module.exports = server;
