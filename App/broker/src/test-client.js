const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://localhost:3001');
 
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
