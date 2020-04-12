<template>
  <v-list-item two-line class="px-0">
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
export default {
  props: ['user'],
};
</script>
