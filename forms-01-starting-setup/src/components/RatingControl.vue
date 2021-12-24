<template>
  <ul>
    <li
      @click="setActiveOption('poor')"
      :class="{ active: activeOption == 'poor' }"
    >
      <button type="button">Poor</button>
    </li>
    <li
      @click="setActiveOption('medium')"
      :class="{ active: activeOption == 'medium' }"
    >
      <button type="button">Medium</button>
    </li>
    <li
      @click="setActiveOption('good')"
      :class="{ active: activeOption == 'good' }"
    >
      <button type="button">Good</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      activeOption: null,
    };
  },
  methods: {
    setActiveOption(option) {
      this.activeOption = option;
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
