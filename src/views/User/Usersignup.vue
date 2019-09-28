<template>
    <div class="Create-account">
        <v-container class="form-box d-sm-none">
            <v-layout>
                <v-flex lg12>
                    <v-container>
                        <v-btn fab text to="/userlogin" ><v-icon color="green">mdi-arrow-left</v-icon></v-btn>
                        <h4 class="text-center">Create new account</h4>
                    </v-container>
                    <v-form v-model="valid">
                        <v-container>
                            <v-row>
                                <v-card flat>
                                    <v-snackbar
                                    v-model="snackbar"
                                    absolute
                                    bottom
                                    color="success"
                                    >
                                    <span>Registration successful!</span>
                                    <v-icon dark>mdi-checkbox-marked-circle </v-icon>
                                    </v-snackbar>
                                    <v-form ref="form" @submit.prevent="submit">
                                    <v-container fluid>
                                        <v-row>
                                        <v-col cols="12">
                                            <v-text-field
                                            v-model="form.first"
                                            :rules="rules.name"
                                            color="blue darken-2"
                                            label="First name"
                                            required
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field
                                            v-model="form.last"
                                            :rules="rules.name"
                                            color="blue darken-2"
                                            label="Last name"
                                            required
                                            ></v-text-field>
                                        </v-col>

                                        <v-col
                                        cols="12"
                                        >
                                        <v-text-field
                                            v-model="form.email"
                                            :rules="rules.email"
                                            color="blue darken-2"
                                            label="E-mail"
                                            required
                                        ></v-text-field>
                                        </v-col>

                                        <v-col
                                        cols="12"
                                        >
                                        <v-text-field
                                            v-model="form.number"
                                            :rules="rules.number"
                                            counter="11"
                                            label="Mobile Number"
                                            required
                                        ></v-text-field>
                                        </v-col>

                                        <v-col
                                        cols="12"
                                        >
                                            <v-text-field
                                                v-model="form.password"
                                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                :rules="rules.password"
                                                :type="show1 ? 'text' : 'password'"
                                                name="input-10-1"
                                                label="Set password"
                                                hint="At least 8 characters"
                                                counter
                                                @click:append="show1 = !show1"
                                            ></v-text-field>
                                        </v-col>

                                        <v-col cols="12">
                                            <v-text-field
                                                v-model="form.password2"
                                                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                                :rules="rules.password2"
                                                :type="show2 ? 'text' : 'password'"
                                                name="input-10-2"
                                                label="Confirm password"
                                                hint="At least 8 characters"
                                                counter
                                                class="input-group--focused"
                                                @click:append="show2 = !show2"
                                            ></v-text-field>
                                        </v-col>
                                        
                                        <v-col cols="12">
                                            <v-checkbox
                                            v-model="form.terms"
                                            color="green"
                                            >
                                            <template v-slot:label>
                                                <div @click.stop="">
                                                Do you accept the
                                                <a href="javascript:;" @click.stop="terms = true">terms</a>
                                                and
                                                <a href="javascript:;" @click.stop="conditions = true">conditions?</a>
                                                </div>
                                            </template>
                                            </v-checkbox>
                                        </v-col>
                                        </v-row>
                                    </v-container>
                                    <v-card-actions>
                                        <v-btn
                                        :disabled="!formIsValid"
                                        class="white--text"
                                        color="green"
                                        type="submit"
                                        to="/userverification"
                                        >Register</v-btn>
                                    </v-card-actions>
                                    </v-form>
                                    <v-dialog v-model="terms" width="70%">
                                    <v-card>
                                        <v-card-title class="title">Terms</v-card-title>
                                        <v-card-text v-for="n in 5" :key="n">
                                        {{ content }}
                                        </v-card-text>
                                        <v-card-actions>
                                        <div class="flex-grow-1"></div>
                                        <v-btn
                                            text
                                            color="green"
                                            @click="terms = false"
                                        >Ok</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                    </v-dialog>
                                    <v-dialog v-model="conditions" width="70%">
                                    <v-card>
                                        <v-card-title class="title">Conditions</v-card-title>
                                        <v-card-text v-for="n in 5" :key="n">
                                        {{ content }}
                                        </v-card-text>
                                        <v-card-actions>
                                        <div class="flex-grow-1"></div>
                                        <v-btn
                                            text
                                            color="green"
                                            @click="conditions = false"
                                        >Ok</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                    </v-dialog>
                                </v-card>
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
    data () {
      const defaultForm = Object.freeze({
        first: '',
        last: '',
        email: '',
        number: '',
        show1: false,
        show2: false,
        terms: false,
      })

      return {
        form: Object.assign({}, defaultForm),
        show1: false,
        show2: false,
        password: '',
        password2: '',
        rules: {
          name: [val => (val || '').length > 0 || 'This field is required'],
          email: [v => !!v || 'E-mail is required', v => /.+@.+/.test(v) || 'E-mail must be valid',],
          number: [v => !!v || 'Number is required', v => v.length <= 11 || 'Name must be less than 11 characters',],
          password: [value => !!value || 'Required.', v => v.length >= 8 || 'Min 8 characters',],
          password2: [value => !!value || 'Required.', v => v.length >= 8 || 'Min 8 characters',],
        },
        conditions: false,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. 
        Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. 
        Fusce nec tellus sed augue semper porta. Mauris massa. 
        Vestibulum lacinia arcu eget nulla. 
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
        Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,
        snackbar: false,
        terms: false,
        defaultForm,
      }

      
        
    },

    computed: {
      formIsValid () {
        return (
          this.form.first &&
          this.form.last &&
          this.form.email &&
          this.form.password &&
          this.form.password2 &&
          this.form.terms
        )
      },
    },

    methods: {
      submit () {
        this.snackbar = true
        this.resetForm()
      },
    },
  }
</script>

<style scoped>
    .form-box {
        padding: 5vh 5vw 5vh 5vw;
    }
</style>
