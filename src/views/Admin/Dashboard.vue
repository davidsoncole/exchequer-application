<template>
  <div class="dashboard">
    <Navbar />
      <v-container>
        <h4>Dashboard</h4>
      </v-container>
      <v-container class="my-5 first-layer">
        <v-card class="mx-auto pa-5">
            <v-layout row class="pa-5" v-for="number in numbers" :key="number.members">
              <v-flex lg4 >
                <v-list class="mx-auto">
                  <v-list-item>
                    <v-list-avatar>
                      <v-icon>mdi-account-outline</v-icon>
                    </v-list-avatar>
                    <v-list-item-title class="pl-5">
                      <span class="caption">Number of members</span>
                      <h4 class="grey--text">{{ number.members }}</h4>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-flex>
              <v-flex lg4 class="lines">
                <v-list class="mx-auto">
                  <v-list-item>
                    <v-list-avatar>
                      <v-icon>mdi-account-outline</v-icon>
                    </v-list-avatar>
                    <v-list-item-title class="pl-5">
                      <span class="caption">Number of savings</span>
                      <h4 class="grey--text">{{ number.savings }}</h4>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-flex>
              <v-flex lg4>
                <v-list class="mx-auto">
                  <v-list-item>
                    <v-list-avatar>
                      <v-icon>mdi-account-outline</v-icon>
                    </v-list-avatar>
                    <v-list-item-title class="pl-5">
                      <span class="caption">Number of loans</span>
                      <h4 class="grey--text">{{ number.loans }}</h4>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-flex>
            </v-layout>
        </v-card>
      </v-container>
      <v-container class="second-layer">
        <v-layout>
          <v-flex lg6>
            <v-card class="mr-4">
              <v-card-title>
                <h6>Transactions</h6>
              </v-card-title>
              <v-card-text>
                <p class="caption">Recent <a href="#">view</a></p>
                <v-simple-table>
                  <tbody>
                    <tr v-for="transaction in transactions" :key="transaction.avatar">
                      <td class="py-2">
                        <v-list-item>
                          <v-list-avatar>
                            <v-avatar><v-img :src="transaction.avatar" :alt="transaction.name"></v-img></v-avatar>
                          </v-list-avatar>
                          <v-list-item-title>
                            <span>{{ transaction.name }}</span> 
                            <p class="gray state">{{ transaction.date }} &nbsp;<span>{{ transaction.time }}</span></p>
                          </v-list-item-title>
                        </v-list-item>
                        </td>
                      <td>
                        <v-icon small :class="`${transaction.status}`"> mdi-brightness-1 </v-icon>
                        <span class="ml-2"><span>&#x20A6;</span>{{ transaction.amount }}</span>
                        <p class="state">{{ transaction.status }}</p>
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex lg6>
            <v-card class="ml-4">
              <v-card-title>
                <h6>Members</h6>
              </v-card-title>
              <v-card-text>
                <p class="caption">Recent <a href="#">view</a></p>
                <v-simple-table>
                  <tbody>
                    <tr v-for="member in members" :key="member.avatar">
                      <td class="py-2">
                        <v-list-item>
                          <v-list-avatar>
                            <v-avatar><v-img :src="member.avatar" :alt="member.name"></v-img></v-avatar>
                          </v-list-avatar>
                          <v-list-item-title>
                            <span>{{ member.name }}</span> 
                            <p class="gray state">{{ member.date }} &nbsp; <span>{{ member.time }}</span></p>
                          </v-list-item-title>
                        </v-list-item>
                        </td>
                      <td>
                        <span :class="`ml-2 ${member.status}`">{{ member.status }}</span>
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <sidenav />
  </div>
</template>

<script>
import Navbar from '@/components/Admin/Navbar'
import Sidenav from '@/components/Admin/Sidenav'

export default {
  name: 'Dashboard',
  components: { 
    Navbar, 
    Sidenav 
  },

  data() {
    return {
      numbers: [
        {
          members: '95',
          savings: '52',
          loans: '25'
        }
      ],
      transactions: [
          {
            avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
            name: 'Frozen Yogurt',
            date: '23 May 2019',
            time: '2:30am',
            amount: '20,000',
            status: 'savings'
          },
          {
            avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
            name: 'Ice cream sandwich',
            date: '23 May 2019',
            time: '2:30am',
            amount: '20,000',
            status: 'savings'
          },
          {
            avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
            name: 'Eclair',
            date: '23 May 2019',
            time: '2:30am',
            amount: '20,000',
            status: 'loans'
          },
          {
            avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
            name: 'Cupcake',
            date: '23 May 2019',
            time: '2:30am',
            amount: '20,000',
            status: 'savings'
          },
          {
            avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
            name: 'Gingerbread',
            date: '23 May 2019',
            time: '2:30am',
            amount: '20,000',
            status: 'loans'
          },
          
        ],
        members: [
          {
            avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
            name: 'Frozen Yogurt',
            date: '23 May 2019',
            time: '2:30am',
            status: 'verified'
          },
          {
            avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
            name: 'Ice cream sandwich',
            date: '23 May 2019',
            time: '2:30am',
            status: 'unverified'
          },
          {
            avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
            name: 'Eclair',
            date: '23 May 2019',
            time: '2:30am',
            status: 'verified'
          },
          {
            avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
            name: 'Cupcake',
            date: '23 May 2019',
            time: '2:30am',
            status: 'verified'
          },
          {
            avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
            name: 'Gingerbread',
            date: '23 May 2019',
            time: '2:30am',
            status: 'unverified'
          },
          
        ],
    }
  }

};
</script>

<style scoped>

.first-layer .flex .v-icon {
  padding: 20px;
  background-color: rgba(0, 0, 0, .1);
  border-radius: 100%;
}

.v-list-item__title {
  padding-left: 20px;
  margin: 0;
}

.state {
  font-size: 10px;
}

.savings {
  color: green !important;
}

.loans {
  color: red !important;
}

.verified {
  color: green !important;
}

.unverified {
  color: red !important;
}

</style>