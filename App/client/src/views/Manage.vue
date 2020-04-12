<template>
  <v-slide-y-transition mode="out-in">
    <v-container fluid v-if="currentUser.user.role === 'Administrator'">
      <!-- User operations -->
      <section id="user-actions">
        <v-row align="center" justify="center">
          <v-col cols="10">
            <h1 class="mb-5">User management</h1>
            <createUserForm />
          </v-col>
        </v-row>
        <v-row class="my-10" align="center" justify="center">
          <v-col cols="10">
            <FeathersVuexFind service="users" :query="{}">
              <div slot-scope="props">
                <v-data-table
                  :headers="userTable.headers"
                  :items="props.items"
                  :sort-by.sync="userTable.sortBy"
                  :sort-desc.sync="userTable.sortDesc"
                  :items-per-page="userTable.displayAmount"
                  class="elevation-1"
                />
              </div>
            </FeathersVuexFind>
          </v-col>
        </v-row>
      </section>

      <!-- section to enable/disable system wide notifications -->
      <section id="notifications">
        <v-row class="my-10" align="center" justify="center">
          <v-col cols="10">
            <h1 class="mb-5">Notifications</h1>
            <createNotificationForm />
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <FeathersVuexFind service="notifications" :query="{}">
              <div slot-scope="props">
                <v-data-table :headers="notificationTable.headers" :items="props.items" class="elevation-1" />
              </div>
            </FeathersVuexFind>
          </v-col>
        </v-row>
      </section>

      <!-- Loggings of user operations -->
      <section id="logs">
        <v-row class="my-10" align="center" justify="center">
          <v-col cols="10">
            <h1 class="mb-5">Logs</h1>
            <div class="my-2">
              <v-btn class="mx-1" color="primary" @click="downloadServerLog" depressed large>Download server log</v-btn>
              <v-btn class="mx-1" color="primary" @click="downloadActionLog" depressed large>Download action log</v-btn>
            </div>
          </v-col>
        </v-row>

        <v-row align="center" justify="center">
          <v-col cols="10">
            <FeathersVuexFind service="activities" :query="{}">
              <div slot-scope="props">
                <v-data-table
                  :headers="logTable.headers"
                  :sort-by.sync="logTable.sortBy"
                  :sort-desc.sync="logTable.sortDesc"
                  :items="props.items"
                  :items-per-page="logTable.displayAmount"
                  class="elevation-1"
                />
              </div>
            </FeathersVuexFind>
          </v-col>
        </v-row>
      </section>

      <!-- Section to see all memory / backup db -->
      <section>
        <v-row class="my-10" align="center" justify="center">
          <v-col cols="10">
            <h1 class="mb-5">Database</h1>
          </v-col>
        </v-row>
      </section>
    </v-container>

    <v-container fluid v-else>
      <v-row>
        <v-col cols="12" align="center">
          <h1>You are not allowed to access this page !</h1>
        </v-col>
      </v-row>
    </v-container>
  </v-slide-y-transition>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable */

/**
 * TODO : clear form after submit
 */
import { mapState } from 'vuex';
import { FeathersVuexFind } from 'feathers-vuex';
import { logTable, userTable, notificationTable, generateLogEntry } from '../utils/tableConfigs';

import createNotificationForm from '../components/forms/createNotification';
import createUserForm from '../components/forms/createUser';
import axios from 'axios';

export default {
  name: 'Manage',
  components: {
    FeathersVuexFind,
    createNotificationForm,
    createUserForm,
  },

  data: (vm) => ({
    // Settings for the tables
    logTable,
    userTable,
    notificationTable,
  }),

  computed: {
    ...mapState('auth', { currentUser: 'payload' }),
  },

  methods: {
    downloadServerLog() {
      axios({
        url: 'http://localhost:3030/logs/download',
        method: 'GET',
        responseType: 'http://localhost:8080', // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'logging.log');
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
      });
    },
    downloadActionLog() {},
  },
};
</script>
