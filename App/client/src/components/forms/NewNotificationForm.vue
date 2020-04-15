<template>
  <v-row justify="center">
    <v-dialog max-width="500" persistent v-model="dialog">
      <v-card>
        <v-card-title class="headline mb-5">Create a new notification</v-card-title>
        <v-card-text>
          <ValidationObserver ref="notificationObserver">
            <v-form @keydown.prevent.enter @submit.prevent="onCreateNotification" v-model="valid">

              <ValidationProvider v-slot="{ errors }" name="Text" rules="required|alpha_spaces">
                <v-text-field label="Text" outlined required v-model="notification.text" :error-messages="errors"/>
              </ValidationProvider>

              <ValidationProvider v-slot="{ errors }" name="Text" rules="required">
                <v-select :items="types" label="Type selection" outlined required v-model="notification.type" :error-messages="errors"></v-select>
              </ValidationProvider>
              <v-switch :label="`Status:  ${notification.status}`" v-model="notification.status"></v-switch>
              <v-btn :disabled="!valid" @click="dialog = !dialog" class="mx-3" color="green" type="submit">Create new notification
              </v-btn>
              <v-btn @click="dialog = !dialog" color="error">cancel</v-btn>
            </v-form>
          </ValidationObserver>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  /* eslint-disable */
  import "./Rules/index";

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
