import { createStore } from 'vuex';
import cartModule from './modules/cart/index';
import productModule from './modules/products/index';

const store = createStore({
  modules: {
    cart: cartModule,
    product: productModule,
  },
});

export default store;
