import Vue from 'vue';
import Vuex from 'vuex';
// Modules
import home from '@/store/modules/home';
import auth from '@/store/modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    home,
    auth,
  },
});
