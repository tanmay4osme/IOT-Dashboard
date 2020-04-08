<template>
<div>
   <v-app-bar color="#0071D9" elevation="0" app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
    <v-toolbar-title light class="white--text">
      {{ $route.name }}
    </v-toolbar-title>
  </v-app-bar>
   
   <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://media-exp1.licdn.com/dms/image/C5603AQH6RW9NCkh0Iw/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=gb8VBMdeQHMEF-kImi9B1IHgB59vvNfvQJR9iRa2E3w"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>
          <v-list-item-title>Bart Stukken</v-list-item-title>
        </v-list-item-title>
      </v-list-item>
    </v-list>

      <v-divider></v-divider>

      <v-list shaped>
        <v-list-item class="menu-item" link @click="$router.push('/')"> 
          <v-list-item-icon>
            <font-awesome-icon :icon="['fas', 'home']" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title >Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="menu-item" link @click="$router.push('/camera')">
          <v-list-item-icon>
            <font-awesome-icon :icon="['fas', 'camera']" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Camera-feed</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item class="menu-item" link @click="$router.push('/history')">
          <v-list-item-icon>
            <font-awesome-icon :icon="['fas', 'history']" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>History</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
       
        <v-list-item class="menu-item" link @click="$router.push('/logs')">
          <v-list-item-icon>
            <font-awesome-icon :icon="['fas', 'exclamation-circle']" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logs</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item class="menu-item" link @click="$router.push('/charts')">
          <v-list-item-icon>
            <font-awesome-icon :icon="['fas', 'chart-area']" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Charts</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item class="menu-item" link @click="$router.push('/notifications')">
          <v-list-item-icon>
            <font-awesome-icon :icon="['fas', 'flag-checkered']" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Notifications</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item class="menu-item" link @click="$router.push('/backup')">
          <v-list-item-icon>
            <font-awesome-icon :icon="['fas', 'save']" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Back-up</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false
  }),
   
    methods: {
      log() {
        console.log("Clicked");
      }
    }
  }
</script>

<style lang="scss" scoped>
.v-list-item__icon {
  margin-right: 10px !important;
}

.menu-item:hover {
  background-color: rgba(0, 112, 217, 0.25) !important;
}


</style>
