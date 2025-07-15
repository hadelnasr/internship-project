<!-- pages/news/[id].vue -->
<template>
  <div v-if="data">
    <h1>{{ data.title }}</h1>
    <p>{{ data.content }}</p>
    <p>{{ data.description }}</p>
  </div>
  <div v-else>
    <p>Loading or not found...</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data, error } = await useFetch(`/api/news/${route.params.id}`);

if (error.value) {
  // Optional: Handle error or redirect
  console.error(error.value);
}
</script>

<style>

</style>
