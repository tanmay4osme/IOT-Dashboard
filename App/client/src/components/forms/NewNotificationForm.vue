<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="500">
      <v-card>
        <v-card-title class="headline mb-5">Create a new notification</v-card-title>
        <v-card-text>
          <v-form v-model="valid" @submit.prevent="onCreateNotification" @keydown.prevent.enter>
            <v-text-field outlined v-model="notification.text" :rules="notEmptyRules" label="Text" required />
            <v-select outlined v-model="notification.type" :items="types" :rules="notEmptyRules" required label="Type selection"></v-select>
            <v-switch v-model="notification.status" :label="`Status:  ${notification.status}`"></v-switch>
            <v-btn @click="dialog = !dialog" color="primary" type="submit" class="mx-3" :disabled="!valid">Create new notification</v-btn>
            <v-btn @click="dialog = !dialog" color="error">cancel</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import notEmptyRules from '../../utils/formRules';

export default {
  props: ['creating', 'createNotification', 'showing'],

  data: () => ({
    valid: false,
    dialog: false,
    types: ['success', 'info', 'warning', 'error'],
    notification: {
      text: '',
      type: '',
      status: true,
    },
    notEmptyRules,
  }),

  watch: {
    showing: {
      immediate: true,
      handler() {
        this.dialog = this.showing;
      },
    },
  },

  methods: {
    async onCreateNotification() {
      if (this.valid) {
        await this.createNotification(this.notification);
        this.notification = {
          text: '',
          type: '',
          status: true,
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
