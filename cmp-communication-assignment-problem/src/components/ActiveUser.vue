<template>
  <h1>Active User</h1>
  <p>{{ username }}</p>
  <p>{{ age }}</p>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
