<template>
  <div class="members">
    <Navbar />
      <v-container>
        <h3>Members</h3>
        <p class="caption">All current members in cooperative</p>
      </v-container>
      <v-container>
        <v-layout>
          <v-flex lg10>
        <v-tabs
          v-model="tab"
          background-color="transparent"
        >
          <v-tab>
            Verified
          </v-tab>
          <v-tab>
            Unverified
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-simple-table>
                  <thead>
                    <tr>
                      <th class="text-left">members</th>
                      <th class="text-left">Position</th>
                      <th class="text-left">Status</th>
                      <th class="text-left">Location</th>
                      <th class="text-left">Date</th>
                      <th class="text-left">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr v-for="item in verified" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>{{ item.position }}</td>
                        <td class="green--text">{{ item.status }}</td>
                        <td>{{ item.location }}</td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.time }}</td>
                      </tr>
                  </tbody>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-simple-table>
                  <thead>
                    <tr>
                      <th class="text-left">members</th>
                      <th class="text-left">Position</th>
                      <th class="text-left">Status</th>
                      <th class="text-left">Location</th>
                      <th class="text-left">Date</th>
                      <th class="text-left">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr v-for="item in unverified" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>{{ item.position }}</td>
                        <td class="red--text">{{ item.status }}</td>
                        <td>{{ item.location }}</td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.time }}</td>
                      </tr>
                  </tbody>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        </v-flex>
        <v-flex lg2 class="mx-4 add-new">
          <v-card
            max-width="344"
            class="mx-auto text-center"
          >
            <div>
              <h2>Create New</h2>
            </div>
            <v-card-text><span class="caption">Add new members</span></v-card-text>
            <v-dialog v-model="dialog" persistent max-width="80vw">
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on"><v-icon>mdi-plus-circle-outline</v-icon></v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">New Member</span>
        </v-card-title>
        <v-card-text>
          <p class="caption">Please fill the form with the right details</p>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Account number" hint="example of helper text only on focus"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    name: 'Members',
    components: { 
      Navbar, 
      Sidenav 
    },

    data () {
      return {
        tab: null,
        dialog: false,

        verified: [
          {
            name: 'Frozen Yogurt',
            position: 'Staff',
            status: 'Verified',
            date: '23 May 2019',
            location: 'view history',
            time: '2:34pm',
          },
          {
            name: 'Ice cream sandwich',
            position: 'Staff',
            status: 'Verified',
            date: '23 May 2019',
            location: 'view history',
            time: '2:34pm',
          },
          {
            name: 'Eclair',
            position: 'Staff',
            status: 'Verified',
            date: '23 May 2019',
            location: 'view history',
            time: '2:34pm',
          },
          {
            name: 'Cupcake',
            position: 'Staff',
            status: 'Verified',
            date: '23 May 2019',
            location: 'view history',
            time: '2:34pm',
          },
          {
            name: 'Gingerbread',
            position: 'Staff',
            status: 'Verified',
            date: '23 May 2019',
            location: 'view history',
            time: '2:34pm',
          },
          {
            name: 'KitKat',
            position: 'Staff',
            status: 'Verified',
            date: '23 May 2019',
            location: 'view history',
            time: '2:34pm',
          },
        ],
        unverified: [
          {
            name: 'Frozen Yogurt',
            position: 'Staff',
            status: 'Unverified',
            date: '23 May 2019',
            location: 'view history',
            time: '2:34pm',
          },
          {
            name: 'Ice cream sandwich',
            position: 'Staff',
            status: 'Unverified',
            date: '23 May 2019',
            location: 'view history',
            time: '2:34pm',
          },
          {
            name: 'Eclair',
            position: 'Staff',
            status: 'Unverified',
            date: '23 May 2019',
            location: 'view history',
            time: '2:34pm',
          },
          {
            name: 'Cupcake',
            position: 'Staff',
            status: 'Unverified',
            date: '23 May 2019',
            location: 'view history',
            time: '2:34pm',
          },
          {
            name: 'Gingerbread',
            position: 'Staff',
            status: 'Unverified',
            date: '23 May 2019',
            location: 'view history',
            time: '2:34pm',
          },
          {
            name: 'KitKat',
            position: 'Staff',
            status: 'Unverified',
            date: '23 May 2019',
            location: 'view history',
            time: '2:34pm',
          },
        ],
      }
    },
  }
</script>

<style scoped>

.add-new .v-card {
  padding: 20px;
}

.add-new .v-card .v-btn {
  height: 100%;
}

.add-new .v-card .v-icon {
  font-size: 4rem;
}
</style>
