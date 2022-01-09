<template>
  <h2>{{ count }}</h2>
</template>

<script>
export default {
  computed:{
    count() {
      return this.$store.getters.finalCount;
    },
  },
};
</script>