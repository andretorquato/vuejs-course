<template>
  <active-user v-if="username && age" :username="username" :age="age"></active-user>
  <user-data @set-data="setData"></user-data>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      age: 0,
    };
  },
  methods: {
    setData(name, age) {
      this.username = name;
      this.age = age;
    },
  },
};
</script>
