<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
    >
      <v-list-item v-for="profile in profiles" :key="profile.avatar">
        <v-list-item-avatar>
          <v-img :src="profile.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-title class="pt-4"> {{ profile.name }} <p class="caption gray--text"> {{ profile.position }}</p></v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-list class="mt-5 pt-5">
        <v-list-item
          v-for="link in links"
          :key="link.title"
          router :to="link.route"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      
    </v-navigation-drawer>
  </v-card>
</template>


<script>
  export default {
    data () {
      return {
        drawer: true,
        profiles:[
          { avatar: 'https://randomuser.me/api/portraits/men/85.jpg', name: 'John Leider', position: 'cooperative head'}
        ],
        links: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard-outline', route: '/dashboard' },
          { title: 'Transactions', icon: 'mdi-cash-multiple', route: '/transactions' },
          { title: 'Members', icon: 'mdi-account-group-outline', route: '/members' },
          { title: 'Notifications', icon: 'mdi-bell-outline', route: '/notifications'},
          { title: 'Settings', icon: 'mdi-settings-outline', route: 'settings' },
        ],
        mini: true,
      }
    },
  }
</script>

<style scoped>

.v-navigation-drawer {
  background-color: #123A47 !important;
}

.v-navigation-drawer .v-list-item__title {
  color: #ffffff;
}

.v-navigation-drawer .v-icon, .v-navigation-drawer .v-list-item__content {
  color: #ffffff;
}

.v-navigation-drawer .v-list-item--active {
  background-color: #99CC33 !important;
}

</style>
