const Influx = require("influx");

const dataDB = new Influx.InfluxDB({
  // host: "influx",
  host:"influx",
  database: "logs",
  port: process.env.DB_PORT || 8086,
  schema: [
    {
      measurement: "temperature",
      fields: {
        temperature: Influx.FieldType.INTEGER
      },
      tags: ["host"]
    },
    {
      measurement: "test",
      fields: {
        test: Influx.FieldType.INTEGER
      },
      tags: ["host"]
    }
  ]
})


module.exports = dataDB;