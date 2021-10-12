import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
// import fbChat from './plugins/fbChat'
import "./assets/css/global.css"
import './mixins/main'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  // fbChat,
  store,
  render: h => h(App)
}).$mount('#app')
