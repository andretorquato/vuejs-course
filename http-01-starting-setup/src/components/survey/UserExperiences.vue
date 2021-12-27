<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && !error &&(!results || results.length === 0)">
        No experiences found. Start adding some survey results first.
      </p>
      <p v-else-if="!isLoading && error && (results && results.length === 0)">
        {{ error }}
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      fetch(`${process.env.VUE_APP_FIREBASE_API}`)
        .then((response) => {
          this.error = null;
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          const results = [];
          for (let id in data) {
            results.push({
              id: id,
              name: data[id].userName,
              rating: data[id].rating,
            });
          }
          this.results = results;
        })
        .catch(() => {
          this.isLoading = false;
          this.error = 'Failed to fetch data - please try again later';
        });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
