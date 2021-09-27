import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leftDrawer: false,
    load: 0,
    news: 0,
    popUp: { show: false, title: '', message: '', success: null, successMessage: '' },
    snackbar: { show: false, text: '' }
  },
  getters: {
    leftDrawer: state => state.leftDrawer,
    loading: state => state.load,
    news: state => state.news,
    popUp: state => state.popUp,
    snackbar: state => state.snackbar
  },
  mutations: {
    toggleLeftDrawer: (state, payload) => { state.leftDrawer = payload; },
    loading: (state, payload) => {
      payload ? state.load++ : state.load--;
    },
    news: (state, payload) => {
      state.news = payload;
    },
    popUp: (state, payload) => { state.popUp = payload; },
    notify: (state, payload) => {
      state.snackbar.text = payload;
      state.snackbar.show = payload == '' ? false : true;
    }
  },
  actions: {
    loading: (context, payload) => context.commit('loading', payload),
    news: (context, payload) => context.commit('news', payload),
    popUp: (context, payload) => context.commit('popUp', payload),
    notify: (context, payload) => context.commit('notify', payload),
  },
  modules: {
  }
})
