import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      count: 0,
      isLogged: false,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    increase(state, payload) {
      state.count += payload.value;
    },
   setAuth(state, payload) {
      state.isLogged = payload.isAuth;
   }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    increase(context, payload) {
      setTimeout(() => {
        context.commit('increase', payload);
      }, 2000);
    },
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
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
    isLogged(state) {
      return state.isLogged;
    },
  },
});

const app = createApp(App);
app.use(store);

app.mount('#app');
