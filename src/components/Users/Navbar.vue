<template>
  <div>
    <v-app-bar
        class="d-sm-none"
        color="#f5f5f5 accent-4"
        dense
        flat
        light
        >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title></v-toolbar-title>

        <div class="flex-grow-1"></div>

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-menu
            left
            bottom
        >
            <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
            </template>

            <v-list>
            <v-list-item
                v-for="n in 5"
                :key="n"
                @click="() => {}"
            >
                <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        >
        <v-list-item v-for="item in profile" :key="item.name" class="py-5">
            <v-list-item-avatar size="80">
            <v-img :src="item.avatar" ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <span class="caption">{{ item.status }}</span>
            </v-list-item-content>
        </v-list-item>

        <v-list dense>

            <v-list-item
            v-for="item in navigations"
            :key="item.title"
            router :to="item.route"
            >
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
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
        profile: [
            { avatar: 'https://randomuser.me/api/portraits/men/78.jpg', name: 'Eze Innocent', status: 'online'}
        ],
        navigations: [
          { title: 'Home', icon: 'mdi-home-outline', route: '/userdashboard' },
          { title: 'Transaction', icon: 'mdi-atom-variant', route: '/usertransactions' },
          { title: 'Loans', icon: 'mdi-bank-minus', route: '/userloans' },
          { title: 'Savings', icon: 'mdi-bank-plus', route: '/usersavings' },
          { title: 'Billing', icon: 'mdi-checkbook', route: '/userbilling' },
          { title: 'Notifications', icon: 'mdi-bell-outline', route: '/usernotifications' },
          { title: 'Settings', icon: 'mdi-settings-outline', route: '/usersettings' },
        ],
      }
    },
  }
</script>