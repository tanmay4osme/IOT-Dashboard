<template>
  <div class="elevation-15" id="breadcrumbs">
    <v-breadcrumbs :items="breadcrumbList">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :disabled="item.disabled" :href="item.link">
          {{ item.name.toUpperCase() }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'AppBreadcrumbs',
    watch: {
      $route: function() {
        this.breadcrumbList = this.$route.meta.breadcrumb;
      },
    },
    data() {
      return {
        breadcrumbList: [],
      };
    },
  };
</script>

<style scoped>

</style>
