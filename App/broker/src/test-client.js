const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://localhost:5000');
 
client.on('connect', () => {
  client.subscribe('presence', (err) => {
    if (!err) {
      client.publish('presence', '5')
    }
  })
})
 
client.on('message', (topic, message) => {
  // message is Buffer
  console.log(message.toString())
  client.end()
})