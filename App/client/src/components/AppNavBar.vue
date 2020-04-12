<template>
  <div>
    <v-app-bar app color="primary" dark :clipped-left="true">
      <div v-if="user" class="d-flex align-center">
        <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
        <h3>{{ $route.name }}</h3>
      </div>

      <v-spacer></v-spacer>

      <div v-if="!user">
        <v-btn text class="mx-2" :to="{ name: 'login' }">Login</v-btn>
      </div>
      <div v-if="user">
        <v-btn text class="mx-2" @click="logout">Logout</v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-if="user" app overflow dark expand-on-hover mini-variant :clipped="true">
      <v-list dense nav class="py-0">
        <app-avatar :user="user.user"></app-avatar>

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
  </div>
</template>

<script>
import AppAvatar from '@/components/AppAvatar.vue';

export default {
  props: ['user', 'logout'],
  components: {
    AppAvatar,
  },

  data() {
    return {
      navigator: {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', link: 'dashboard' },
          { title: 'Camera ', icon: 'mdi-flag', link: 'camera' },
          { title: 'Charts', icon: 'mdi-camera', link: 'charts' },
          { title: 'Manage', icon: 'mdi-help', link: 'manage' },
        ],
      },
    };
  },
};
</script>
