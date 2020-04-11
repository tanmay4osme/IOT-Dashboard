<template>
  <div>
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="snackbar.timeout" right top>{{ snackbar.text }}</v-snackbar>

    <div class="my-2">
      <v-btn class="mx-1" @click="dialog = !dialog" depressed large color="success">New notification</v-btn>
      <v-btn class="mx-1" @click="removeNotificationDialog = !removeNotificationDialog" depressed large color="error">Delete notification</v-btn>
    </div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="500">
        <v-card>
          <v-card-title class="headline mb-5">Create a new notification</v-card-title>
          <v-card-text>
            <v-form ref="createNewUser" v-model="valid" @submit.prevent="createNewNotification" @keydown.prevent.enter>
              <v-text-field outlined v-model="notification.text" :rules="notEmptyRules" label="Text" required />
              <v-select outlined v-model="notification.type" :items="types" :rules="notEmptyRules" required label="Type selection"></v-select>

              <v-btn @click="dialog = !dialog" type="submit" color="primary" :disabled="!valid">Create new notification</v-btn>
              <v-btn class="mx-3" @click="dialog = !dialog" color="error">cancel</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>

    <!-- Delete a notification -->
    <v-row justify="center">
      <v-dialog v-model="removeNotificationDialog" persistent max-width="500">
        <v-card>
          <v-card-title class="headline mb-5">Remove a notification</v-card-title>
          <v-card-text>
            <v-form ref="deleteUser" v-model="valid" @submit.prevent="removeNotification" @keydown.prevent.enter>
              <v-text-field outlined v-model="id" :rules="notEmptyRules" label="UID" required />

              <v-btn type="submit" color="success" :disabled="!valid">Delete</v-btn>
              <v-btn class="mx-3" @click="removeNotificationDialog = !removeNotificationDialog" color="error">cancel</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
/* eslint-disable */
import { notEmptyRules } from '../validators';

export default {
  data() {
    return {
      dialog: false,
      removeNotificationDialog: false,
      valid: false,
      notEmptyRules,

      id: '',

      snackbar: {
        show: false,
        text: '',
        color: 'success',
        timeout: 6000,
      },

      notification: {
        text: '',
        type: '',
      },
      types: ['success', 'info', 'warning', 'error'],
    };
  },
  methods: {
    async generateLogEntry(text) {
      const { Activity } = this.$FeathersVuex.api;
      const activity = new Activity();
      activity.text = text;
      await activity.save();
    },

    showSnackbar(color, text) {
      this.snackbar.color = color;
      this.snackbar.text = text;
      this.snackbar.show = true;
    },

    createNewNotification() {
      if (this.valid) {
        const { Notification } = this.$FeathersVuex.api;
        const notification = new Notification(this.notification);

        notification
          .save()
          .then(() => {
            this.showSnackbar('success', `Notification created.`);
          })
          .catch((e) => {
            this.showSnackbar('error', `${e.message}`);
          });
      }
    },
    removeNotification() {
      const choice = window.confirm('Are you sure you want to delete this item?');
      if (choice === true) {
        const { Notification } = this.$FeathersVuex.api;
        Notification.get(this.id)
          .then((notification) => {
            notification
              .remove()
              .then((n) => {
                this.showSnackbar('success', `Notification deleted with id : ${this.id} !`);
                this.removeNotificationDialog = false;
              })
              .catch((e) => {
                this.showSnackbar('error', `${e.message} Please try again later or contact your system admin. `);
              });
          })
          .catch((e) => {
            this.showSnackbar('error', `${e.message}`);
          });
      } else {
        console.log('false');
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

v
