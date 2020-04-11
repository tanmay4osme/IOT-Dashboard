<template>
  <v-slide-y-transition mode="out-in">
    <v-container fluid>
      <v-snackbar absolute v-model="snackbar.show" :color="snackbar.color" :timeout="snackbar.timeout" right top>
        {{ snackbar.text }}
      </v-snackbar>

      <v-row align="center" justify="center">
        <v-col cols="10">
          <section id="actions">
            <h1 class="mb-5">User management</h1>
            <div class="my-2">
              <v-btn class="mx-1" @click="dialog = !dialog" depressed large color="success">
                Add new user
              </v-btn>
              <v-btn class="mx-1" @click="removeUserDialog = !removeUserDialog" depressed large color="error">
                Delete a user
              </v-btn>
            </div>

            <!-- Create a new user -->
            <v-row justify="center">
              <v-dialog v-model="dialog" persistent max-width="500">
                <v-card>
                  <v-card-title class="headline mb-5">Add a new user</v-card-title>
                  <v-card-text>
                    <v-form ref="signup" v-if="!loading" v-model="valid" @submit.prevent="signUp" @keydown.prevent.enter>
                      <v-text-field outlined v-model="user.username" :rules="notEmptyRules" label="Username" required />
                      <v-text-field outlined v-model="user.displayName" :rules="notEmptyRules" label="Display Name" required />
                      <v-text-field outlined v-model="user.password" :rules="notEmptyRules" label="Password" type="password" required />
                      <v-text-field outlined v-model="user.confirmPassword" :rules="confirmPasswordRules" label="Confirm Password" type="password" required />
                      <v-text-field outlined v-model="user.imageUrl" :rules="notEmptyRules" label="Profile picture URL" required />

                      <v-btn @click="dialog = false" type="submit" color="primary" :disabled="!valid">
                        SignUp
                      </v-btn>

                      <v-btn class="mx-3" @click="dialog = false" type="submit" color="error">
                        cancel
                      </v-btn>
                    </v-form>

                    <v-progress-circular v-if="loading" :size="70" :width="7" indeterminate color="primary" />
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

                      <v-btn type="submit" color="success" :disabled="!valid">
                        Delete
                      </v-btn>

                      <v-btn class="mx-3" @click="removeUserDialog = false && this.$refs.deleteUser.reset()" color="error">
                        cancel
                      </v-btn>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-row>
          </section>
        </v-col>
      </v-row>

      <!-- User listing --->
      <v-row class="my-10" align="center" justify="center">
        <v-col cols="10">
          <h1 class="mb-5">User listing</h1>
          <FeathersVuexFind service="users" :query="{}">
            <div slot-scope="props">
              <v-data-table :headers="table.headers" :items="props.items" :items-per-page="table.displayAmount" class="elevation-1" />
            </div>
          </FeathersVuexFind>
        </v-col>
      </v-row>
    </v-container>
  </v-slide-y-transition>
</template>

<script>
/**
 * TODO : clear form after submit
 */

import { mapState } from 'vuex';
import { notEmptyRules, confirmPasswordRules } from '@/validators';
import { FeathersVuexFind } from 'feathers-vuex';

export default {
  name: 'Manage',
  components: {
    FeathersVuexFind,
  },
  data: () => ({
    valid: false,
    removeUserDialog: false,
    dialog: false,
    snackbar: {
      show: false,
      text: '',
      color: 'success',
      timeout: 6000,
    },
    table: {
      displayAmount: 5,
      headers: [
        { text: 'UID', value: '_id', sortable: false },
        { text: 'Username', value: 'username', sortable: false },
        { text: 'Display name', value: 'displayName', sortable: false },
        { text: 'Profile picture URL', value: 'imageUrl', sortable: false },
        { text: 'Created at', value: 'createdAt', sortable: false },
      ],
    },

    id: '',
    user: {
      username: '',
      password: '',
      confirmPassword: '',
      displayName: '',
      imageUrl: '',
    },
    notEmptyRules,
    confirmPasswordRules,
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
            this.showSnackbar('success', `User created with username : ${u.username} !`);
          })
          .catch((e) => {
            this.showSnackbar('error', `${e.message}`);
          });
      }
    },

    showSnackbar(color, text) {
      this.snackbar.color = color;
      this.snackbar.text = text;
      this.snackbar.show = true;
    },

    deleteUser() {
      const choice = window.confirm('Are you sure you want to delete this item?');
      if (choice === true) {
        const { User } = this.$FeathersVuex.api;
        User.get(this.id)
          .then((user) => {
            user
              .remove()
              .then(() => {
                this.showSnackbar('success', `User deleted with id : ${this.id} !`);
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
  },
};
</script>
<style scoped></style>
