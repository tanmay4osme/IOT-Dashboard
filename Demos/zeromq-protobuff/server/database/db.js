const Influx = require('influx');

const influx = new Influx.InfluxDB({
  host: 'localhost',
  database: 'logs',
  port: 8086,
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
