<template>
  <v-app-bar app color="primary" flat>
    <div class="d-flex align-center">
      <v-app-bar-nav-icon @click.stop="navigator.show = !navigator.show" class="white--text"></v-app-bar-nav-icon>
      <v-autocomplete class="mx-4 white--text" filled hide-details hide-no-data label="Search here"/>
    </div>

    <v-spacer></v-spacer>

    <div class="controls">
      <v-menu :close-on-content-click="false" :nudge-width="200" offset-y v-model="menu">
        <template v-slot:activator="{ on: menu }">
          <v-badge :content="1" :value="1" class="hover mx-3" color="red" overlap>
            <v-tooltip bottom>
              <template v-slot:activator="{ on: tooltip }">
                <v-icon class="white--text" v-on="{ ...tooltip, ...menu }">mdi-bell</v-icon>
              </template>
              <span>Notifications</span>
            </v-tooltip>
          </v-badge>
        </template>

        <v-card>
          <v-list>
            <FeathersVuexFind :query="{ status: true }" service="notifications" watch="query">
              <div slot-scope="props">
                <v-list-item :key="item.id" border="left" dense v-for="item in props.items">
                  <v-list-item-content>
                    <v-list-item-title>{{ item.type }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.text }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </div>
            </FeathersVuexFind>
          </v-list>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="menu = false" color="primary" text>Ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-icon @click="$vuetify.theme.dark = !$vuetify.theme.dark" class="white--text hover mx-3" v-if="!$vuetify.theme.dark" v-on="on">
            mdi-brightness-3
          </v-icon>
          <v-icon @click="toggleDarkMode()" class="white--texthover mx-3" v-else v-on="on">
            {{ mdiWhiteBalanceSunny }}
          </v-icon>
        </template>
        <span>Toggle Dark mode</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-icon @click="logout" class="mx-3 white--text" v-on="on">mdi-exit-to-app</v-icon>
        </template>
        <span>Logout</span>
      </v-tooltip>
    </div>
  </v-app-bar>
</template>

<script>
import {mdiWhiteBalanceSunny} from '@mdi/js';

export default {
  props: {
    logout: {
      type: Function,
    },
    navigator: {
      type: Object,
    },
  },
  data: () => ({
    menu: false,
    dark: false,
    mdiWhiteBalanceSunny,
  }),

  watch: {
    '$vuetify.theme.isDark': {
      handler: function() {
        // this.$vuetify.theme.isDark
        // update user
      },
      immediate: true,
    },
  },
  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
