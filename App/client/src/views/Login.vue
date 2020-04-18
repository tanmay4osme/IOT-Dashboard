<!-- eslint-disable -->
<template>
  <v-container class="pa-0 ma-0" fluid>
    <v-row align="center" class="pa-0 ma-0" justify="center">
      <v-col class="carousel-wrapper pa-0 ma-0" cols="6">
        <v-carousel :show-arrows="false" class="fill-height" cycle height="100vh"
                    hide-delimiter-background hide-delimiters>
          <v-carousel-item :key="i" :src="slide" v-for="(slide, i) in slides">

          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="6">
        <v-card id="login-card" class="ma-auto pa-10" elevation="10" max-width="455" outlined>
          <ValidationObserver ref="observer">
            <v-form @keydown.prevent.enter @submit.prevent="login({ valid, user })"
                    v-model="valid">
              <h3 class="mb-10"> Welcome back! <br/> Log in to your account. </h3>

              <v-text-field label="Username" outlined required v-model="user.username"/>

              <v-text-field label="Password" outlined required type="password"
                            v-model="user.password"/>

              <v-btn :disabled="!valid" type="submit">Login</v-btn>
            </v-form>
          </ValidationObserver>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  /* eslint-disable */
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'Login',
    data() {
      return {
        valid: false,
        user: {
          username: '',
          password: '',
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
    methods: {
      ...mapActions('localAuth', ['login']),
    },
  };
</script>

<style>
  .carousel-wrapper {
    height: 100vh !important;
  }

</style>
