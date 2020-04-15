<!-- eslint-disable -->
<template>
  <v-navigation-drawer :color="$vuetify.theme.isDark ? 'primary' : 'white'" v-if="user" :expand-on-hover.sync="!navigator.show" :mini-variant.sync="!navigator.show" app permanent v-model="navigator.show">
    <v-list class="py-0" dense nav>
      <app-avatar :user="user"></app-avatar>

      <v-divider class="mb-2"></v-divider>

      <!-- Dashboard -->
      <v-list-item :to="{ name: 'dashboard' }" exact link>
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Camera -->
      <v-list-item :to="{ name: 'camera' }" exact link>
        <v-list-item-icon>
          <v-icon>mdi-camera</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Camera</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Charts -->
      <v-list-item :to="{ name: 'charts' }" exact link>
        <v-list-item-icon>
          <v-icon>mdi-chart-bar</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Charts</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Manage -->
      <v-list-group :color="$vuetify.theme.isDark ? 'white' : ''" no-action prepend-icon="mdi-cog" >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Manage</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item :to="{ name: 'users' }" exact link>
          <v-list-item-content>
            <v-list-item-title>Users</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{ name: 'notifications' }" exact link>
          <v-list-item-content>
            <v-list-item-title>Notifications</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{ name: 'logs' }" exact link>
          <v-list-item-content>
            <v-list-item-title>Logs</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <!-- Account -->
      <v-list-item :to="{ name: 'account' }" exact link>
        <v-list-item-icon>
          <v-icon>mdi-account</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import AppAvatar from '@/components/AppAvatar.vue';

  export default {
    props: {
      user: {
        type: Object,
      },
      navigator: {
        type: Object,
      },
    },
    components: {
      AppAvatar,
    },

    data() {
      return {
        menu: false,
      };
    },
    methods: {
      toggleDarkMode() {
        console.log('toggle');
      },
    },
  };
</script>

<style lang="scss">
  .hover {
    cursor: pointer;
  }

  .v-autocomplete {
    min-width: 40vw;
  }
</style>
