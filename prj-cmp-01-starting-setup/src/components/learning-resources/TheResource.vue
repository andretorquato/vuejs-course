<template>
  <base-card>
    <base-button @click="setSelectedResource('stored-resource')"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectedResource('add-resource')"
      >Add Resources</base-button
    >
  </base-card>
  <component :is="selectedResource"></component>
</template>

<script>
import AddResource from '../learning-resources/AddResource.vue';
import StoredResource from '../learning-resources/StoredResource.vue';

export default {
  components: {
    AddResource,
    StoredResource,
  },
  data() {
    return {
      selectedResource: 'stored-resource',
    };
  },
  methods: {
    setSelectedResource(resource) {
      this.selectedResource = resource;
    },
  },
};
</script>
