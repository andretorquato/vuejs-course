<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" another-prop="..."></slot>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      goals: ["First Content", "Second Content", "Third Content"],
    };
  },
};
</script>
<style scoped></style>
