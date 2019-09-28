<template>
    <div class="Settings-user">
        <Navbar />
        <v-container class="d-sm-none">
            <v-list
            subheader
            three-line
            >
            <v-subheader>User Controls</v-subheader>

            <v-list-item>
                <v-list-item-content>
                <v-list-item-title>Content filtering</v-list-item-title>
                <v-list-item-subtitle>Set the content filtering level to restrict appts that can be downloaded</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                <v-list-item-title>Password</v-list-item-title>
                <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list
            flat
            subheader
            three-line
            >
            <v-subheader>General</v-subheader>

            <v-list-item-group
                v-model="settings"
                multiple
                active-class=""
            >
                <v-list-item>
                <template v-slot:default="{ active }">
                    <v-list-item-action>
                    <v-checkbox v-model="active"></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                    <v-list-item-title>Notifications</v-list-item-title>
                    <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                    </v-list-item-content>
                </template>
                </v-list-item>

                <v-list-item>
                <template v-slot:default="{ active }">
                    <v-list-item-action>
                    <v-checkbox v-model="active"></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                    <v-list-item-title>Sound</v-list-item-title>
                    <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                    </v-list-item-content>
                </template>
                </v-list-item>

                <v-list-item>
                <template v-slot:default="{ active }">
                    <v-list-item-action>
                    <v-checkbox v-model="active"></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                    <v-list-item-title>Auto-add widgets</v-list-item-title>
                    <v-list-item-subtitle>Automatically add home screen widgets when downloads complete</v-list-item-subtitle>
                    </v-list-item-content>
                </template>
                </v-list-item>
            </v-list-item-group>
            </v-list>
            <v-list>
                <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-logout-variant</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>
                        <v-btn width="0" class="text-capitalize" text to="/userlogin">Log out</v-btn>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
                    
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
    name: 'Usersettings',
    components: { 
        Navbar, 
    },

  data() {
    return {
      settings: [],
    }
  }

};
</script>
