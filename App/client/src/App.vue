<template>
  <v-app>
    <v-app-bar app color="primary" dark :clipped-left="true">
      <div v-if="user" class="d-flex align-center">
        <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
        <h3>{{ $route.name }}</h3>
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

    <v-navigation-drawer v-if="user" app overflow dark expand-on-hover mini-variant :clipped="true">
      <v-list dense nav class="py-0">
        <v-list-item two-line class="px-0">
          <v-list-item-avatar>
            <img :src="user.user.imageUrl" alt="user image" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ user.user.displayName }}</v-list-item-title>
            <v-list-item-subtitle>{{ user.user.role }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="mb-2"></v-divider>

        <v-list-item v-for="item in navigator.items" :key="item.title" link :to="{ path: item.link }" exact>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container v-if="user">
        <v-row justify="center">
          <v-col cols="10">
            <FeathersVuexFind service="notifications" :query="{}">
              <div slot-scope="props">
                <v-alert dense border="left" :type="item.type" v-for="item in props.items" :key="item.id">{{ item.text }}</v-alert>
              </div>
            </FeathersVuexFind>
          </v-col>
        </v-row>
      </v-container>
      <router-view />
    </v-content>
    <v-footer fixed app inset>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    navigator: {
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', link: 'dashboard' },
        { title: 'Camera ', icon: 'mdi-flag', link: 'camera' },
        { title: 'Charts', icon: 'mdi-camera', link: 'charts' },
        { title: 'Manage', icon: 'mdi-help', link: 'manage' },
      ],
    },
  }),

  computed: {
    ...mapState('auth', { user: 'payload' }),
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout').then(() => this.$router.push('/login'));
    },
  },
};
</script>
