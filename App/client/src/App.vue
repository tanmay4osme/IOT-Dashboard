<template>
  <v-app>
    <app-navbar :user="user" :logout="logout"></app-navbar>
    <v-content>
      <div v-if="user" id="breadcrumbs" class="elevation-15">
        <v-breadcrumbs :items="breadcrumbList">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item :href="item.link" :disabled="item.disabled">
              {{ item.name.toUpperCase() }}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </div>
      <v-container v-if="user" class="mt-12">
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
/* eslint-disable */
import { mapState, mapActions } from 'vuex';

import AppNavBar from '@/components/AppNavBar.vue';

export default {
  components: {
    'app-navbar': AppNavBar,
  },
  data() {
    return {
      breadcrumbList: [],
    };
  },

  watch: {
    $route: function() {
      this.breadcrumbList = this.$route.meta.breadcrumb;
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

<style lang="scss">
#breadcrumbs {
  position: fixed;
  z-index: 1;
  width: 100vw;
  //background-color: rgb(39, 39, 39) !important;
}

.v-breadcrumbs__divider {
  //color: white !important;
}
.v-breadcrumbs__item {
  //color: white !important;
}
</style>
