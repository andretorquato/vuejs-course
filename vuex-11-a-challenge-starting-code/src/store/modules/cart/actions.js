export default {
  addProductToCart(context, payload) {
    const products = context.rootGetters['product/products'];
    const product = products.find(
      (product) => product.id === payload.productId
    );
    context.commit('addProductToCart', product);
  },
  removeProductFromCart(context, payload) {
    context.commit('removeProductFromCart', payload);
  },
};
