const Influx = require("influx");

const dataDB = new Influx.InfluxDB({
  host: "influx",
  database: "data",
  port: process.env.DB_PORT || 8086,
  schema: [
    {
      measurement: "temperature",
      fields: {
        temperature: Influx.FieldType.INTEGER
      },
      tags: ["host"]
    }
  ]
})


const influx = new Influx.InfluxDB({
  host: "influx",
  database: "logs",
  port: process.env.DB_PORT || 8086,
  schema: [
    {
      measurement: "light",
      fields: {
        light: Influx.FieldType.INTEGER
      },
      tags: ["host"]
    }
  ]
})

module.exports = {
  dataDB,
  influx
};