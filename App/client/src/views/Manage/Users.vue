<template>
  <v-container>
    <v-snackbar :color="snackbar.color" :timeout="snackbar.timeout" right top
                v-model="snackbar.show">{{ snackbar.text }}
    </v-snackbar>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-container>
            <v-row>
              <v-col class="ml-5" cols="12">
                <h1>Manage users</h1>
                <v-btn @click="createUserDialog = !createUserDialog" class="mt-5" color="green"
                       depressed>Add user
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
          <new-user-form :createUser="createUser" :creating="userIsCreating"
                         :showing="createUserDialog"></new-user-form>
        </v-card>
      </v-col>
    </v-row>
    <v-card>
      <v-row class="py-10 justify-center ">
        <v-col cols="5" v-bind:key="user._id" v-for="user in users">
          <v-card class="mx-auto" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">id : {{ user._id }}</div>
                <div class="overline mb-1">Username : {{ user.username }}</div>
                <v-list-item-title class="headline mb-1">Name : {{ user.displayName }}
                </v-list-item-title>
                <v-list-item-subtitle>Role : {{ user.role }}</v-list-item-subtitle>
                <v-list-item-subtitle>Email : {{ user.email }}</v-list-item-subtitle>
                <v-list-item-subtitle>Phone : {{ user.phone }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar color="grey" round size="80">
                <v-img :src="user.imageUrl"></v-img>
              </v-list-item-avatar>
            </v-list-item>
            <v-card-actions>
              <v-btn color="orange" text>Edit user</v-btn>
              <v-btn @click="deleteUser(user._id)" color="red" text>Remove user</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import NewUserForm from '@/components/forms/NewUserForm';
import {mapActions, mapGetters, mapState} from 'vuex';
import {generateSnackbar} from '@/utils/index';

export default {
  name: 'User-overview',
  components: {
    NewUserForm,
  },
  data() {
    return {
      createUserDialog: false,
      snackbar: {
        show: false,
        text: '',
        color: 'success',
        timeout: 6000,
      },
    };
  },
  computed: {
    ...mapState('auth', {userIsCreating: 'isCreatePending'}),
    ...mapGetters('users', {findUsersInStore: 'find'}),
    query() {
      return {};
    },
    users() {
      return this.findUsersInStore({query: this.query}).data;
    },
  },
  methods: {
    ...mapActions('users', {findUsers: 'find'}),
    async createUser(user) {
      const {User} = this.$FeathersVuex.api;
      const newUser = new User(user);
      try {
        await newUser.save();
        // this.generateLogEntry(`${this.user.user.username} added ${newUser.username} to the system.`);
        generateSnackbar(this.snackbar, 'success', 'User created successfully !');
      } catch (error) {
        generateSnackbar(this.snackbar, 'error', error);
      }
    },

    async deleteUser(id) {
      const choice = window.confirm('Are you sure you want to delete this item?');
      if (choice === true) {
        const {User} = this.$FeathersVuex.api;

        try {
          const user = await User.get(id);
          await user.remove();
          generateSnackbar(this.snackbar, 'success', 'User deleted successfully !');
        } catch (error) {
          generateSnackbar(this.snackbar, 'error', error);
        }
      }
    },
  },
  created() {
    this.findUsers({query: this.query});
  },
};
</script>
