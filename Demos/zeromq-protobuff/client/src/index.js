const zmq = require("zeromq");
const sock = zmq.socket("push");
const protobuf = require("protobufjs");

sock.bindSync("tcp://127.0.0.1:5000");

console.log("Producer bound to port 5000");

protobuf.load("../proto/log.proto", (err, root) => {
  if (err) throw err;

  const type = root.lookupType("Loggings.Log");
  let j = 1;

  for (j = 1; j <= 10; j++) {
    let random = Math.floor(Math.random() * Math.floor(50));
    let payload = { temperature: random };
    const errorMessage = type.verify(payload);

    if (errorMessage) throw Error(errorMessage);

    let message = type.create(payload);
    let buffer = type.encode(message).finish();

    sock.send(buffer);
    console.log(`Writing Request : ${j} - ${random}`);
  }

  console.log(`Written ${j - 1} values`);
});
