const Influx = require('influx');

const influx = new Influx.InfluxDB({
  host: 'localhost',
  database: 'logs',
  port: process.env.DB_PORT,
  schema: [
    {
      measurement: 'temperatures',
      fields: {
        temperature: Influx.FieldType.INTEGER,
      },
      tags: ['host'],
    },
  ],
});

module.exports = influx;
