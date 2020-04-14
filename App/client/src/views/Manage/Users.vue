<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-card-title>Manage users</v-card-title>
                  <v-card-actions><v-btn @click="createUserDialog = !createUserDialog" depressed color="green">Add user</v-btn></v-card-actions>
                </v-col>
              </v-row>
            </v-container>
            <new-user-form :showing="createUserDialog" :creating="userIsCreating" :createUser="createUser"></new-user-form>
          </v-card>
        </v-col>
      </v-row>
        <v-card>
          <v-row class="py-10" justify="center">
            <v-col v-for="user in users" v-bind:key="user._id" cols="5">
              <v-card outlined class="mx-auto">
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">id : {{user._id}}</div>
                    <div class="overline mb-1">Username : {{user.username}}</div>
                    <v-list-item-title class="headline mb-1"> Name : {{user.displayName}}</v-list-item-title>
                    <v-list-item-subtitle>Role : {{user.role}}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-avatar tile size="80" color="grey">
                    <v-img :src="user.imageUrl"></v-img>
                  </v-list-item-avatar>
                </v-list-item>
                <v-card-actions>
                  <v-btn text color="orange">Edit user</v-btn>
                  <v-btn text color="red">Remove user</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
    </v-container>
  </div>
</template>

<!-- eslint-disable-->
<script>
  import NewUserForm from '../../components/forms/NewUserForm';
  import { mapGetters, mapActions, mapState } from 'vuex';

  export default {
    name: 'User-overview',
    components: {
      NewUserForm,
    },
    data() {
      return {
        createUserDialog: false
      };
    },
    computed: {
      ...mapState('auth', { userIsCreating: 'isCreatePending' }),
      ...mapGetters('users', { findUsersInStore: 'find' }),
      query() {
        return {};
      },
      users() {
        return this.findUsersInStore({ query: this.query }).data;
      },
    },
    methods: {
      ...mapActions('users', { findUsers: 'find' }),
      async createUser(user) {
        const { User } = this.$FeathersVuex.api;
        const newUser = new User(user);
        try {
          await newUser.save();
          //this.generateLogEntry(`${this.user.user.username} added ${newUser.username} to the system.`);
          //generateSnackbar(this.snackbar, 'success', 'User created successfully !');
        } catch (error) {
          //generateSnackbar(this.snackbar, 'error', error);
        }
      },
    },
    created() {
      this.findUsers({ query: this.query });
    },
  };
</script>

<style lang="scss" scoped></style>
