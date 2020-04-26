<template>
  <v-container class="mt-12">
    <v-row justify="center">
      <v-col cols="10">
        <FeathersVuexFind :query="{ status: true }" service="notifications" watch="query">
          <div slot-scope="props">
            <v-alert :key="item.id" :type="item.type" border="left" dense v-for="item in props.items">{{ item.text }}
            </v-alert>
          </div>
        </FeathersVuexFind>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AppNotifications',
};
</script>
