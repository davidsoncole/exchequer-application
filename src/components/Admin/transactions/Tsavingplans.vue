<template>
    <div class="transaction-savings-plans">
        <v-container>
            <h4>Savings Plans</h4>
            <p class="caption">All created plans</p>
            <v-layout row>
                <v-flex lg9>
                    <v-layout row>
                        <v-flex lg4 
                            v-for="save in planssave"
                            :key="save.amount">
                            <v-card class="pa-5 ma-5 text-center">
                                <v-card-title class="mid">&#x20A6 <span>{{ save.amount }}</span></v-card-title>
                                <v-divider></v-divider>
                                <v-card-text>
                                    <h5>{{ save.name }} <span> - savings pack </span> </h5>
                                    <p class="caption">{{ save.mode }}</p>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex column lg3>
                    <v-card class="pa-4 mx-4">
                      <v-card-title>Create New Plan</v-card-title>
                      <v-card-text class="caption">Create new savings plan for members</v-card-text>
                      <v-card-actions>
                        <v-btn text>
                          <v-icon large>mdi-file-document-box-plus-outline</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            planssave: [
                {
                    amount: '60,000',
                    name: 'GOLD',
                    mode: 'monthly payment'
                },
                {
                    amount: '60,000',
                    name: 'GOLD',
                    mode: 'monthly payment'
                },
                {
                    amount: '60,000',
                    name: 'GOLD',
                    mode: 'monthly payment'
                },
                {
                    amount: '60,000',
                    name: 'GOLD',
                    mode: 'monthly payment'
                },
                {
                    amount: '60,000',
                    name: 'GOLD',
                    mode: 'monthly payment'
                },
                {
                    amount: '60,000',
                    name: 'GOLD',
                    mode: 'monthly payment'
                },
            ],
        }
    }
};
</script>

<style scoped>
    .mid {
        padding-left: 3.8vw;
    }
</style>