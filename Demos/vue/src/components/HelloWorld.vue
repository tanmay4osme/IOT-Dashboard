<template>
  <h1>Hello from component</h1>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      
    }),

    mounted() {
      console.log("Component mounted");
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/scss/colors.scss';

  h1 {
    color: $color-primary-text !important;
  }
</style>













 