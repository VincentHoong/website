<template>
  <v-overlay :value="load ? 1 : 0">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["load"]),
  },
};
</script>

<style scoped src="@/components/App/Loader/Loader.css"></style>