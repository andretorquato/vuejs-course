import rootActions from './actions';
import rootGetters from './getters';
import rootMutations from './mutations';

const counterModule = {
  namespaced: true,
  state() {
    return {
      count: 0,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
};
export default counterModule;
