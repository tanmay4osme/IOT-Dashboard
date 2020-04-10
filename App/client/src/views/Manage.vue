<template>
  <v-slide-y-transition mode="out-in">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <h1 class="mb-5">User management</h1>
          <div class="my-2">
            <v-btn @click="dialog = !dialog" depressed large color="primary">Add new user</v-btn>
          </div>
          <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="500">
              <v-card>
                <v-card-title class="headline mb-5">Add a new user</v-card-title>
                <v-card-text>
                  <v-form
                    v-if="!loading"
                    v-model="valid"
                    @submit.prevent="signUp"
                    @keydown.prevent.enter
                  >
                    <v-text-field
                      outlined
                      v-model="user.username"
                      :rules="notEmptyRules"
                      label="Username"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      v-model="user.displayName"
                      :rules="notEmptyRules"
                      label="Display Name"
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
                    <v-text-field
                      outlined
                      v-model="user.confirmPassword"
                      :rules="confirmPasswordRules"
                      label="Confirm Password"
                      type="password"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      v-model="user.imageUrl"
                      :rules="notEmptyRules"
                      label="Profile picture URL"
                      required
                    ></v-text-field>
                    <v-btn @click="dialog = false" type="submit" color="primary" :disabled="!valid"
                      >SignUp</v-btn
                    >

                    <v-btn class="mx-3" @click="dialog = false" type="submit" color="error"
                      >cancel</v-btn
                    >
                  </v-form>

                  <v-progress-circular
                    v-if="loading"
                    :size="70"
                    :width="7"
                    indeterminate
                    color="primary"
                  />
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-row>
        </v-col>
      </v-row>

      <v-row class="my-10" align="center" justify="center">
        <v-col cols="10">
          <h1 class="mb-5">User listing</h1>
          <FeathersVuexFind service="users" :query="{}">
            <div slot-scope="props">
              <v-data-table
                :headers="table.headers"
                :items="props.items"
                :items-per-page="table.displayAmount"
                class="elevation-1"
              ></v-data-table>
            </div>
          </FeathersVuexFind>
        </v-col>
      </v-row>
    </v-container>
  </v-slide-y-transition>
</template>

<script>
import { mapState } from 'vuex';
import { notEmptyRules } from '@/validators';
import { FeathersVuexFind } from 'feathers-vuex';

export default {
  components: {
    FeathersVuexFind,
  },
  name: 'signUp',
  data: (vm) => ({
    valid: false,
    dialog: false,
    table: {
      displayAmount: 5,
      headers: [
        { text: 'Id', value: '_id', sortable: false },
        { text: 'Username', value: 'username', sortable: false },
        { text: 'Display name', value: 'displayName', sortable: false },
        { text: 'Profile picture URL', value: 'imageUrl', sortable: false },
        { text: 'Created at', value: 'createdAt', sortable: false },
      ],
    },
    user: {
      username: '',
      password: '',
      confirmPassword: '',
      displayName: '',
      imageUrl: '',
    },
    notEmptyRules,
    confirmPasswordRules: [
      (confirmPassword) => confirmPassword === vm.user.password || 'Password must match.',
    ],
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
          })
          .catch((e) => {
            console.error(e);
          });
      }
    },
  },
};
</script>
<style scoped></style>
