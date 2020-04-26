const Influx = require("influx");

const influx = new Influx.InfluxDB({
  host: "db",
  database: "logs",
  port: process.env.DB_PORT || 8086,
  schema: [
    {
      measurement: "temperatures",
      fields: {
        temperature: Influx.FieldType.INTEGER
      },
      tags: ["host"]
    }
  ]
})

module.exports = influx;