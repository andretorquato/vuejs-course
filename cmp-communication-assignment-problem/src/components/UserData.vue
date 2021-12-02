<template>
  <form @submit.prevent="setData">
    <div>
      <label>Name</label>
      <input type="text" name="name" v-model="name" />
    </div>
    <div>
      <label>Age</label>
      <input type="number" name="age" v-model="age" />
    </div>
    <div>
      <button>Change</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["set-data"],
  data() {
    return {
      name: "",
      age: 0,
    };
  },
  methods: {
    setData() {
      this.$emit("set-data", this.name, this.age);
    },
  },
};
</script>
