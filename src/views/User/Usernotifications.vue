<template>
    <div class="Notification-user">
        <Navbar />
        <v-container class="d-sm-none">
            <div class="headers mt-5 px-5">
                <h4>Notifications</h4>
                <span class="caption">Information on all activities.</span>
            </div>
            <v-tabs
            v-model="tab"
            background-color="transparent"
            >
                <v-tab class="text-capitalize">
                    Transactions
                </v-tab>
                <v-tab class="text-capitalize">
                    Others
                </v-tab>

                <v-tab-item>
                    <v-card flat>
                        <v-card-text>
                            <v-list two-line subheader>
                                <v-list-item
                                    v-for="item in transactions"
                                    :key="item.amount"
                                >
                                    <v-list-item-avatar>
                                        <v-img :src="item.avatar"></v-img>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <v-list-item-title v-text="item.amount"></v-list-item-title>
                                        <span class="caption"><span>{{ item.status }}</span> - New monthly <span>{{ item.nature }}</span></span>
                                        <v-list-item-subtitle class="caption" v-text="item.date"></v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                        <span class="caption">{{ item.time }}</span>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <v-card-text>
                            <v-list three-line>
                                <template v-for="(item, index) in items">
                                    <v-subheader
                                        v-if="item.header"
                                        :key="item.header"
                                        v-text="item.header"
                                    ></v-subheader>

                                    <v-divider
                                        v-else-if="item.divider"
                                        :key="index"
                                        :inset="item.inset"
                                    ></v-divider>

                                    <v-list-item
                                        v-else
                                        :key="item.title"
                                    >
                                    <v-list-item-avatar>
                                        <v-icon
                                            :class="[item.iconClass]"
                                            v-text="item.icon"
                                        ></v-icon>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <v-list-item-title v-html="item.name"></v-list-item-title>
                                            <span class="caption">{{ item.position }}</span>
                                            <v-list-item-subtitle v-html="item.message"></v-list-item-subtitle>
                                            </v-list-item-content>
                                    </v-list-item>
                                </template>
                            </v-list>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </v-container>
        <v-container class="d-none d-sm-flex">
            <v-row align="center" justify="center">
                <v-img
                src="../../assets/mobile-friendly.gif"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="500"
                max-height="300"
                ></v-img>
            </v-row>
        </v-container>
        <v-container class="d-none d-sm-flex">
            <v-row align="center" justify="center">
                <h5>sorry! please visit this app on mobile</h5>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Navbar from '@/components/Users/Navbar'

export default {
    name: 'Userbilling',
    components: { 
        Navbar, 
    },

  data() {
    return {
      tab: null,

      transactions: [
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',  amount: '20,000', status: 'successful', nature: 'savings', time: '02:35 AM', date: 'Jan 9, 2014' },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', amount: '40,000', status: 'successful', nature: 'savings', time: '02:35 AM', date: 'Jan 17, 2014' },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', amount: '10,000', status: 'successful', nature: 'savings', time: '02:35 AM', date: 'Jan 28, 2014' },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', amount: '20,000', status: 'successful', nature: 'savings', time: '02:35 AM', date: 'Jan 17, 2014' },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg', amount: '10,000', status: 'successful', nature: 'savings', time: '02:35 AM', date: 'Jan 28, 2014' },
      ],

        items: [
        { header: 'Today' },
        {
          icon: 'mdi-account-outline',
          iconClass: 'grey lighten-1 white--text',
          position: 'cooperative head',
          name: 'Brunch this weekend?',
          message: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        { divider: true, inset: true },
        {
          icon: 'mdi-account-outline',
          iconClass: 'grey lighten-1 white--text',
          position: 'cooperative head',
          name: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          message: "Wish I could come, but I'm out of town this weekend.",
        },
        { divider: true, inset: true },
        {
          icon: 'mdi-account-outline',
          iconClass: 'grey lighten-1 white--text',
          position: 'cooperative head',
          name: 'Oui oui',
          message: "Do you have Paris recommendations? Have you ever been?",
        },
        { divider: true, inset: true },
        {
          icon: 'mdi-account-outline',
          iconClass: 'grey lighten-1 white--text',
          position: 'cooperative head',
          name: 'Birthday gift',
          message: "Have any ideas about what we should get Heidi for her birthday?",
        },
        { divider: true, inset: true },
        {
          icon: 'mdi-account-outline',
          iconClass: 'grey lighten-1 white--text',
          position: 'cooperative head',
          name: 'Recipe to try',
          message: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
      ],
    }
  }

};
</script>

<style scoped>
    .v-application--is-ltr .v-tabs-bar.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows) > .v-slide-group__wrapper > .v-tabs-bar__content > .v-tabs-slider-wrapper + .v-tab {
        margin-left: 0;
    }
</style>
