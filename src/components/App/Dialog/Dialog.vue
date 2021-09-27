<template>
  <div>
    <v-dialog v-model="popUpInfo.show" :persistent="popUpInfo.persistent" transition="dialog-bottom-transition" max-width="350">
        <v-card>
          <v-card-title>{{ popUpInfo.title }}</v-card-title>
          <v-card-text>
            <div class="pt-2" v-html="popUpInfo.message"></div>
          </v-card-text>
          <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" v-if="popUpInfo.success" @click="successPopUp">{{ popUpInfo.successMessage || 'Yes' }}</v-btn>
              <v-btn color="error" v-if="popUpInfo.fail!==false" @click="closePopUp">{{ popUpInfo.failMessage || 'No' }}</v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  computed: {
    popUpInfo: {
      get () { return this.$store.state.popUp; },
      set (load) { this.dispatchAction('popUp', load) }
    }
  },
  methods: {
    successPopUp() {
      let vm = this;
      if (typeof(vm.popUpInfo.success)=='function') {
        vm.popUpInfo.success();
      }
      vm.popUpInfo.show = false;
    },
    closePopUp() {
      let vm = this;
      if (typeof(vm.popUpInfo.fail)=='function') {
        vm.popUpInfo.fail();
      }
      vm.popUpInfo.show = false;
    }
  }
};
</script>

<style scoped src="@/components/App/Dialog/Dialog.css"></style>