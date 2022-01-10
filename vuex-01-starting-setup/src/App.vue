<template>
  <base-container v-if="isLogged" title="Vuex">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="increase({ value: 10 })">Add 10</button>
    <button @click="increment">Add 2</button>
  </base-container>
  <base-container title="Auth">
    <users-auth></users-auth>
  </base-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UsersAuth from './components/UsersAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    FavoriteValue,
    UsersAuth,
  },
  computed: {
    ...mapGetters(['isLogged'])
  },
  methods: {
    ...mapActions(['increment', 'increase']),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>