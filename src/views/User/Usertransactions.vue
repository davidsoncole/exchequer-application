<template>
    <div class="Transactions-user">
        <Navbar />
        <v-container class="d-sm-none">
            <div class="headers mt-5 px-5">
                <h4>Transactions</h4>
                <span class="caption">check your monthly transactions.</span>
            </div>
            <v-tabs
            v-model="tab"
            background-color="transparent"
            >
                <v-tab class="text-capitalize">
                    Savings
                </v-tab>
                <v-tab class="text-capitalize">
                    Loans
                </v-tab>

                <v-tab-item>
                    <v-card flat>
                        <v-card-text>
                            <v-layout>
                                <v-flex sm6>
                                    <div class="ml-5">
                                        <v-btn text icon >
                                            <v-icon color="green">mdi-plus-circle-outline</v-icon>
                                            <span class="text-capitalize" color="gray">Start saving</span>
                                        </v-btn>
                                    </div>
                                </v-flex>
                                <v-flex sm6 class="text-right pt-2">
                                    <p style="margin-bottom: 0;" class="green--text"><v-icon color="green">mdi-arrow-up</v-icon> 10.02%</p>
                                    <span class="caption">profit rate</span>
                                </v-flex>
                            </v-layout>
                            <v-list two-line subheader>
                                <v-list-item
                                    v-for="item in savings"
                                    :key="item.nature"
                                >
                                    <v-list-item-avatar color="green" size="36">
                                        <span class="white--text headline">S</span>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <v-list-item-title v-text="item.nature"></v-list-item-title>
                                        <span class="caption">{{ item.date }}</span>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                        <span class="body-1"><span>&#x20A6; </span>{{ item.amount }}</span>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <v-card-text>
                            <v-layout>
                                <v-flex sm8>
                                    <div class="adding">
                                        <v-btn text icon >
                                            <v-icon color="green">mdi-plus-circle-outline</v-icon>
                                            <span class="text-capitalize" color="gray">Request a loan</span>
                                        </v-btn>
                                    </div>
                                </v-flex>
                                <v-flex sm4 class="text-right pt-2">
                                    <p style="margin-bottom: 0;" class="red--text"><v-icon color="red">mdi-arrow-down</v-icon> 10.02%</p>
                                    <span class="caption">charge rate</span>
                                </v-flex>
                            </v-layout>
                            <v-list two-line subheader>
                                <v-list-item
                                    v-for="item in loans"
                                    :key="item.nature"
                                >
                                    <v-list-item-avatar color="red" size="36">
                                        <span class="white--text headline">L</span>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <v-list-item-title v-text="item.nature"></v-list-item-title>
                                        <span class="caption">{{ item.date }}</span>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                        <span class="body-1"><span>&#x20A6; </span>{{ item.amount }}</span>
                                    </v-list-item-action>
                                </v-list-item>
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
    name: 'Usertransactions',
    components: { 
        Navbar, 
    },

  data() {
    return {
      tab: null,

      savings: [
        { amount: '20,000', status: 'successful', nature: 'savings', date: 'Jan 9, 2014' },
        { amount: '20,000', status: 'successful', nature: 'savings', date: 'Jan 17, 2014' },
        { amount: '20,000', status: 'successful', nature: 'savings', date: 'Jan 28, 2014' },
        { amount: '20,000', status: 'successful', nature: 'savings', date: 'Jan 17, 2014' },
        { amount: '20,000', status: 'successful', nature: 'savings', date: 'Jan 28, 2014' },
      ],

      loans: [
        { amount: '20,000', status: 'successful', nature: 'Loans', date: 'Jan 9, 2014' },
        { amount: '20,000', status: 'successful', nature: 'Loans', date: 'Jan 17, 2014' },
        { amount: '20,000', status: 'successful', nature: 'Loans', date: 'Jan 28, 2014' },
        { amount: '20,000', status: 'successful', nature: 'Loans', date: 'Jan 17, 2014' },
        { amount: '20,000', status: 'successful', nature: 'Loans', date: 'Jan 28, 2014' },
      ],
    }
  }

};
</script>

<style scoped>
    .v-application--is-ltr .v-tabs-bar.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows) > .v-slide-group__wrapper > .v-tabs-bar__content > .v-tabs-slider-wrapper + .v-tab {
        margin-left: 0;
    }
    .adding {
        padding-left: 40px;
    }
</style>
