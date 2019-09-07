<template>
    <div class="transaction-loans">
        <v-container>
            <h4>Loans</h4>
            <p class="caption">Total Loans</p>
            <v-layout row>
              <v-flex lg12>
                <v-card flat>
                    <v-container class="loans">
                        <h1 v-for="item in total" :key="item.amount" class="display-4">&#x20A6 {{ item.amount }}</h1>
                    </v-container>
                    <v-divider></v-divider>
                    <v-container>
                        <v-card flat>
                            <v-card-title>
                                <h5>Recent members loans</h5>
                            </v-card-title>
                            <v-simple-table>
                                <thead>
                                <tr>
                                    <th class="text-left">members</th>
                                    <th class="text-left">Structure</th>
                                    <th class="text-left">Location</th>
                                    <th class="text-left">Date</th>
                                    <th class="text-left">Loans History</th>
                                    <th class="text-left">Time</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in members" :key="item.name">
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.structure }}</td>
                                    <td>{{ item.location }}</td>
                                    <td>{{ item.date }}</td>
                                    <td><a href="">{{ item.history }}</a></td>
                                    <td>{{ item.time }}</td>
                                </tr>
                                </tbody>
                            </v-simple-table>
                        </v-card>
                    </v-container>
                </v-card>  
              </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        members: [
          {
            name: 'Frozen Yogurt',
            structure: 'Loan',
            location: 'Owerri West',
            date: '23 May 2019',
            history: 'view history',
            time: '2:34pm',
          },
          {
            name: 'Ice cream sandwich',
            structure: 'Loan',
            location: 'Owerri West',
            date: '23 May 2019',
            history: 'view history',
            time: '2:34pm',
          },
          {
            name: 'Eclair',
            structure: 'Loan',
            location: 'Owerri West',
            date: '23 May 2019',
            history: 'view history',
            time: '2:34pm',
          },
          {
            name: 'Cupcake',
            structure: 'Loan',
            location: 'Owerri West',
            date: '23 May 2019',
            history: 'view history',
            time: '2:34pm',
          },
          {
            name: 'Gingerbread',
            structure: 'Loan',
            location: 'Owerri West',
            date: '23 May 2019',
            history: 'view history',
            time: '2:34pm',
          },
          {
            name: 'KitKat',
            structure: 'Loan',
            location: 'Owerri West',
            date: '23 May 2019',
            history: 'view history',
            time: '2:34pm',
          },
        ],
      }
    },
  }
</script>

<style scoped>

</style>