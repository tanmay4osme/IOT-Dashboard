<template>
  <!-- Create a new user -->
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="500">
      <v-card>
        <v-card-title class="headline mb-5">Create a new user</v-card-title>
        <v-card-text>
          <v-form v-model="valid" @submit.prevent="onCreateUser" @keydown.prevent.enter>
            <v-text-field outlined v-model="user.username" :rules="notEmptyRules" label="Username" required />
            <v-text-field outlined v-model="user.displayName" :rules="notEmptyRules" label="Display Name" required />
            <v-text-field outlined v-model="user.password" :rules="notEmptyRules" label="Password" type="password" required />
            <v-text-field outlined v-model="user.confirmPassword" :rules="notEmptyRules" label="Confirm Password" type="password" required />
            <v-text-field outlined v-model="user.imageUrl" :rules="notEmptyRules" label="Profile picture URL" required />
            <v-select outlined v-model="user.role" :items="roleItems" :rules="notEmptyRules" required label="Role selection"></v-select>

            <v-btn @click="dialog = false" type="submit" color="primary" :disabled="!valid">Create new user</v-btn>
            <v-btn class="mx-3" @click="dialog = false" color="error">cancel</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import notEmptyRules from '@/utils/formRules';

export default {
  name: 'NewUserForm',
  props: ['creating', 'createUser', 'showing'],
  data() {
    return {
      valid: false,
      dialog: false,

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
    };
  },
  watch: {
    showing: {
      immediate: true,
      handler() {
        this.dialog = this.showing;
      },
    },
  },
  methods: {
    async onCreateUser() {
      if (this.valid) {
        await this.createUser(this.user);
        this.user = {
          username: '',
          password: '',
          confirmPassword: '',
          displayName: '',
          imageUrl: '',
          role: '',
        };
      }
    },
  },
};
</script>
