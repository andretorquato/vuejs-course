<template>
  <h2>{{ finalCount }}</h2>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed:{
    ...mapGetters('numbers',{
      finalCount: 'finalCount'
    })
  },
};
</script>