<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <!-- <manage-goals v-if="selectedComponent == 'manage-goals'"></manage-goals>
    <active-goals v-if="selectedComponent == 'active-goals'"></active-goals> -->
    <keep-alive>
    <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import ManageGoals from "./components/ManageGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";

export default {
  components: {
    TheHeader,
    ManageGoals,
    ActiveGoals,
  },
  data() {
    return {
      selectedComponent: "manage-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(component) {
      this.selectedComponent = component;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
