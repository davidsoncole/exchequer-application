<template>
    <div class="Admin-login">
        <v-container fluid>
            <v-layout>
                <v-flex lg6 class="signin-area">
                  <h2>Sign in</h2>
                  <p class="caption">Enter your details below.</p>
                  <v-form v-model="valid">
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                        >
                          <v-text-field
                            v-model="username"
                            :rules="nameRules"
                            :counter="10"
                            label="Username"
                            required
                          ></v-text-field>
                        </v-col>

                        <v-col
                          cols="12"
                        >
                          <v-text-field
                            v-model="password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'"
                            name="input-10-1"
                            label="Password"
                            hint="At least 8 characters"
                            counter
                            @click:append="show1 = !show1"
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="6"
                        >
                        <v-btn to="/dashboard" class="mr-4 success" @click="submit">submit</v-btn>
                        </v-col>
                        <v-col
                          cols="6"
                        >
                        <p class="caption text-right">Forget password?</p>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </v-flex>
                <v-flex lg6>
                  <v-carousel
                    cycle
                    height="100vh"
                    hide-delimiter-background
                    show-arrows-on-hover
                  >
                    <v-carousel-item
                      v-for="(item,i) in items"
                      :key="i"
                      :src="item.src"
                    >
                      <v-sheet
                        height="100%"
                      >
                        <v-row
                          class="content-box"
                          align="center"
                          justify="center"
                        >
                          <div class="content text-center"><h3>{{ item.header }}</h3>{{ item.note }}</div>
                        </v-row>
                      </v-sheet>
                    </v-carousel-item>
                  </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>

export default {

  data() {
    return {
      valid: false,
      username: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      show1: false,
        password: '',
        rules: {
          required: value => !!value || 'Password is required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The username and password you entered don\'t match'),
        },

        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            header: 'consectetuer tellus',
            note: 'Lorem ipsum dolor sit amet, consectetuer tellus justo, vel odio volutpat nec sodales luctus torquent. Sit vitae dolor.',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            header: 'consectetuer tellus',
            note: 'Lorem ipsum dolor sit amet, consectetuer tellus justo, vel odio volutpat nec sodales luctus torquent. Sit vitae dolor.',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            header: 'consectetuer tellus',
            note: 'Lorem ipsum dolor sit amet, consectetuer tellus justo, vel odio volutpat nec sodales luctus torquent. Sit vitae dolor.',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            header: 'consectetuer tellus',
            note: 'Lorem ipsum dolor sit amet, consectetuer tellus justo, vel odio volutpat nec sodales luctus torquent. Sit vitae dolor.',
          },
        ],
    }
  }

};
</script>

<style scoped>
  .signin-area {
    padding: 25vh 10vw 0 10vw;
  }
  .content {
    margin-top: 75vh;
    width: 300px;
  }
  .container {
    padding: 0;
  }
</style>
