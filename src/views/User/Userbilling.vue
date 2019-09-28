<template>
    <div class="Transactions-user">
        <Navbar />
        <v-container class="d-sm-none">
            <div class="headers mt-5 px-5">
                <h4>Billing</h4>
                <span class="caption">All payment transactions pending.</span>
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
                        <v-card-text v-for="item in saveready" :key="item.amount">
                            <p>Current monthly plan</p>
                            <h1 class="black--text"><span>&#x20A6;</span>{{ item.amount }}</h1>
                            <v-layout>
                                <v-flex sm8 class="pt-4">
                                    <p>Due date - <span class="red--text">{{ item.date }}</span></p>
                                </v-flex>
                                <v-flex sm4 class="pt-1 text-right">
                                    <v-btn class="text-capitalize white--text" height="45" rounded="20" color="green" small>Send savings</v-btn>
                                </v-flex>
                            </v-layout>
                            <v-list two-line subheader>
                                <v-list-item
                                    v-for="item in savings"
                                    :key="item.nature"
                                >
                                    <v-list-item-content class="gray--text">
                                        <v-list-item-title class="caption">Next monthly <span>{{ item.nature }}</span></v-list-item-title>
                                        <h2><span>&#x20A6;</span> {{ item.amount }}</h2>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                        <span class="caption">{{ item.date }}</span>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                            
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <v-card-text v-for="item in loanready" :key="item.amount">
                            <p class="gray--text">Current monthly plan</p>
                            <h1 class="black--text"><span>&#x20A6;</span>{{ item.amount }}</h1>
                            <v-layout>
                                <v-flex sm8 class="pt-4">
                                    <p>Due date - <span class="red--text">{{ item.date }}</span></p>
                                </v-flex>
                                <v-flex sm4 class="pt-1 text-right">
                                    <v-btn class="text-capitalize white--text" height="45" rounded="20" color="green" small>Pay loans</v-btn>
                                </v-flex>
                            </v-layout>
                            <v-list two-line subheader>
                                <v-list-item
                                    v-for="item in loans"
                                    :key="item.nature"
                                >
                                    <v-list-item-content>
                                        <v-list-item-title class="caption"><span>Next monthly</span> <span>{{ item.nature }}</span></v-list-item-title>
                                        <h2><span>&#x20A6;</span>{{ item.amount }}</h2>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                        <span class="caption">{{ item.date }}</span>
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
                src="../../assets/mobile_user.svg"
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

      saveready: [
          { amount: '20,000', date: '29 Feb. 2019' }
      ],

      loanready: [
          { amount: '20,000', date: '29 Feb. 2019' }
      ],

      savings: [
        { amount: '20,000', nature: 'savings', date: '29 March 2019' },
        { amount: '20,000', nature: 'savings', date: '29 April 2019' },
        { amount: '20,000', nature: 'savings', date: '29 May 2019' },
        { amount: '20,000', nature: 'savings', date: '29 June 2019' },
        { amount: '20,000', nature: 'savings', date: '29 July 2019' },
      ],

      loans: [
        { amount: '20,000', nature: 'Loans', date: '29 March 2019' },
        { amount: '20,000', nature: 'Loans', date: '29 April 2019' },
        { amount: '20,000', nature: 'Loans', date: '29 May 2019' },
        { amount: '20,000', nature: 'Loans', date: '29 June 2019' },
        { amount: '20,000', nature: 'Loans', date: '29 July 2019' },
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
