<template>
  <v-app>
    <Loader />
    <LeftNav />
    <MainNav />
    <BottomNav />
    <Dialog />
    <Notification />
    <v-main>
      <v-container fluid class="pa-0">
        <router-view v-scroll="onScroll"></router-view>
      </v-container>
    </v-main>
    <v-fab-transition>
      <v-btn v-if="!isTopPage" elevation="2" fab fixed bottom right
              class="secondary" @click="scrollToTop">
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-app>
</template>

<script>
import Loader from "@/components/App/Loader/Loader.vue"
import MainNav from "@/components/App/Skeleton/MainNav.vue"
import LeftNav from "@/components/App/Skeleton/LeftNav.vue"
import BottomNav from "@/components/App/Skeleton/BottomNav.vue"
import Dialog from "@/components/App/Dialog/Dialog.vue"
import Notification from "@/components/App/Notification/Notification.vue"
export default {
  components: {
    Loader,
    MainNav,
    LeftNav,
    BottomNav,
    Dialog,
    Notification
  },
  data() {
    return {
      isTopPage: true,
    }
  },
  methods: {
    onScroll() {
      let vm = this;
      vm.isTopPage = window.scrollY <= 0;
    },
    scrollToTop() {
      let vm = this;
      vm.$vuetify.goTo(0, {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic'
      })
    }
  }
};
</script>
