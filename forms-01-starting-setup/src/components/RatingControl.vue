<template>
  <ul>
    <li
      @click="setActiveOption('poor')"
      :class="{ active: modelValue == 'poor' }"
    >
      <button type="button">Poor</button>
    </li>
    <li
      @click="setActiveOption('average')"
      :class="{ active: modelValue == 'average' }"
    >
      <button type="button">Average</button>
    </li>
    <li
      @click="setActiveOption('great')"
      :class="{ active: modelValue == 'great' }"
    >
      <button type="button">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    setActiveOption(option) {
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: flex-start;
  list-style: none;
}
li {
  margin-right: 12px;
  border: 1px solid rgba(0, 0, 0, 0.56);
  padding: 6px 12px;
}
button {
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
}
.active {
  border: 3px solid #0076bb;
}
button .active {
  color: #0076bb;
}
</style>
