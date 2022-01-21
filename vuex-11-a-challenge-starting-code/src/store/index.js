import { createStore } from 'vuex';
import cartModule from './modules/cart/index';
import productModule from './modules/products/index';

const store = createStore({
  modules: {
    cart: cartModule,
    product: productModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuthentication(state, payload) {
      state.isLoggedIn = payload;
    },
  },
  actions: {
    login(context) {
      console.log('txt');
      context.commit('setAuthentication', true);
    },
    logout(context) {
      context.commit('setAuthentication', false);
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    }
  }
});

export default store;
