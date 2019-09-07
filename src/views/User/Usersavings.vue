<template>
    <div class="Savings-user">
        <Navbar />
        <v-container class="d-sm-none">
            <v-layout>
                <v-flex lg12 class="py-5 px-5">
                    <div class="headers">
                        <h4>Savings</h4>
                        <span class="caption">Select any Savings plan that suits you.</span>
                    </div>
                        <v-card
                            max-width="344"
                            class="mx-auto my-5"
                            v-for="item in packs"
                            :key="item.package"
                        >
                            <v-list-item three-line>
                                <v-list-item-content>
                                    
                                    <v-list-item-title class="body-1">{{ item.package }}</v-list-item-title>
                                    <span class="caption">{{ item.condition }}</span>
                                    
                                </v-list-item-content>
                                <v-list-item-content>
                                    <span class="text-right">&#x20A6; {{ item.amount }}</span>
                                </v-list-item-content>

                            </v-list-item>
                        </v-card>
                </v-flex>
            </v-layout>
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
    name: 'Usersavings',
    components: { 
        Navbar, 
    },

  data() {
    return {
      packs: [
          {amount: ' 10,000 ', package: 'Gold - Savings pack', condition: 'monthly payment'},
          {amount: ' 20,000 ', package: 'Gold - Savings pack', condition: 'monthly payment'},
          {amount: ' 30,000 ', package: 'Gold - Savings pack', condition: 'monthly payment'},
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
