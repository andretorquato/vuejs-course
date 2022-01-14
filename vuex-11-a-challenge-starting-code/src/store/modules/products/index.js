import productGetters from './getters';
import productData from '../../../../public/data';

const productModule = {
  state() {
    return {
      products: productData,
    };
  },
  getters: productGetters,
};

export default productModule;
