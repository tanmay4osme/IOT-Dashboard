<template>
  <v-app>
    <app-navbar :user="user" :logout="logout"></app-navbar>
    <v-content>
      <v-container v-if="user">
        <v-row justify="center">
          <v-col cols="10">
            <FeathersVuexFind service="notifications" :query="{ status: true }" watch="query">
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
import { mapState, mapActions } from 'vuex';

import AppNavBar from '@/components/AppNavBar.vue';

export default {
  components: {
    'app-navbar': AppNavBar,
  },
  data: () => ({}),

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
