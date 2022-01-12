export default {
  finalCount(state) {
    return state.count * 2;
  },
  normalizedCount(_, getters) {
    const finalCount = getters.finalCount;
    if (finalCount < 0) {
      return 0;
    }
    if (finalCount > 100) {
      return 100;
    }
    return finalCount;
  },
};
