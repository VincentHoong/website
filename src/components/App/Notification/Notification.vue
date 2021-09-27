<template>
  <div>
    <v-snackbar v-model="snackbar.show" timeout="4000"
                :right="!$vuetify.breakpoint.mobile">
      <span v-html="snackbar.text"></span>
      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" plain
          @click="snackbar.show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>

export default {
  computed: {
    snackbar: {
      get () { return this.$store.state.snackbar},
      set (load) { this.dispatchAction('notify', load) }
    }
  }
};
</script>

<style scoped src="@/components/App/Notification/Notification.css"></style>