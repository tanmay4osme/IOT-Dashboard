const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost:3001");
var protobuf = require("protobufjs");

client.on("connect", () => {
  client.subscribe("logging", err => {
    if (!err) {
      protobuf.load("../proto/entry.proto", (err, root) => {
        if (err) throw err;

        const type = root.lookupType("Loggings.Log");
        let j = 1;
        //Math.floor(Math.random() * Math.floor(50))
        for (j = 1; j <= 10; j++) {
          let payload = type
            .encode({ temperature: Math.floor(Math.random() * Math.floor(50)) })
            .finish();

          // Encode a message to an Uint8Array (browser) or Buffer (node)
          client.publish("logging", payload);

          console.log(`Writing Request : ${j}`);
        }
        console.log(`Done`);
      });
    }
  });
});

client.on("message", (topic, message) => {
  protobuf.load("../proto/entry.proto", (err, root) => {
    if (err) throw err;
    const type = root.lookupType("Loggings.Log");

    var errMsg = type.verify(message);
    if (errMsg) {
      throw Error(errMsg);
    }
    const m = type.decode(message);
    console.log(`Received Message = ${m.temperature} on topic ${topic}`);
  });
});
