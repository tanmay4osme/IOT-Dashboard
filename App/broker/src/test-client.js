const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://intelliflow.pxl-ea-ict.be:24071');
 
client.on('connect', () => {
  console.log("connected");
  
  client.subscribe('presence', (err) => {
    if (!err) {
      client.publish('presence', '5')
    }
  })
})
 
console.log("not connected");
