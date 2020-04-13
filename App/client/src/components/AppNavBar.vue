<!-- eslint-disable -->
<template>
  <div>
    <v-app-bar app dark flat>
      <div v-if="user" class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="navigator.show = !navigator.show"></v-app-bar-nav-icon>

        <v-autocomplete
          v-model="select"
          :loading="loading"
          :items="items"
          :search-input.sync="search"
          cache-items
          class="mx-4"
          flat
          hide-no-data
          hide-details
          rounded
          label="Search here"
          solo-inverted
        />
      </div>

      <v-spacer></v-spacer>
      <div v-if="user">
        <v-menu transition="slide-y-transition" v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y>
          <template v-slot:activator="{ on }">
            <v-badge class="hover mx-5" :content="1" :value="1" color="red" overlap>
              <v-icon v-on="on">mdi-bell</v-icon>
            </v-badge>
          </template>

          <v-card>
            <v-list>
              <FeathersVuexFind service="notifications" :query="{ status: true }" watch="query">
                <div slot-scope="props">
                  <v-list-item dense border="left" v-for="item in props.items" :key="item.id">
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
              <v-btn color="primary" text @click="menu = false">Ok</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
        <font-awesome-icon class="hover" @click="toggleDarkMode" :icon="['fa', 'sun']" size="lg" />
        <font-awesome-icon class="hover mx-5" link @click="logout" :icon="['fa', 'power-off']" size="lg" />
      </div>
      <div v-else>
        <v-btn text class="mx-2" :to="{ name: 'login' }">Login</v-btn>
      </div>
    </v-app-bar>

    <app-notification-viewer></app-notification-viewer>

    <v-navigation-drawer v-model="navigator.show" :expand-on-hover.sync="!navigator.show" :mini-variant.sync="!navigator.show" permanent v-if="user" app dark>
      <v-list dense nav class="py-0">
        <app-avatar :user="user.user"></app-avatar>

        <v-divider class="mb-2"></v-divider>

        <!-- Dashboard -->
        <v-list-item link :to="{ path: '/dashboard' }" exact>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Camera -->
        <v-list-item link :to="{ path: '/camera' }" exact>
          <v-list-item-icon>
            <v-icon>mdi-camera</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Camera</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Charts -->
        <v-list-item link :to="{ path: '/charts' }" exact>
          <v-list-item-icon>
            <v-icon>mdi-chart-bar</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Charts</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Manage -->
        <v-list-group prepend-icon="mdi-cog" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Manage</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item link :to="{ name: 'users' }" exact>
            <v-list-item-content>
              <v-list-item-title>Users</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link :to="{ name: 'notifications' }" exact>
            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link :to="{ name: 'logs' }" exact>
            <v-list-item-content>
              <v-list-item-title>Logs</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <!-- Account -->
        <v-list-item link :to="{ path: '/account' }" exact>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
/* eslint-disable */
import AppAvatar from '@/components/AppAvatar.vue';
import notificationViewer from '@/components/dashboard/notificationViewer';
export default {
  props: ['user', 'logout'],
  components: {
    AppAvatar,
    'app-notification-viewer': notificationViewer,
  },

  data() {
    return {
      fav: true,
      menu: false,
      message: false,
      hints: true,
      navigator: {
        show: false,
      },
      loading: false,
      items: [],
      search: null,
      select: null,
      states: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District of Columbia',
        'Federated States of Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virgin Island',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
      ],
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
    showNotifications() {},
    toggleDarkMode() {
      console.log('toggle');
    },
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter((e) => (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1);

        this.loading = false;
      }, 500);
    },
  },
};
</script>

<style lang="scss">
.v-navigation-drawer {
  background-color: rgb(39, 39, 39) !important;
}

.hover {
  cursor: pointer;
}
.v-autocomplete {
  min-width: 40vw;
}
</style>
