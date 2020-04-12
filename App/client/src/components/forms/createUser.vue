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
            <v-form ref="createNewUser" v-model="valid" @submit.prevent="createNewUser({ valid, user })" @keydown.prevent.enter>
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
            <v-form ref="deleteUser" v-model="valid" @submit.prevent="deleteUser({ valid, id })" @keydown.prevent.enter>
              <v-text-field outlined v-model="id" :rules="notEmptyRules" label="UID" required />

              <v-btn type="submit" color="success" :disabled="!valid">Delete</v-btn>

              <v-btn class="mx-3" @click="removeUserDialog = false" color="error">cancel</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { notEmptyRules } from '@/utils/formRules';
import { mapActions } from 'vuex';

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
    ...mapActions('localAuth', ['createNewUser']),
    ...mapActions('localAuth', ['deleteUser']),

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
