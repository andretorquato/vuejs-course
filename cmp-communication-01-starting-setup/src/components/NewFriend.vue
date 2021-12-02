<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">Name</label>
      <input name="name" type="text" v-model="name" />
    </div>
    <div>
      <label for="email">E-mail</label>
      <input name="email" type="email" v-model="email" />
    </div>
    <div>
      <label for="phone">Phone</label>
      <input name="phone" type="tel" v-model="phone" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-friend"],
  data() {
    return {
      name: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("add-friend", this.name, this.email, this.phone);
      this.name = "";
      this.email = "";
      this.phone = "";
    },
  },
};
</script>
