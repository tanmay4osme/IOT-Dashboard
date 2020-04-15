<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-container>
            <v-row>
              <v-col class="ml-5" cols="12">
                <h1>Notifications</h1>
                <v-btn @click="createNotificationDialog = !createNotificationDialog" class="mt-5"
                       color="success" depressed>New notification
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
          <new-notification-form :createNotification="createNotification" :creating="creating"
                                 :showing="createNotificationDialog"></new-notification-form>
        </v-card>
      </v-col>
    </v-row>
    <v-card>
      <v-row class="py-10" justify="center">
        <v-col cols="10">
          <FeathersVuexFind :query="{}" service="notifications">
            <div slot-scope="props">
              <v-data-table :headers="notificationTable.headers" :items="props.items"
                            class="elevation-1">
                <template v-slot:top>
                  <v-dialog max-width="500px" v-model="dialog">
                    <v-card>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12">
                              <h1>Edit item</h1>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field label="Text" outlined
                                            v-model="editedItem.text"></v-text-field>
                              <v-text-field label="Type" outlined
                                            v-model="editedItem.type"></v-text-field>
                              <v-switch :label="`Status: ${convertItemStatus(editedItem.status)}`"
                                        v-model="editedItem.status"></v-switch>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="close" color="red" text>Cancel</v-btn>
                        <v-btn @click="save" color="green" text>Save</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </template>
                <template v-slot:item.actions="{ item }">
                  <v-icon @click="editItem(item)" class="mr-2" small>
                    mdi-pencil
                  </v-icon>
                  <v-icon @click="deleteItem(item)" class="mr-2" small>
                    mdi-delete
                  </v-icon>
                </template>
                <template v-slot:item.status="{ item }">
                  <v-chip :color="getColor(item.status)" dark>{{ convertItemStatus(item.status) }}
                  </v-chip>
                </template>
              </v-data-table>
            </div>
          </FeathersVuexFind>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import { FeathersVuexFind } from 'feathers-vuex';
  import NewNotificationForm from '@/components/forms/NewNotificationForm.vue';
  import { notificationTable } from '@/utils/tableConfigs';

  /* eslint-disable */
  export default {
    components: {
      FeathersVuexFind,
      NewNotificationForm,
    },

    data: () => ({
      dialog: false,
      editedId: '',
      editedItem: {
        text: '',
        type: '',
        status: false,
      },

      notificationTable,
      createNotificationDialog: false,
    }),

    watch: {
      dialog(val) {
        val || this.close();
      },
    },

    computed: {
      ...mapState('notifications', { creating: 'isCreatePending' }),
    },

    methods: {
      ...mapActions('notifications', ['update']),

      convertItemStatus(item) {
        if (item === true) return 'Active';
        return 'Inactive';
      },
      getColor(status) {
        if (status === true) return 'green';
        return 'red';
      },
      editItem(item) {
        this.editedId = item._id;
        this.editedItem = { ...item };
        this.dialog = true;
      },

      close() {
        this.dialog = false;
        setTimeout(() => {
          this.editedId = '';
        }, 300);
      },

      async save() {
        if (this.editedId != null) {
          try {
            await this.update([this.editedId, this.editedItem]);
          } catch (error) {
            console.log(error);
          }
        }
        this.close();
      },

      async deleteItem(item) {
        const choice = window.confirm('Are you sure you want to delete this item?');
        if (choice === true) {
          const { Notification } = this.$FeathersVuex.api;
          Notification.get(item._id)
            .then((notification) => {
              notification
                .remove()
                .then(() => {
                  console.log('removed');
                })
                .catch((e) => {
                  console.log(e);
                });
            })
            .catch((e) => {
              console.log(e);
            });
        }
      },

      async createNotification(notification) {
        const { Notification } = this.$FeathersVuex.api;
        const newNotification = new Notification(notification);
        try {
          await newNotification.save();
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
</script>

<style lang="scss" scoped></style>
