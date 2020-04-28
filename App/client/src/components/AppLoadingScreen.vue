<template>
<!--    <div :class="{ loader: true, fadeout: !isLoading }">-->
<!--      Loading ....-->
<!--    </div>-->
  <div></div>
</template>

<script>
export default {
  name: 'AppLoadingScreen',
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>

</style>
