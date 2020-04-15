<template>
  <v-container>
    <v-snackbar :color="snackbar.color" :timeout="snackbar.timeout" right top
                v-model="snackbar.show">{{ snackbar.text }}
    </v-snackbar>
    <v-row>
      <v-col cols="12">
        <v-card class="ma-0 pa-0">
          <v-container>
            <v-row>
              <v-col class="ml-5" cols="12">
                <h1>My account</h1>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card>
          <v-container class=" pt-0">
            <v-row>
              <v-col class="pa-0" cols="12">
                <div align="center" class="top">
                  <div class="user-info">
                    <h2>{{ user.displayName }}</h2>
                    <h4>{{ user.role }}</h4>
                    <img :src="user.imageUrl" class="mt-4" height="150px" alt="user image"/>
                  </div>
                </div>
                <div class="bottom">
                  <div class="user-info-text">
                    <h4>Username : {{ user.username }}</h4>
                    <h4>Email : {{ user.email }}</h4>
                    <h4>Phone : {{ user.phone }}</h4>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-card class="mt-5">
          <v-container>
            <v-row>
              <v-col class="ml-5" cols="12">
                <h1>Change your password</h1>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col class="mt-5" cols="9">
                <v-form v-model="valid">
                  <v-text-field label="New password" outlined required
                                type="password"></v-text-field>
                  <v-text-field label="Confirm new password" outlined required
                                type="password"></v-text-field>
                  <v-btn color="orange" type="submit">Update</v-btn>
                  <v-btn @click="resetForm" class="ml-3" color="red">reset</v-btn>
                </v-form>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-container>
            <v-row>
              <v-col class="ml-5" cols="12">
                <h1>Edit your profile</h1>
              </v-col>
            </v-row>
            <v-row class="form" justify="center">
              <v-col class="mt-5" cols="9">
                <v-form @keydown.prevent.enter @submit.prevent="updateUser" v-model="valid">
                  <v-text-field disabled label="Role" outlined
                                v-model="editItem.role"></v-text-field>
                  <v-text-field disabled label="User Name" outlined
                                v-model="editItem.username"></v-text-field>
                  <v-text-field label="Display Name" outlined required
                                v-model="editItem.displayName"></v-text-field>
                  <v-text-field label="Phone Number" outlined required
                                v-model="editItem.phone"></v-text-field>
                  <v-text-field label="E-mail" outlined required
                                v-model="editItem.email"></v-text-field>
                  <h3>Please enter password</h3>
                  <v-text-field class="mt-2" label="Current password" outlined
                                required type="password" v-model="editItem.password"></v-text-field>
                  <v-btn color="orange" type="submit">Update</v-btn>
                  <v-btn @click="resetForm" class="ml-3" color="red">reset</v-btn>
                </v-form>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import { generateSnackbar } from '@/utils/index';

  export default {
    data() {
      return {
        snackbar: {
          show: false,
          text: '',
          color: 'success',
          timeout: 6000,
        },
        valid: false,
        editItem: {
          role: '',
          username: '',
          displayName: '',
          phone: '',
          email: '',
          password: '',
        },
      };
    },
    computed: {
      ...mapState('auth', { user: 'user' }),
    },
    mounted() {
      this.editItem = this.user;
    },

    methods: {
      ...mapActions('users', ['update']),
      async updateUser() {
        if (this.valid) {
          try {
            /* eslint-disable-next-line */
            await this.update([this.user.user._id, this.editItem]);
            generateSnackbar(this.snackbar, 'success', 'User updated successfully !');
          } catch (error) {
            generateSnackbar(this.snackbar, 'error', error.message);
          }
        }
      },
      resetForm: () => window.location.reload(),
    },
  };
</script>

<style lang="scss">
  .top {
    background-color: white;
    color: black;
    height: 22vh;
    border-radius: 4px;

    > .user-info {
      transform: translateY(10%);

      > img {
        border-radius: 50%;
      }
    }
  }

  .form {
    margin-bottom: 19px;
  }

  .bottom {
    background-color: transparent;
    height: 25vh;

    > .user-info-text {
      margin-left: 25px;
      transform: translateY(150%);
    }
  }
</style>
