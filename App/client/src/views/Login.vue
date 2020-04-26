<!-- eslint-disable -->
<template>
  <v-container class="pa-0 ma-0" fluid>
    <v-row align="center" class="pa-0 ma-0" justify="center">
      <v-col class="carousel-wrapper pa-0 ma-0" cols="6">
        <v-carousel :show-arrows="false" class="fill-height" cycle height="100vh" hide-delimiter-background hide-delimiters>
          <v-carousel-item :key="i" :src="slide" v-for="(slide, i) in slides"></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="6">
        <v-row justify="center">
          <v-col cols="10">
            <v-alert v-if="connError.show" class="mb-12" outlined type="error" text>
              {{ connError.message + ' : cannot connect to the server. Please check server status and try again. ' }}
            </v-alert>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-card id="login-card" width="30vw" class="mx-10 pa-10" elevation="10" outlined>
            <ValidationObserver ref="observer" v-slot="{ validate, reset }">
              <v-form @keydown.prevent.enter @submit.prevent="loginUser({ valid, user })" v-model="valid">
                <h3 class="mb-10">
                  Welcome back!
                  <br />
                  Log in to your account.
                </h3>

                <ValidationProvider v-slot="{ errors }" name="Username" rules="required|max:15|min:3|alpha_num">
                  <v-text-field label="Username" outlined required v-model="user.username" :error-messages="errors" :counter="15" />
                </ValidationProvider>

                <ValidationProvider v-slot="{ errors }" name="Password" rules="required">
                  <v-text-field label="Password" outlined required type="password" v-model="user.password" />
                </ValidationProvider>

                <v-btn :disabled="!valid" type="submit">Login</v-btn>
              </v-form>
            </ValidationObserver>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
import { mapActions, mapState } from 'vuex';
import { required, max, min, alpha_num } from '../components/forms/Rules/index';
import { socket } from '../feathers-client';

export default {
  name: 'Login',
  data() {
    return {
      valid: false,
      user: {
        username: '',
        password: '',
      },
      connError: {
        show: false,
        message: '',
      },
      slides: [
        'https://source.unsplash.com/collection/190727/',
        'https://source.unsplash.com/collection/190728/',
        'https://source.unsplash.com/collection/190726/',
        'https://source.unsplash.com/collection/190725/',
        'https://source.unsplash.com/collection/190723/',
      ],
    };
  },
  computed: {
    ...mapState('users', { loading: 'isAuthenticatePending' }),
  },
  mounted() {
    socket.on('connect_error', (error) => {
      this.connError.message = error;
      this.connError.show = true;
    });
  },
  methods: {
    ...mapActions('localAuth', ['login']),
    async loginUser({ valid, user }) {
      const isValid = await this.$refs.observer.validate();
      if (isValid) {
        this.login({ valid, user });
      } else {
        console.log('not valid');
      }
    },
  },
};
</script>

<style>
.carousel-wrapper {
  height: 100vh !important;
}
</style>
