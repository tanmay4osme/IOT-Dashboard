<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-container>
            <v-row>
              <v-col class="ml-5" cols="12">
                <h1>Logs</h1>
                <v-btn @click="downloadServerLog" class="mt-5" color="primary" depressed large>
                  Download server log
                </v-btn>
                <v-btn @click="downloadActionLog" class="mt-5 ml-3" color="primary" depressed large>
                  Download action log
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-card>
      <v-row class="py-10" justify="center">
        <v-row align="center" justify="center">
          <v-col cols="10">
            <FeathersVuexFind :query="{}" service="activities">
              <div slot-scope="props">
                <v-data-table
                  :headers="logTable.headers"
                  :items="props.items"
                  :items-per-page="logTable.displayAmount"
                  :sort-by.sync="logTable.sortBy"
                  :sort-desc.sync="logTable.sortDesc"
                  class="elevation-1"
                />
              </div>
            </FeathersVuexFind>
          </v-col>
        </v-row>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import {FeathersVuexFind} from 'feathers-vuex';
import {logTable} from '@/utils/tableConfigs';
import axios from 'axios';

export default {
  data() {
    return {
      logTable,
    };
  },
  components: {
    FeathersVuexFind,
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
    downloadActionLog() {
    },
  },
};
</script>
<style lang="scss" scoped></style>
