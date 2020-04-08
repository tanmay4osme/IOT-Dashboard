const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost:5001");
var protobuf = require("protobufjs");

let runCount = 0;
const logsPerSecond = 700;
const runs = 10;

client.on("connect", () => {
  client.subscribe("logging", err => {
    if (!err) {
      const int = setInterval(() => {
        if (runCount != runs) {
          protobuf.load("../proto/Log.proto", (err, root) => {
            if (err) throw err;

            const type = root.lookupType("Loggings.Log");
            //Math.floor(Math.random() * Math.floor(50))

            for (let j = 1; j <= logsPerSecond; j++) {
              let payload = type
                .encode({
                  value: Math.floor(Math.random() * Math.floor(50)),
                  type: "temperature"
                })
                .finish();

              client.publish("logging", payload);
              //console.log(`Writing Request : ${j}`);
            }
          });
          runCount++;
          console.log(` RUN : ${runCount}`);
        } else {
          console.log(
            `DONE - Written ${runCount *
              logsPerSecond} values in ${runCount} runs of 200 writes each second`
          );
          clearInterval(int);
        }
      }, 1000);
    }
  });
});
