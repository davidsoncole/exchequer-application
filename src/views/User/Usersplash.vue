<template>
<div>
  <v-card
    class="mx-auto d-sm-none"
    height="100vh"
    flat
  >
    <v-card-title class="title font-weight-regular justify-space-between">
      
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text class="pa-4 text-center">
            <v-img
                class="mb-4"
                contain
                height="228"
                src="../../assets/piggy-bank.svg"
            ></v-img>
            <h3 class="title font-weight-light">Consectetur adipisicing elit</h3>
            <span class="caption grey--text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Eius odit nemo aut officiis sunt, rem debitis quas eos dolorum, ipsa alias et nulla, 
              molestiae sint eaque! Itaque aspernatur at ab.</span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
       <v-card-text class="pa-4 text-center">
            <v-img
                class="mb-4"
                contain
                height="228"
                src="../../assets/loan.svg"
            ></v-img>
            <h3 class="title font-weight-light">Consectetur adipisicing elit</h3>
            <span class="caption grey--text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Eius odit nemo aut officiis sunt, rem debitis quas eos dolorum, ipsa alias et nulla, 
              molestiae sint eaque! Itaque aspernatur at ab.</span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <v-card-text class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="228"
            src="../../assets/handshake.svg"
          ></v-img>
          <h3 class="title font-weight-light mb-2">Welcome to our cooperative</h3>
          <span class="caption grey--text">Thanks for signing up!</span>
          <div>
              <v-btn text class="text-capitalize green--text" to="/userdashboard">Click to continue</v-btn>
          </div>
        </v-card-text>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        text
        @click="step--"
      >
        Back
      </v-btn>
      <div class="flex-grow-1"></div>
      <v-btn
        :disabled="step === 3"
        color="green"
        class="white--text"
        depressed
        @click="step++"
      >
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
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
    data: () => ({
      step: 1,
    }),

    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Savings'
          case 2: return 'Loans'
          default: return 'Cooperative'
        }
      },
    },
  }
</script>

<style scoped>
    .v-card__text {
        height: 80vh;
    }
    .v-image {
        margin-top: 10vh;
    }
    h3 {
        margin-top: 10vh;
        margin-bottom: 10px;
    }
</style>
