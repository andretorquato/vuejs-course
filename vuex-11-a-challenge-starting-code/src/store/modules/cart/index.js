import cartGetters from './getters';
const cartModule = {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },
  mutations: {
    addProductToCart(state, payload) {
      const productInCartIndex = this.cart.items.findIndex(
        (ci) => ci.productId === payload.id
      );

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: payload.id,
          title: payload.title,
          image: payload.image,
          price: payload.price,
          qty: 1,
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += payload.price;
    },
  },
  getters: cartGetters,
  actions: {
    addProductToCart(context, productData) {
      context.commit('addProductToCart', productData);
    },
  },
};

export default cartModule;
