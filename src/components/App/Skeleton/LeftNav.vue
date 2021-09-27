<template>
  <v-navigation-drawer app v-if="$vuetify.breakpoint.mobile"
                        :class="$vuetify.breakpoint.mobile?'':'primary'" :dark="!$vuetify.breakpoint.mobile"
                        :permanent="!$vuetify.breakpoint.mobile"
                        :value="leftDrawer" @click="toggleLeftDrawer">
    <v-list dense nav>
      <template v-for="(menu,menuKey) in filteredMenus">
        <v-list-group :color="$vuetify.breakpoint.mobile?'primary':''"
          v-if="menu.menus"
          :key="'menu'+menuKey"
          :prepend-icon="menu.icon"
          no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ menu.text }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="(item,itemKey) in menu.menus" :key="'item'+itemKey"
                      :to="item.link" @click="item.click && item.click()">
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item v-else :key="'menu' + menuKey" :to="menu.link"
                    @click="menu.click && menu.click()">
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ menu.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import _ from 'lodash'
import menusJson from '@/assets/config/menus.json'
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      menus: menusJson
    };
  },
  computed: {
    ...mapGetters(["leftDrawer"]),
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
    changeInstitution() {
      window.location.reload();
    }
  }
};
</script>

<style scoped src="@/components/App/Skeleton/LeftNav.css"></style>