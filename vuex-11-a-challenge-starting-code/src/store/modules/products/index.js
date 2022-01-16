import productGetters from './getters';
import productData from '../../../../public/data';

const productModule = {
  namespaced: true,
  state() {
    return {
      products: productData,
    };
  },
  getters: productGetters,
};

export default productModule;
