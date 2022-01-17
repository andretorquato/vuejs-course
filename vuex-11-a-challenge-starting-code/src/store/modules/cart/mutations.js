export default {
  addProductToCart(state, payload) {
    const productInCartIndex = state.items.findIndex(
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
};
