<template>
  <ul>
    <learning-resource
      v-for="res in storedResource"
      :key="res.id"
      :description="res.description"
      :title="res.title"
      :link="res.link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './components/learning-resource/LearningResource.vue';
export default {
  components: {
    LearningResource,
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
