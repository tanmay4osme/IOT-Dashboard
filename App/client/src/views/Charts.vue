<template>
<div>
  <div>charts</div>
   <div class="sub" v-html="buff">
  </div>
   <div class="publish">
    <button @click="pub">Publish1 (Sub1 + Sub3)</button>
  </div>
  </div>
</template>

<script>

export default {
  /* eslint-disable*/
  data() {
    return {
      buff: 'Sub1:<br>',
    };
  },
  mqtt: {
    'VueMqtt/presence': function (data) {
     this.buff = this.buff + data + '<br>'
    },
  },
  mounted() {
    if (this.$mqtt.subscribe('VueMqtt/presence')) {
      console.log('subscribed');
    }
  },

  methods: {
      pub() {
      this.$mqtt.publish('VueMqtt/presence', '5');
    },
  },

};
</script>
