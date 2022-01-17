import cartGetters from './getters';
import cartMutations from './mutations';

const cartModule = {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },
  mutations: cartMutations,
  getters: cartGetters,
  actions: {},
};

export default cartModule;
