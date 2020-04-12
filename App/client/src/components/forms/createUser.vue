<template>
  <div>
    <v-snackbar absolute v-model="snackbar.show" :color="snackbar.color" :timeout="snackbar.timeout" right top>{{ snackbar.text }}</v-snackbar>

    <div class="my-2">
      <v-btn class="mx-1" @click="createUserDialog = !createUserDialog" depressed large color="success">Add new user</v-btn>
      <v-btn class="mx-1" @click="removeUserDialog = !removeUserDialog" depressed large color="error">Delete a user</v-btn>
    </div>

    <!-- Create a new user -->
    <v-row justify="center">
      <v-dialog v-model="createUserDialog" persistent max-width="500">
        <v-card>
          <v-card-title class="headline mb-5">Create a new user</v-card-title>
          <v-card-text>
            <v-form ref="createNewUser" v-model="valid" @submit.prevent="createNewUser" @keydown.prevent.enter>
              <v-text-field outlined v-model="user.username" :rules="notEmptyRules" label="Username" required />
              <v-text-field outlined v-model="user.displayName" :rules="notEmptyRules" label="Display Name" required />
              <v-text-field outlined v-model="user.password" :rules="notEmptyRules" label="Password" type="password" required />
              <v-text-field outlined v-model="user.confirmPassword" :rules="notEmptyRules" label="Confirm Password" type="password" required />
              <v-text-field outlined v-model="user.imageUrl" :rules="notEmptyRules" label="Profile picture URL" required />
              <v-select outlined v-model="user.role" :items="roleItems" :rules="notEmptyRules" required label="Role selection"></v-select>
              <v-btn @click="createUserDialog = false" type="submit" color="primary" :disabled="!valid">Create new user</v-btn>

              <v-btn class="mx-3" @click="createUserDialog = false" type="submit" color="error">cancel</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>

    <!-- Delete a new user -->
    <v-row justify="center">
      <v-dialog v-model="removeUserDialog" persistent max-width="500">
        <v-card>
          <v-card-title class="headline mb-5">Remove a user</v-card-title>
          <v-card-text>
            <v-form ref="deleteUser" v-model="valid" @submit.prevent="deleteUser" @keydown.prevent.enter>
              <v-text-field outlined v-model="id" :rules="notEmptyRules" label="UID" required />

              <v-btn type="submit" color="success" :disabled="!valid">Delete</v-btn>

              <v-btn class="mx-3" @click="removeUserDialog = false && this.$refs.deleteUser.reset()" color="error">cancel</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { notEmptyRules } from '@/utils/formRules';

export default {
  data() {
    return {
      valid: false,
      // Remove user dialog
      removeUserDialog: false,
      id: '',

      // Create user
      createUserDialog: false,
      roleItems: ['Administrator', 'Member'],
      user: {
        username: '',
        password: '',
        confirmPassword: '',
        displayName: '',
        imageUrl: '',
        role: '',
      },

      notEmptyRules,

      // Snackbar error or success
      snackbar: {
        show: false,
        text: '',
        color: 'success',
        timeout: 6000,
      },
    };
  },
  methods: {
    createNewUser() {
      if (this.valid) {
        const { User } = this.$FeathersVuex.api;
        const user = new User(this.user);

        user
          .save()
          .then((u) => {
            this.showSnackbar('success', `User created with username : ${u.username} !`);
            this.generateLogEntry(`${this.$store.state.auth.payload.user.username} added ${u.username} to the system`);
          })
          .catch((e) => {
            this.showSnackbar('error', `${e.message}`);
          });
      }
    },

    deleteUser() {
      const choice = window.confirm('Are you sure you want to delete this item?');
      if (choice === true) {
        const { User } = this.$FeathersVuex.api;
        User.get(this.id)
          .then((user) => {
            user
              .remove()
              .then((u) => {
                this.showSnackbar('success', `User deleted with id : ${this.id} !`);
                this.generateLogEntry(`${this.$store.state.auth.payload.user.username} deleted ${u.username} from the system`);
                this.$refs.deleteUser.reset();
                this.removeUserDialog = false;
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
  },
};
</script>

<style lang="scss" scoped></style>
