<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addCount(10)">Add 10</button>
    <button @click="addCount(1)">Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue'
import FavoriteValue from './components/FavoriteValue.vue'
export default {
  components: {
    BaseContainer,
    TheCounter,
    FavoriteValue,
  },
  methods:{
    addCount(value){
      this.$store.commit({
        type: 'increase',
        value: value,
      });
    }
  }
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