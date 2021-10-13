import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [
  {
    path: '*',
    name: 'Error 404',
    component: () => import('../views/404/404.vue')
  },
  {
    path: '/about-pulse',
    name: 'About Pulse',
    component: () => import('@/views/aboutPulse/aboutPulse.vue')
  },
  {
    path: '/about-us',
    name: 'About Us',
    component: () => import('@/views/aboutUs/aboutUs.vue')
  },
  {
    path: '/contact-us',
    name: 'Contact Us',
    component: () => import('@/views/contactUs/contactUs.vue')
  },
  {
    path: '/digital-transformation',
    name: 'Digital Transformation',
    component: () => import('@/views/digitalTransformation/digitalTransformation.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/home.vue')
  },
  {
    path: '/our-team',
    name: 'Our Team',
    component: () => import('@/views/ourTeam/ourTeam.vue')
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: () => import('@/views/privacyPolicy/privacyPolicy.vue')
  },
  {
    path: '/pulse-app',
    name: 'Pulse App',
    component: () => import('@/views/pulseApp/pulseApp.vue')
  },
  {
    path: '/pulse-dash',
    name: 'Pulse Dash',
    component: () => import('@/views/pulseDash/pulseDash.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  document.title = to.name + ' - ' + process.env.VUE_APP_COMPANY_NAME;
  next();
})

export default router
