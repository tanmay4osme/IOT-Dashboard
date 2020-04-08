<template>
<v-app>
  <navigation />
  <v-content class="bg-grey">
    <router-view />
  </v-content>
  </v-app>
</template>

<script>

import navigation from "./components/Navigation.vue";

export default {
  name: 'App',
  
  components : {
    navigation
  },

  data: () => ({
  }),
};
</script>

<style lang="scss">
  @import "./assets/scss/colors.scss";
  body 
  {
    background-color: #5B5B5B !important;
  }

  .bg-grey {
    background-color: rgb(230, 230, 230) !important;
  }
</style>
