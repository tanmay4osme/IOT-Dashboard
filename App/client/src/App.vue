<template>
  <v-app>
    <app-tool-bar :user="user" :logout="logout" :navigator="navigator"></app-tool-bar>
    <app-nav-bar :user="user" :navigator="navigator"></app-nav-bar>

    <v-content :class="$vuetify.theme.isDark ? '' : 'grey lighten-2'">
      <app-breadcrumbs></app-breadcrumbs>
      <app-notifications></app-notifications>
      <router-view/>
    </v-content>
    <v-footer app fixed inset>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  import AppNavBar from '@/components/AppNavBar.vue';
  import AppToolBar from '@/components/AppToolBar.vue';
  import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';
  import AppNotifications from '@/components/AppNotifications.vue';

  export default {
    components: {
      AppNotifications,
      AppNavBar,
      AppToolBar,
      AppBreadcrumbs,
    },
    data: () => ({
      navigator: {
        show: false,
      },
    }),
    computed: {
      ...mapState('auth', { user: 'user' }),
    },
    methods: {
      ...mapActions('auth', { authLogout: 'logout' }),
      logout() {
        this.authLogout().then(() => this.$router.push('/login'));
      },
    },
  };
</script>

<style lang="scss">
  #breadcrumbs {
    position: fixed;
    z-index: 1;
    width: 100vw;
    //background-color: rgb(39, 39, 39) !important;
  }

  .v-breadcrumbs__divider {
    //color: white !important;
  }

  .v-breadcrumbs__item {
    //color: white !important;
  }
</style>
