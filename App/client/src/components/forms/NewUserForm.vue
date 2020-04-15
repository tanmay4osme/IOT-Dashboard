<template>
  <!-- Create a new user -->
  <v-row justify="center">
    <v-dialog max-width="500" persistent v-model="dialog">
      <v-card>
        <v-card-title class="headline mb-5">Create a new user</v-card-title>
        <v-card-text>
          <ValidationObserver ref="observer" v-slot="{ }">
            <v-form @keydown.prevent.enter @submit.prevent="onCreateUser" v-model="valid">
              <ValidationProvider v-slot="{ errors }" name="Username" rules="required" >
                <v-text-field label="Username" outlined required :counter="15" v-model="user.username" :error-messages="errors"/>
              </ValidationProvider>

              <ValidationProvider v-slot="{ errors }" name="Display Name" rules="required">
                <v-text-field label="Display Name" outlined required :counter="20" v-model="user.displayName" :error-messages="errors"/>
              </ValidationProvider>

              <ValidationObserver>
                <ValidationProvider rules="confirmed:confirmation" v-slot="{ errors }">
                  <v-text-field label="Password" outlined required type="password" v-model="user.password" :error-messages="errors"/>
                </ValidationProvider>

                <ValidationProvider v-slot="{ errors }" vid="confirmation">
                  <v-text-field label="Confirm Password" outlined required type="password" v-model="confirmation" :error-messages="errors"/>
                </ValidationProvider>
              </ValidationObserver>

              <ValidationProvider v-slot="{ errors }" name="Profile picture URL" rules="required">
                <v-text-field label="Profile picture URL" outlined required v-model="user.imageUrl" :error-messages="errors"/>
              </ValidationProvider>

              <ValidationProvider v-slot="{ errors }" name="Email" rules="required">
                <v-text-field label="Email" outlined required v-model="user.email" :error-messages="errors"/>
              </ValidationProvider>

              <ValidationProvider rules="required" v-slot="{ errors }" name="Phone">
                <v-text-field label="Phone" type="phone" outlined required v-model="user.phone" :error-messages="errors"/>
              </ValidationProvider>

              <ValidationProvider v-slot="{ errors }" name="Role" rules="required">
                <v-select :items="roleItems" label="Role selection" outlined required v-model="user.role" :error-messages="errors"></v-select>
              </ValidationProvider>

              <v-btn :disabled="!valid" @click="dialog = false" color="primary" type="submit">Create
                new user
              </v-btn>
              <v-btn @click="dialog = false" class="mx-3" color="error">cancel</v-btn>
            </v-form>
          </ValidationObserver>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  /* eslint-disable */
  import { required, email, max, alpha_num, alpha_spaces, confirmed } from 'vee-validate/dist/rules';
  import { extend, setInteractionMode } from 'vee-validate';

  setInteractionMode('aggressive');

  extend('alpha_num', {
    ...alpha_num,
    message: '{_field_} may contain alphabetic characters or numbers.',
  });

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  });

  extend('confirmed', {
    ...confirmed,
    message: 'passwords must match',
  });


  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  });

  extend('alpha_spaces', {
    ...alpha_spaces,
    message: '{_field_} may contain alphabetic characters, numbers and spaces',
  });

  extend('email', {
    ...email,
    message: 'Email must be valid',
  });

  export default {
    name: 'NewUserForm',
    props: ['creating', 'createUser', 'showing'],
    data() {
      return {

        valid: false,
        dialog: false,
        confirmation: '',

        roleItems: ['Administrator', 'Member'],
        user: {
          username: '',
          password: '',
          displayName: '',
          imageUrl: '',
          role: '',
          email: '',
          phone: '',
        },
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
            displayName: '',
            imageUrl: '',
            role: '',
          };
        }
      },
    },
  };
</script>
