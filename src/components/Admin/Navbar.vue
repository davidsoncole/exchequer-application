<template>
  <div>
    <v-toolbar flat dense>
      <v-toolbar-title></v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-if="$vuetify.breakpoint.smAndUp">
        
        <v-badge
        color="green"
        overlap
      >
        <template v-slot:badge>
          <span v-if="messages > 0">{{ messages }}</span>
        </template>
        <v-icon>mdi-email-outline</v-icon>
      </v-badge>

      <v-btn icon>
          <v-icon>mdi-settings-outline</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: false,
        messages: 0,
      }
    },
  }
</script>

