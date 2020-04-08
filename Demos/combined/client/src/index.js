const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://193.190.154.184:24071");
var protobuf = require("protobufjs");

client.on("connect", () => {
  client.subscribe("logging", (err) => {
    if (!err) {
      protobuf.load("../proto/entry.proto", (err, root) => {
        if (err) throw err;

        const type = root.lookupType("Loggings.Log");
        let j = 1;
        //Math.floor(Math.random() * Math.floor(50))
        for (j = 1; j <= 100; j++) {
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
