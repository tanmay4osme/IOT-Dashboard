const zmq = require('zeromq');
const sock = zmq.socket('push');
const protobuf = require('protobufjs');

sock.bindSync('tcp://127.0.0.1:3000');
console.log('Producer bound to port 3000');

protobuf.load('../proto/log.proto', (err, root) => {
  if (err) throw err;

  const type = root.lookupType('Loggings.Log');

  setInterval(() => {
    for (let i = 0; i < 10; i++) {
      const payload = { temperature: i };
      const errorMessage = type.verify(payload);

      if (errorMessage) throw Error(errorMessage);

      const message = type.create(payload);
      const buffer = type.encode(message).finish();

      sock.send(buffer);
      console.log(`Writing Request : ${i} - ${buffer}`);
    }
  }, 10000);
});
