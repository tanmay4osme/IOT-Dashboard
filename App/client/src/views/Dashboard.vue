<template>
  <div>
    <h1>Welcome back {{ profile.displayName }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {},
    };
  },
  mounted() {
    this.profile = this.$store.state.auth.payload.user;
  },
};
</script>

<style lang="scss" scoped></style>
