<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="showGoal">{{ goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleChangeVisibilityGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { ref } from 'vue';
export default {
  // OPTIONS API
  data(){
    return {
      goal: 'Learn Vue.js',
      showGoal: true,
    }
  },
  methods: {
    toggleChangeVisibilityGoal(){
      this.showGoal = !this.showGoal;
    }
  }
  // COMPOSITION API
  // setup(){
  //   // === REACTIVE OBJECT ===
  //   // const state = reactive({
  //   //   goal: 'My Course Goal',
  //   //   showGoal: true
  //   //   });

  //   // === REF OBJECT ===
  //   // const state = ref({
  //   //   goal: 'Finish course',
  //   //   showGoal: false
  //   //   });
  //   // === SEPARATE REFS ===
  //   const showGoal = ref(false);
  //   const goal = ref('Finish course');
  //   function toggleChangeVisibilityGoal () {
  //     // === REACTIVE OBJECT ===
  //     // state.showGoal = !state.showGoal;
  //     // === REF OBJECT ===
  //     // state.value.showGoal = !state.value.showGoal;
  //     // === SEPARATE REF ===
  //     showGoal.value = !showGoal.value;
  //   }
  //   return { showGoal, goal, toggleChangeVisibilityGoal };
  // }
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>