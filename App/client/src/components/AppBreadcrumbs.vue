<template>
  <div class="elevation-15 breadcrumb primary">
    <v-breadcrumbs  :items="breadcrumbList">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item class="app-white-text" :disabled="item.disabled" :href="item.link">
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

<style lang="scss">
  .breadcrumb {
    position: fixed;
    width: 100vw;
    z-index: 1;
  }
  .v-breadcrumbs__divider {
    color: white !important;
  }
  .app-white-text {
    & a {
      color: white !important;
     }
  }

</style>
