<template>
  <div>charts</div>
</template>

<script>
import mqtt from 'mqtt';

const client = mqtt.connect('mqtt://localhost:5000');

client.on('connect', () => {
  client.subscribe('presence', (err) => {
    if (!err) {
      console.log('subscibed');
      client.publish('presence', '5');
    }
  });
});

export default {


};
</script>
