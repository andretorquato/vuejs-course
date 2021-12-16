<template>
  <the-header :title="'RememberMe'"></the-header>
  <the-resource></the-resource>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheResource from './components/learning-resources/TheResource.vue';

export default {
  components: {
    TheHeader,
    TheResource,
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
  provide(){
    return {
      resources: this.storedResources,
    }
  }
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
