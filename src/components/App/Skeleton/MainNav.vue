<template>
  <v-app-bar
    app
    color="primary" dark
    elevate-on-scroll
  >
    <template v-if="$vuetify.breakpoint.mobile">
      <v-app-bar-nav-icon
        v-if="!$route.meta.isBack"
        @click="toggleLeftDrawer"
      ></v-app-bar-nav-icon>
      <v-btn v-else icon @click="$router.go(-1)"
        ><v-icon>mdi-arrow-left</v-icon></v-btn
      >
      <v-img src="@/assets/images/banner-invert.png" contain width="1vw" height="100%"></v-img>
    </template>
    <template v-else>
      <v-img src="@/assets/images/banner-invert.png" contain
              max-width="15vw" max-height="100%"></v-img>
      <v-tabs>
        <template v-for="(menu, menuKey) in filteredMenus">
          <v-menu v-if="menu.menus" offset-y :key="'menu' + menuKey"
          class="fill-height">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                class="align-self-center dropdown rounded-0"
                v-bind="attrs"
                v-on="on"
              >
                {{ menu.text }}
                <v-icon right> mdi-menu-down </v-icon>
              </v-btn>
            </template>

            <v-list class="grey lighten-3">
              <v-list-item
                v-for="(item, itemKey) in menu.menus"
                :key="'item' + itemKey"
                :to="item.link"
                @click="item.click && item.click()"
              >
                {{ item.text }}
              </v-list-item>
            </v-list>
          </v-menu>
          <v-tab v-else :key="'menu' + menuKey" :to="menu.link">
            {{ menu.text }}
          </v-tab>
        </template>
      </v-tabs>
    </template>
    <!-- <div class="mr-4" link>
      <v-badge color="secondary" :content="news" :value="news" overlap>
        <router-link to="/news">
          <v-icon>mdi-bullhorn</v-icon>
        </router-link>
      </v-badge>
    </div> -->
  </v-app-bar>
</template>

<script>
import _ from 'lodash'
import { mapMutations } from "vuex";
import menusJson from "@/assets/config/menus.json";
export default {
  data() {
    return {
      menus: menusJson,
    };
  },
  computed: {
    filteredMenus() {
      let vm = this;
      let menus = [];
      let subMenus = [];

      // Check Features Accessibility
      _.forEach(vm.menus, function(menu) {
        if (subMenus.length > 0 && menu.group !== subMenus[0].group) {
          menus.push({
            text: subMenus[0].group,
            icon: subMenus[0].icon,
            menus: subMenus
          });
          subMenus = [];
        }
        if (menu.group) {
          subMenus.push({...menu, ...{text: menu.text}});
        } else {
          menus.push({...menu, ...{text: menu.text}});
        }
      });

      return menus;
    }
  },
  methods: {
    ...mapMutations(["toggleLeftDrawer"]),
  },
};
</script>

<style scoped src="@/components/App/Skeleton/MainNav.css"></style>