<template>
    <div class="Dashboard-user">
        <Navbar />
        <v-container class="d-sm-none">
            <v-layout>
                <v-flex lg12 class="py-5 px-5 ">
                    <div class="headers">
                        <h4>Home</h4>
                    <span class="caption">Summary of your transactions</span>
                    </div>

                    <v-card
                        class="mx-auto my-4 pt-4"
                    >   
                        <div class="pl-4">
                            <div>Account</div>
                            <span class="caption mb-4">Recent transactions - monthly</span>
                        </div>
                        <v-list-item three-line v-for="item in Summaries" :key="item.title">
                            <v-list-item-avatar
                                tile
                                size="30"
                                color="indigo"
                            >
                            <span class="white--text headline">{{ item.nature }}</span>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                
                                <v-list-item-title class="body-1">&#x20A6; {{ item.title }}</v-list-item-title>
                                <span class="caption">{{ item.date }}</span>
                                <v-list-item-subtitle class="caption">{{ item.condition }}</v-list-item-subtitle>
                                
                            </v-list-item-content>
                        </v-list-item>
                        <div class="text-right">
                        <v-btn class="text-capitalize" color="green" text>Details</v-btn>
                        </div>
                    </v-card>

                    <v-card
                        class="mx-auto my-4 pt-4"
                    >   
                        <div class="pl-4">
                            <div>Savings</div>
                        </div>
                        <v-list-item three-line v-for="item in Savings" :key="item.date">

                            <v-list-item-content>
                                <span class="caption">{{ item.condition }}</span>
                                <v-list-item-title class="body-1">&#x20A6; {{ item.title }}</v-list-item-title>
                                
                            </v-list-item-content>
                        </v-list-item>
                        <div class="text-right">
                        <v-btn class="text-capitalize" color="green" text>Details</v-btn>
                        </div>
                    </v-card>

                    <v-card
                        class="mx-auto my-4 pt-4"
                    >   
                        <div class="pl-4">
                            <div>Loans</div>
                        </div>
                        <v-list-item three-line v-for="item in Loans" :key="item.date">

                            <v-list-item-content>
                                <span class="caption">{{ item.condition }}</span>
                                <v-list-item-title class="body-1">&#x20A6; {{ item.title }} </v-list-item-title>
                                
                            </v-list-item-content>
                        </v-list-item>
                        <div class="text-right">
                        <v-btn class="text-capitalize" color="green" text>Details</v-btn>
                        </div>
                    </v-card>
                    
                </v-flex>
            </v-layout>
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
    name: 'Userdashboard',
    components: { 
        Navbar, 
    },

  data() {
    return {
      Summaries: [
          {title: ' 10,000 ', date: 'May 23 2019', nature: 'S', condition: 'Savings'},
          {title: ' 10,000 ', date: 'May 23 2019', nature: 'L', condition: 'Loans'}
      ],

      Savings: [
          {title: ' 10,000 ', condition: 'Monthly Rate'},
      ],

      Loans: [
          {title: ' 10,000 ', condition: 'Monthly Rate'},
      ],
        
    }
  }

};
</script>

<style scoped>
    .headers {
        margin-bottom: 40px;
    }
</style>
