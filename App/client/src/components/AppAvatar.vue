<template>
  <v-list-item class="px-0" two-line>
    <v-list-item-avatar>
      <img :src="user.imageUrl" alt="user image" />
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>{{ user.displayName }}</v-list-item-title>
      <v-list-item-subtitle>{{ user.role }}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import {mapState} from 'vuex';

export default {
  computed: {
    ...mapState('auth', {user: 'user'}),
  },
};
</script>
