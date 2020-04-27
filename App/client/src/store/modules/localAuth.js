/* eslint-disable import/no-cycle */
import router from '@/router';

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
        });
    }
  },
};

export default {
  namespaced: true,
  actions,
};
