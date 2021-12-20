<template>
  <base-card>
    <base-button
      @click="setSelectedResource('stored-resource')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedResource('add-resource')"
      :mode="addResButtonMode"
      >Add Resources</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedResource"></component>
  </keep-alive>
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
      storedResources: [
        {
          id: 'youtube-resource',
          title: 'Youtube educational content',
          description: 'This is a youtube resource',
          link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        {
          id: 'google-learning',
          title: 'Searching for Google Learning',
          description: 'This is a google learning resource',
          link: 'https://www.google.com/search?q=google+learning',
        },
      ],
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedResource == 'stored-resource' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedResource == 'add-resource' ? null : 'flat';
    },
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource,
    };
  },
  methods: {
    setSelectedResource(resource) {
      this.selectedResource = resource;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      };
      this.storedResources.unshift(newResource);
      this.selectedResource = 'stored-resource';
    },
    removeResource(resId){
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    }
  },
};
</script>
