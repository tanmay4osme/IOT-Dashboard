<template>
  <v-slide-y-transition mode="out-in">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="8">
          <v-alert v-if="error" border="right" colored-border type="error" elevation="2">
            {{ error }} : Please check your credentials! If you don't have an account ask the system
            admin.</v-alert
          >
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="8">
          <v-card class="mx-auto my-auto pa-10" max-width="344" outlined>
            <v-form v-if="!loading" v-model="valid" @submit.prevent="login" @keydown.prevent.enter>
              <h3 class="mb-10">Welcome back! <br />Log in to your account.</h3>
              <v-text-field
                outlined
                v-model="user.username"
                :rules="notEmptyRules"
                label="Username"
                required
              ></v-text-field>

              <v-text-field
                outlined
                v-model="user.password"
                :rules="notEmptyRules"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <v-btn type="submit" :disabled="!valid">Login</v-btn>
            </v-form>

            <v-progress-circular
              v-if="loading"
              :size="70"
              :width="7"
              indeterminate
              color="primary"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-slide-y-transition>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { notEmptyRules } from '@/validators';

export default {
  name: 'signUp',
  data: () => ({
    valid: false,
    error: '',
    user: {
      username: '',
      password: '',
    },
    notEmptyRules,
  }),
  computed: {
    ...mapState('users', { loading: 'isAuthenticatePending' }),
  },
  methods: {
    ...mapActions('auth', ['authenticate']),
    login() {
      if (this.valid) {
        this.authenticate({
          strategy: 'local',
          ...this.user,
        })
          .then(() => {
            this.$router.push('/dashboard');
          })
          .catch((e) => {
            this.error = e.message;
          });
      }
    },
  },
};
</script>
