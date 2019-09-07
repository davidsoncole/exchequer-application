<template>
  <div class="settings">
    <Navbar />
      <v-container>
        <h3>Settings</h3>
        <p class="caption">Change the look and feel of the platform</p>
        <v-card flat>
          <v-list two-line subheader>
            <v-subheader>General</v-subheader>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Profile photo</v-list-item-title>
                <v-list-item-subtitle>Change your Google+ profile photo</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Show your status</v-list-item-title>
                <v-list-item-subtitle>Your status is visible to everyone</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list
            subheader
            two-line
            flat
          >
            <v-subheader>Hangout notifications</v-subheader>

            <v-list-item-group
              v-model="settings"
              multiple
            >
              <v-list-item>
                <template v-slot:default="{ active, toggle }">
                  <v-list-item-action>
                    <v-checkbox
                      v-model="active"
                      color="primary"
                      @click="toggle"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>Notifications</v-list-item-title>
                    <v-list-item-subtitle>Allow notifications</v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-list-item>

              <v-list-item>
                <template v-slot:default="{ active, toggle }">
                  <v-list-item-action>
                    <v-checkbox
                      v-model="active"
                      color="primary"
                      @click="toggle"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>Sound</v-list-item-title>
                    <v-list-item-subtitle>Hangouts message</v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-list-item>
            </v-list-item-group>
          </v-list>

          <v-list>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.action"
              no-action
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="subItem in item.items"
                :key="subItem.title"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="subItem.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
          <v-list>
                <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-logout-variant</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>
                        <v-btn width="0" class="text-capitalize" text to="/">Log out</v-btn>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-card>
      </v-container>
    <sidenav />
  </div>
</template>

<script>
import Navbar from '@/components/Admin/Navbar'
import Sidenav from '@/components/Admin/Sidenav'

  export default {
    name: 'Notifications',
    components: { 
      Navbar, 
      Sidenav 
    },

    data () {
      return {
        items: [
          {
            action: 'mdi-settings-outline',
            title: 'Attractions',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'mdi-settings-outline',
            title: 'Dining',
            items: [
              { title: 'Breakfast & brunch' },
              { title: 'New American' },
              { title: 'Sushi' },
            ],
          },
          
        ],
      }
    },
  }
</script>
