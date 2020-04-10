<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div v-if="user" class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <h3>Menu</h3>
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

    <v-navigation-drawer v-if="user" app fixed v-model="drawer" overflow absolute bottom>
      <v-list nav>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img :src="this.$store.state.auth.payload.user.imageUrl" alt="John" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              >{{ this.$store.state.auth.payload.user.displayName }}
            </v-list-item-title>
            <v-list-item-subtitle>Administrator</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ path: '/manage' }">
            <v-list-item-title>Manage</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-content> <router-view /> </v-content>
    <v-footer fixed app inset>
      <span>&copy; 2020 Jens Vanhulst</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data: () => ({
    drawer: false,
    group: null,
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
