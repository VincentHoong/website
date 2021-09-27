<template>
  <v-bottom-navigation app class="primary" dark grow v-if="bottomNavs.length>0 && $vuetify.breakpoint.mobile">
    <v-btn v-for="(bottomNav, bottomNavKey) in bottomNavs" :key="'bottomNav'+bottomNavKey"
            :to="bottomNav.link">
      <v-icon>{{ bottomNav.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      bottomNavs: [
        {icon: 'mdi-finance', link: '/analytics'},
        {icon: 'mdi-calendar', link: '/calendars'},
        {icon: 'mdi-file-document', link: '/forms'},
      ],
      settings: {}
    }
  }
}
</script>

<style scoped src="@/components/App/Skeleton/BottomNav.css"></style>