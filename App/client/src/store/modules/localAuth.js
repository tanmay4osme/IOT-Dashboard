/* eslint-disable */
import router from '@/router';
import Vue from 'vue';

const actions = {
  async login({ dispatch }, { valid, user }) {
    if (valid) {
      dispatch(
        'auth/authenticate',
        {
          strategy: 'local',
          ...user,
        },
        { root: true },
      )
        .then(async () => {
          router.push('/dashboard');
        })
        .catch((e) => {
          console.log(e);
        });
    }
  },

  createNewUser(_, { valid, user }) {
    if (valid) {
      const { User } = Vue.$FeathersVuex.api;
      const newUser = new User(user);

      newUser
        .save()
        .then((u) => {
          //this.showSnackbar('success', `User created with username : ${u.username} !`);
          //this.generateLogEntry(`${this.$store.state.auth.payload.user.username} added ${u.username} to the system`);
        })
        .catch((e) => {
          this.showSnackbar('error', `${e.message}`);
        });
    }
  },

  deleteUser(_, { valid, id }) {
    const choice = window.confirm('Are you sure you want to delete this item?');
    if (choice && valid) {
      const { User } = Vue.$FeathersVuex.api;
      User.get(id)
        .then((user) => {
          user
            .remove()
            .then((u) => {
              // this.showSnackbar('success', `User deleted with id : ${this.id} !`);
              // this.generateLogEntry(`${this.$store.state.auth.payload.user.username} deleted ${u.username} from the system`);
              // this.$refs.deleteUser.reset();
              // this.removeUserDialog = false;
            })
            .catch((e) => {
              //this.showSnackbar('error', `${e.message} Please try again later or contact your system admin. `);
            });
        })
        .catch((e) => {
          //this.showSnackbar('error', `${e.message}`);
        });
    } else {
      console.log('false');
    }
  },
};

export default {
  namespaced: true,
  actions,
};
