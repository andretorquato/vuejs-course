import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    increase(state, payload) {
      state.count += payload.value;
    },
  },
  getters: {
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
  },
});

const app = createApp(App);
app.use(store);

app.mount('#app');
