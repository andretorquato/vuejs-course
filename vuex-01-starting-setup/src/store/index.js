import { createStore } from 'vuex';

import counterModule from './modules/counter/index';

import rootActions from './actions';
import rootGetters from './getters';
import rootMutations from './mutations';

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLogged: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
