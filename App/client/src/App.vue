<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div v-if="user" class="d-flex align-center">
        <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <h3>Menu</h3> -->
      </div>

      <v-spacer></v-spacer>

      <div v-if="!user">
        <v-btn text class="mx-2" :to="{ name: 'login' }">Login</v-btn>
        <v-btn text class="mx-2" :to="{ name: 'signup' }">Signup</v-btn>
      </div>

      <div v-if="user">
        <v-btn text class="mx-2" @click="logout">Logout</v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" dark app :expand-on-hover="expandOnHover" :mini-variant="miniVariant">
      <v-list dense nav class="py-0">
        <v-list-item two-line :class="miniVariant && 'px-0'">
          <v-list-item-avatar>
            <img :src="this.$store.state.auth.payload.user.imageUrl" alt="user image" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ this.$store.state.auth.payload.user.displayName }}</v-list-item-title>
            <v-list-item-subtitle>Administrator</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="item in items" :key="item.title" link :to="{ path: item.link }">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content><router-view /></v-content>
    <v-footer fixed app inset>
      <span>&copy; 2020 Jens Vanhulst</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data: () => ({
    drawer: true,
    group: null,
    miniVariant: true,
    expandOnHover: true,
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/dashboard' },
      { title: 'Camera-feed', icon: 'mdi-camera', link: '/dashboard' },
      { title: 'History', icon: 'mdi-camera', link: '/dashboard' },
      { title: 'Logs', icon: 'mdi-camera', link: '/dashboard' },
      { title: 'Charts', icon: 'mdi-camera', link: '/dashboard' },
      { title: 'Notifications', icon: 'mdi-camera', link: '/dashboard' },
      { title: 'Manage', icon: 'mdi-help', link: '/manage' },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  computed: {
    ...mapState('auth', { user: 'payload' }),
  },
  methods: {
    ...mapActions('auth', { authLogout: 'logout' }),

    logout() {
      this.authLogout().then(() => this.$router.push('/login'));
    },
  },
};
</script>

<style lang="scss" scoped>
.v-list-item__icon {
  margin-right: 10px !important;
}

.menu-item:hover {
  background-color: rgba(0, 112, 217, 0.25) !important;
}
</style>
