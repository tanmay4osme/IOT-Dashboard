const { app, influx, sock, protobuf } = require('./app');

const port = process.env.EXPRESS_PORT || 5000;
const zport = process.env.ZEROMQ_PORT || 5001;

influx
  .getDatabaseNames()
  .then((names) => {
    if (!names.includes('logs')) {
      return influx.createDatabase('logs');
    }
  })
  .then(() => {
    sock.connect('tcp://127.0.0.1:' + zport);
    console.log(`Worker running on : http://localhost:${zport}`);
  })
  .catch((err) => {
    console.log(`Error creating influx database - ${err}`);
  });

sock.on('message', (msg) => {
  protobuf.load('protobuffs/log.proto', (err, root) => {
    if (err) throw err;
    const type = root.lookupType('Loggings.Log');

    const message = type.decode(msg);

    // console.log('Message from client : ' + message.temperature);
    const dump = message.temperature;

    console.log(`Request :  ${dump}`);

    influx
      .writePoints([
        {
          measurement: 'temperatures',
          fields: { temperature: dump },
          tags: { host: 'localhost' },
        },
      ])
      .catch((err) => {
        console.error(`Error saving data to InfluxDB! ${err.stack}`);
      });
  });
});

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`API Listening on : http://localhost:${port}`);
  /* eslint-enable no-console */
});
