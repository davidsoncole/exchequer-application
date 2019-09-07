<template>
  <div class="savings">
      <Navbar />
    <v-container fluid>
      <v-layout row>
        <v-flex lg2 class="sidebar">
          <div>
            <h4>Transactions</h4>
          </div>
              <div>
                <v-btn class="text-capitalize" text v-on:click="component = 'loans'">Loans</v-btn>
              </div>
              <div>
                <v-btn class="text-capitalize" text v-on:click="component = 'savings'">Savings</v-btn>
              </div>
              <div>
                <v-btn class="text-capitalize" text v-on:click="component = 'loan-plans'">Loans Plans</v-btn>
              </div>
              <div>
                <v-btn class="text-capitalize" text v-on:click="component = 'saving-plans'">Savings Plans</v-btn>
              </div>
        </v-flex>
        <v-flex lg10 class="right-side px-5">
          <keep-alive>
            <component v-bind:is="component"></component>
          </keep-alive>
        </v-flex>
      </v-layout>
    </v-container>
    <sidenav />
    
  </div>
</template>

<script>
import Navbar from '@/components/Admin/Navbar'
import Sidenav from '@/components/Admin/Sidenav'

import Tloanplans from '../../components/Admin/transactions/Tloanplans.vue'
import Tloans from '../../components/Admin/transactions/Tloans.vue'
import Tsavingplans from '../../components/Admin/transactions/Tsavingplans.vue'
import Tsavings from '../../components/Admin/transactions/Tsavings.vue'

export default {
  name: 'Transactions',
  components: {
    Navbar, 
    Sidenav,
    'loan-plans': Tloanplans,
    'loans': Tloans,
    'saving-plans': Tsavingplans,
    'savings': Tsavings
  },

data() {
  return {
    component: 'loans'
  }
}
};
</script>

<style scoped>
  .sidebar {
    padding: 40px 10px;
    background-color: #F1F7F5;
    height: 90vh;
  }
  .sidebar div {
    margin-top: 10px;
  }
  .right-side {
    padding-top: 40px;
  }
</style>
