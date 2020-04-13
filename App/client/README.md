# client

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Handy links

https://github.com/feathersjs-ecosystem/feathers-vuex/blob/master/docs/data-components.md https://vuex.feathersjs.com/data-components.html#usage-examples

## Saves

```vue
<template>
  <div>
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="snackbar.timeout" right top>{{ snackbar.text }}</v-snackbar>
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
import { notEmptyRules } from '../../utils/formRules';

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
```

      // Snackbar error or success
      snackbar: {
        show: false,
        text: '',
        color: 'success',
        timeout: 6000,
      },
    };

}, methods: { ...mapActions('localAuth', ['createNewUser']), ...mapActions('localAuth', ['deleteUser']),

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

//https://vuetifyjs.com/en/components/menus/#popover-menu
