<template>
  <div id="app">
    <v-app>
      <app-tool-bar v-if="user" :logout="logout" :navigator="navigator"></app-tool-bar>
      <app-nav-bar v-if="user" :navigator="navigator"></app-nav-bar>
      <v-content :class="$vuetify.theme.isDark ? '' : 'grey lighten-2'">
        <app-breadcrumbs v-show="user"></app-breadcrumbs>
        <app-notifications v-if="user"></app-notifications>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-content>
      <v-footer v-if="user" app fixed inset>
        <span>&copy; 2020</span>
      </v-footer>
    </v-app>
    <transition name="fade" mode="out-in">
      <SplashScreen v-if="loading"></SplashScreen>
    </transition>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

import AppNavBar from '@/components/AppNavBar.vue';
import AppToolBar from '@/components/toolbar/AppToolBar.vue';
import AppBreadcrumbs from '@/components/toolbar/AppBreadcrumbs.vue';
import AppNotifications from '@/components/AppNotifications.vue';
import SplashScreen from '@/views/SplashScreen.vue';

export default {
  components: {
    AppNotifications,
    AppNavBar,
    AppToolBar,
    AppBreadcrumbs,
    SplashScreen,
  },
  data: () => ({
    navigator: {
      show: false,
    },
    loading: true,
  }),

  computed: {
    ...mapState('auth', {user: 'user'}),
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
  methods: {
    ...mapActions('auth', {authLogout: 'logout'}),
    logout() {
      this.authLogout().then(() => {
        this.$router.push('/login');
      });
    },
  },
};
</script>

<style lang="scss">
  body {
    margin: 0 !important;
    padding: 0 !important;
  }
  #breadcrumbs {
    position: fixed;
    z-index: 1;
    width: 100vw;
    //background-color: rgb(39, 39, 39) !important;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
