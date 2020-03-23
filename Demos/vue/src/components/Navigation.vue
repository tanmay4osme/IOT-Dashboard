<template>
<div>
    <v-container class="fill-height">
      <v-row
        align="center"
        justify="center"
      >
        <v-btn
          color="pink"
          dark
          @click.stop="drawer = !drawer"
        >
          Menu
        </v-btn>
      </v-row>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://media-exp1.licdn.com/dms/image/C5603AQH6RW9NCkh0Iw/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=gb8VBMdeQHMEF-kImi9B1IHgB59vvNfvQJR9iRa2E3w"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Bart Stukken</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item>
          <v-list-item-icon>
            <font-awesome-icon :icon="['fas', 'home']" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
      }
    },
  }
</script>
