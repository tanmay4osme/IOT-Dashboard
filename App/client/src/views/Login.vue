<!-- eslint-disable -->
<template>
  <v-slide-y-transition mode="out-in">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="8">
          <v-card class="mx-auto my-auto pa-10" max-width="344" outlined>
            <ValidationObserver ref="observer">
              <v-form @keydown.prevent.enter @submit.prevent="login({ valid, user })" v-model="valid">
                <h3 class="mb-10"> Welcome back! <br/>  Log in to your account. </h3>

                <ValidationProvider v-slot="{ errors }" name="Username" rules="required|alpha_num">
                  <v-text-field label="Username" outlined required v-model="user.username" :error-messages="errors"/>
                </ValidationProvider>

                <ValidationProvider v-slot="{ errors }" name="Password" rules="required">
                  <v-text-field label="Password" outlined required type="password" v-model="user.password" :error-messages="errors"/>
                </ValidationProvider>

                <v-btn :disabled="!valid" type="submit">Login</v-btn>
              </v-form>
            </ValidationObserver>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-slide-y-transition>
</template>

<script>
  /* eslint-disable */
  import { mapActions, mapState } from 'vuex';
  import { required, alpha_num } from 'vee-validate/dist/rules';
  import { extend, setInteractionMode } from 'vee-validate';

  setInteractionMode('aggressive');

  extend('required', {
    ...required,
    message: '{_field_} can not be empty!',
  });

  extend('alpha_num', {
    ...alpha_num,
    message: '{_field_} may only contain alpha-numeric characters!',
  });

  export default {
    name: 'Login',
    data() {
      return {
        valid: false,
        user: {
          username: '',
          password: '',
        },
      };
    },
    computed: {
      ...mapState('users', { loading: 'isAuthenticatePending' })
    },
    methods: {
      ...mapActions('localAuth', ['login']),
    },
  };
</script>
