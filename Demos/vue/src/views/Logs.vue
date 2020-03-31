<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <v-card>
          <v-card-title>
            Last Events
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details />
          </v-card-title>
          <v-data-table :headers="headers" :items="desserts" :search="search" />
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="8">
        <v-card>
          <v-card-title>
            Most important Events
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details />
          </v-card-title>
          <v-data-table :headers="headers" :items="desserts" :search="search" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: '',
        headers: [
          { text: 'Event', align: 'start', sortable: false,  value: 'name', },
          { text: 'Date', value: 'date' },
          { text: 'Person', value: 'person' },
        ],
        desserts: [
          {
            name: 'User backed up the database',
            date: new Date().toUTCString(),
            person: "Jens Vanhulst",
          },
          {
            name: 'User added data manually',
            date: new Date().toUTCString(),
            person: "Kasper Toetenel",
          },
        ],
    }
  },
}
</script>

<style>

</style>