<template>
    <div class="user-login">
        <v-container class="d-sm-none">
            <v-layout>
                <v-flex lg12 class="text-center">
                  <v-icon size="40vw">mdi-shield-lock-outline</v-icon>
                  <h4>Sign-in below to access</h4>

                  <v-form v-model="valid">
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                        >
                          <v-text-field
                            v-model="username"
                            :rules="nameRules"
                            label="Username"
                            prepend-icon="mdi-account-outline"
                            required
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-text-field
                            v-model="password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'"
                            name="input-10-1"
                            label="Password"
                            prepend-icon="mdi-lock-outline"
                            hint="At least 8 characters"
                            counter
                            @click:append="show1 = !show1"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="6">
                          <p class="caption">Forget password?</p>
                        </v-col>
                        <v-col cols="6 text-right">
                          <v-btn to="/userdashboard" color="green" class="white--text" @click="submit">Login</v-btn>
                        </v-col>

                      </v-row>
                    </v-container>
                  </v-form>
                </v-flex>
            </v-layout>
            <p class="caption">Don't have an account? <v-btn width="10" class="text-capitalize green--text" text to="/usersignup">Sign up</v-btn></p>
            <p class="caption">or continue with</p>
            <v-icon color="red">mdi-google-plus-box</v-icon>
            <v-icon color="blue">mdi-facebook-box</v-icon>
            <v-icon color="cyan">mdi-twitter-box</v-icon>
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

export default {

  data() {
    return {
      valid: false,
      show1: false,
      username: '',
      password: '',
      nameRules: [
        v => !!v || 'Username is required',
      ],

      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          usernameMatch: () => ('The Username and password you entered don\'t match'),
        },

    }
  }

};
</script>

<style scoped>
  .user-login {
    padding: 10vh 5vw 0 5vw;
  }
</style>