<template>
  <v-slide-y-transition mode="out-in">
    <v-container fluid v-if="user.user.role === 'Administrator'">
      <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="snackbar.timeout" right top>{{ snackbar.text }}</v-snackbar>

      <!-- User operations -->
      <section id="user-actions">
        <v-row align="center" justify="center">
          <v-col cols="10">
            <h1 class="mb-5">User management</h1>
            <div class="my-2">
              <v-btn class="mx-1" @click="createUserDialog = !createUserDialog" depressed large color="success">Add new user</v-btn>
            </div>

            <new-user-form :showing="createUserDialog" :creating="userIsCreating" :createUser="createUser"></new-user-form>
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
                >
                  <template v-slot:item.actions="{ item }">
                    <v-icon small @click="deleteItem(item)">
                      mdi-delete-outline
                    </v-icon>
                  </template>
                </v-data-table>
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
            <div class="my-2">
              <v-btn class="mx-1" @click="createNotificationDialog = !createNotificationDialog" depressed large color="success">New notification</v-btn>
            </div>

            <new-notification-form :showing="createNotificationDialog" :creating="creating" :createNotification="createNotification"></new-notification-form>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <FeathersVuexFind service="notifications" :query="{}">
              <div slot-scope="props">
                <v-data-table :headers="notificationTable.headers" :items="props.items" class="elevation-1">
                  <template v-slot:top>
                    <v-toolbar flat color="white">
                      <v-dialog v-model="dialog" max-width="500px">
                        <v-card>
                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col cols="12">
                                  <h1>Edit item</h1>
                                </v-col>
                                <v-col cols="12">
                                  <v-text-field outlined v-model="editedItem.text" label="Text"></v-text-field>
                                  <v-text-field outlined v-model="editedItem.type" label="Type"></v-text-field>
                                  <v-switch v-model="editedItem.status" :label="`Status: ${convertItemStatus(editedItem.status)}`"></v-switch>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-card-text>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                            <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-toolbar>
                  </template>
                  <template v-slot:item.actions="{ item }">
                    <v-icon small class="mr-2" @click="editItem(item)">
                      mdi-pencil
                    </v-icon>
                  </template>
                  <template v-slot:item.status="{ item }">
                    <v-chip :color="getColor(item.status)" dark>{{ convertItemStatus(item.status) }}</v-chip>
                  </template>
                </v-data-table>
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

import { mapState, mapActions } from 'vuex';
import { FeathersVuexFind } from 'feathers-vuex';
import { logTable, userTable, notificationTable, generateLogEntry } from '../utils/tableConfigs';

import axios from 'axios';

import NewUserFrom from '../components/forms/NewUserForm';
import NewNotificationForm from '../components/forms/NewNotificationForm';
import { generateSnackbar } from '@/utils/index';

export default {
  name: 'Manage',
  components: {
    FeathersVuexFind,
    NewNotificationForm,
    'new-user-form': NewUserFrom,
  },

  data: (vm) => ({
    dialog: false,
    editedId: '',
    editedItem: {
      text: '',
      type: '',
      status: false,
    },

    snackbar: {
      show: false,
      text: '',
      color: 'success',
      timeout: 6000,
    },

    logTable,
    userTable,
    notificationTable,

    createNotificationDialog: false,
    createUserDialog: false,
  }),
  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  computed: {
    ...mapState('auth', { user: 'payload' }),
    ...mapState('notifications', { creating: 'isCreatePending' }),
    ...mapState('auth', { userIsCreating: 'isCreatePending' }),
  },

  methods: {
    ...mapActions('notifications', ['update']),

    convertItemStatus(item) {
      if (item === true) return 'Active';
      else return 'Inactive';
    },
    getColor(status) {
      if (status === true) return 'green';
      else return 'red';
    },
    editItem(item) {
      this.editedId = item._id;
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedId = '';
      }, 300);
    },

    async save() {
      if (this.editedId != null) {
        console.log(this.editedItem);
        try {
          await this.update([this.editedId, this.editedItem]);
        } catch (error) {
          console.log(error);
        }
      }
      this.close();
    },

    async updateStatus(item) {},

    async deleteItem(item) {
      const choice = window.confirm('Are you sure you want to delete this item?');
      if (choice === true) {
        const { User } = this.$FeathersVuex.api;
        User.get(item._id)
          .then((user) => {
            user
              .remove()
              .then((u) => {
                this.generateLogEntry(`${this.user.user.username} deleted ${u.username} from the system.`);
                generateSnackbar(this.snackbar, 'success', 'User deleted successfully');
              })
              .catch((e) => {
                generateSnackbar(this.snackbar, 'error', 'Error deleting user !');
                this.generateLogEntry(`${this.user.user.username} failed to delete ${u.username} from the system.`);
              });
          })
          .catch((e) => {
            this.showSnackbar('error', `${e.message}`);
          });
      }
    },

    async createNotification(notification) {
      const { Notification } = this.$FeathersVuex.api;
      const newNotification = new Notification(notification);
      try {
        await newNotification.save();
        this.generateLogEntry(`${this.user.user.username} created a new notification with text ${newNotification.text}.`);
        generateSnackbar(this.snackbar, 'success', 'Notification created successfully !');
      } catch (error) {
        generateSnackbar(this.snackbar, 'error', error);
      }
    },

    async createUser(user) {
      const { User } = this.$FeathersVuex.api;
      const newUser = new User(user);
      try {
        await newUser.save();
        this.generateLogEntry(`${this.user.user.username} added ${newUser.username} to the system.`);
        generateSnackbar(this.snackbar, 'success', 'User created successfully !');
      } catch (error) {
        generateSnackbar(this.snackbar, 'error', error);
      }
    },

    async generateLogEntry(text) {
      const { Activity } = this.$FeathersVuex.api;
      const activity = new Activity();
      activity.text = text;
      await activity.save();
    },

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
