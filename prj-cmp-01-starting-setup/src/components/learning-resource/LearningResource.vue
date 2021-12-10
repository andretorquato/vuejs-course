<template>
  <li>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <a :href="link" target="_blank">About more</a>
  </li>
</template>

<script>
export default {
  props: ['title', 'description', 'link'],
};
</script>
