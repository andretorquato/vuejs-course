<template>
  <button v-if="!isAuth" @click="login">Login</button>
  <button v-if="isAuth" @click="logout">Logout</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  computed: {
    isAuth() {
      return this.$store.getters.isLogged;
    },
  },
  methods: {
    ...mapActions(['login', 'logout']),
  },
};
</script>