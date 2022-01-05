<template>
  <button @click="saveChanges()">Save changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      changedSaved: false,
    };
  },
  methods: {
    saveChanges() {
      this.changedSaved = true;
    },
  },
  inject: ['users'],
  beforeRouteEnter(to, from, next) {
    console.log('BeforeRouterEnter');
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('BeforeRouterLeave');
    if (this.changedSaved) {
      next();
    } else {
      const wantToLeave = confirm('Are you sure you want to leave?');
      next(wantToLeave);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
