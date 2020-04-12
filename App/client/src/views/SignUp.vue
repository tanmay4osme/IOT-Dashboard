<template>
  <v-slide-y-transition mode="out-in">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-card class="mx-auto my-auto pa-10" max-width="500" outlined>
            <v-form v-if="!loading" v-model="valid" @submit.prevent="signUp" @keydown.prevent.enter>
              <h3 class="mb-10">Please sign up !</h3>
              <v-text-field outlined v-model="user.username" :rules="notEmptyRules" label="Username" required></v-text-field>
              <v-text-field outlined v-model="user.displayName" :rules="notEmptyRules" label="Display Name" required></v-text-field>
              <v-text-field outlined v-model="user.password" :rules="notEmptyRules" label="Password" type="password" required></v-text-field>
              <v-text-field outlined v-model="user.confirmPassword" :rules="confirmPasswordRules" label="Confirm Password" type="password" required></v-text-field>
              <v-text-field outlined v-model="user.imageUrl" :rules="notEmptyRules" label="Profile picture URL" required></v-text-field>
              <v-btn type="submit" :disabled="!valid">SignUp</v-btn>
            </v-form>

            <v-progress-circular v-if="loading" :size="70" :width="7" indeterminate color="primary" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-slide-y-transition>
</template>

<script>
import { mapState } from 'vuex';
import { notEmptyRules } from '../utils/formRules';

export default {
  name: 'signUp',
  data: (vm) => ({
    valid: false,
    user: {
      username: '',
      password: '',
      confirmPassword: '',
      displayName: '',
      imageUrl: '',
    },
    notEmptyRules,
    confirmPasswordRules: [(confirmPassword) => confirmPassword === vm.user.password || 'Password must match.'],
  }),
  computed: {
    ...mapState('users', { loading: 'isCreatePending' }),
  },
  methods: {
    signUp() {
      if (this.valid) {
        const { User } = this.$FeathersVuex.api;
        const user = new User(this.user);
        user
          .save()
          .then((u) => {
            console.log(u);
            this.$router.push('/login');
          })
          .catch((e) => {
            console.error(e);
          });
      }
    },
  },
};
</script>
