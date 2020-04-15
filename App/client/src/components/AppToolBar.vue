<template>
  <v-app-bar app flat>
    <div class="d-flex align-center" v-if="user">
      <v-app-bar-nav-icon @click.stop="navigator.show = !navigator.show"></v-app-bar-nav-icon>
      <v-autocomplete class="mx-4" hide-details hide-no-data label="Search here" rounded />
    </div>

    <v-spacer></v-spacer>
    <div class="controls" v-if="user">
      <v-menu :close-on-content-click="false" :nudge-width="200" offset-y v-model="menu">
        <template v-slot:activator="{ on: menu }">
          <v-badge :content="1" :value="1" class="hover mx-3" color="red" overlap>
            <v-tooltip bottom>
              <template v-slot:activator="{ on: tooltip }">
                <v-icon v-on="{...tooltip, ...menu}">mdi-bell</v-icon>
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
          <v-icon @click="toggleDarkMode" class="hover mx-3" v-on="on">mdi-brightness-3</v-icon>
        </template>
        <span>Toggle Dark mode</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-icon @click="logout" class="mx-3" v-on="on">mdi-exit-to-app</v-icon>
        </template>
        <span>Logout</span>
      </v-tooltip>
    </div>
  </v-app-bar>
</template>

<script>
  export default {
    props: {
      user: {
        type: Object,
      },
      logout: {
        type: Function,
      },
      navigator: {
        type: Object,
      },
    },
    data: () => ({
      menu: false,
    }),
    methods: {
      toggleDarkMode() {
        console.log('Toggle');
      },
    },
  };
</script>
