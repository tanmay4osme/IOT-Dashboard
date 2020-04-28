const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://intelliflow.pxl-ea-ict.be:24071');
 
client.on('connect', () => {
  console.log("connected");
  
  client.subscribe('presence', (err) => {
    if (!err) {
      setInterval(() => {
        client.publish('presence', Math.floor(Math.random() * 1001).toString())
      }, 2000);
    }
  })
})
 
console.log("not connected");
