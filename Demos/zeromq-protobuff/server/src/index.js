const { app, influx, sock, protobuf } = require('./app');

const SOCK_PORT = process.env.SOCKET_PORT || 5000;
const API_PORT = process.env.API_PORT || 5001;

influx
  .getDatabaseNames()
  .then((names) => {
    if (!names.includes('logs')) {
      return influx.createDatabase('logs');
    }
  })
  .then(() => {
    sock.connect(`tcp://0.0.0.0:${SOCK_PORT}`);
    console.log(`Worker running on : http://localhost:${SOCK_PORT}`);
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

app.listen(API_PORT, () => {
  /* eslint-disable no-console */
  console.log(`API Listening on : http://localhost:${API_PORT}`);
  /* eslint-enable no-console */
});
