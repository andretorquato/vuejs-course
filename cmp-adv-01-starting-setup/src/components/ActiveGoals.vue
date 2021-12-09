<template>
  <h1>Active Goals</h1>
  <input type="text" ref="goal" />
  <button @click="setGoal">set goal</button>
  <error-message v-if="inputIsInvalid">
    <h1>Input is invalid</h1>
    <p>Please correct the field</p>
    <button @click="confirmGoal">OK</button>
  </error-message>
</template>

<script>
import ErrorMessage from './ErrorMessage.vue';
export default {
  components: {
    ErrorMessage
  },
  data(){
    return {
      inputIsInvalid: false,
    }
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if(enteredValue == '') {
        this.inputIsInvalid = true;
      }
    },
    confirmGoal() {
      this.inputIsInvalid = false;
    }
  },
};
</script>
