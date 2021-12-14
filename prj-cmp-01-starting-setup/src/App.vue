<template>
  <the-header :title="'RememberMe'"></the-header>
  <stored-resource :resources="storedResources"></stored-resource>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import StoredResource from './components/learning-resources/StoredResource.vue';
export default {
  components: {
    StoredResource,
    TheHeader,
  },
  data() {
    return {
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
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
