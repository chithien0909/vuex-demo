import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter'
Vue.use(Vuex);

import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

export const store = new Vuex.Store({
  state: {
    value: 0,
  },
  getters,
  mutations,
  actions,
  modules: {
    counter: {
      ...counter,
    }
  }

});
