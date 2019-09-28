<template>
    <div class="verify">
        <v-container class="d-sm-none">
            <v-layout>
                <v-flex lg12 class="text-center">
                    <h4>Verification code</h4>
                    <v-icon size="40vw">mdi-cellphone-lock</v-icon>
                    <article class="note">
                        <p class="caption">Lorem ipsum dolor sit amet consectetur 
                        dolore atque non laudantium cum possimus 
                        fugit voluptate suscipit
                        ex culpa dicta.</p>
                    </article>
                    
                    <v-form v-model="valid">
                        <v-container>
                            <v-row>
                                <v-col
                                cols="12"
                                >
                                <v-text-field
                                    v-model="verification"
                                    :rules="codeRules"
                                    counter
                                    required
                                ></v-text-field>
                                <span class="caption">Please enter the code</span>
                                </v-col>

                                <v-col cols="12">
                                    <v-btn to="/usersplash" color="green" text @click="submit">Verify</v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
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

export default {

  data() {
    return {
      valid: false,
      verification: '',
      nameRules: [
        v => !!v || 'Username is required',
        v => v.length >= 8 || 'Min 8 characters',
      ],
    }
  }

};
</script>

<style scoped>
  .verify {
    padding: 10vh 5vw 0 5vw;
  }
  h4 {
      margin-bottom: 40px;
  }
  .note {
      margin-top: 20px;
      padding: 0 8vw;
  }
</style>
