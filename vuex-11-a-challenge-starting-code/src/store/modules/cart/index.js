import cartGetters from './getters';
import cartMutations from './mutations';
import cartActions from './actions';

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
  actions: cartActions,
};

export default cartModule;
