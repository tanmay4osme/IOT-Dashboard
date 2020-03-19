// worker.js
const zmq = require('zeromq');
const sock = zmq.socket('pull');
const protobuf = require('protobufjs');

sock.connect('tcp://127.0.0.1:3000');
console.log('Worker connected to port 3000');

sock.on('message', function(msg) {
  protobuf.load('protobuffs/log.proto', function(err, root) {
    if (err) throw err;

    const type = root.lookupType('Loggings.Log');

    const message = type.decode(msg);

    console.log('Message from client : ' + message.temperature);
  });
});
