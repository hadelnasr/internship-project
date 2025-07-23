<template>
  <div class="details-container">
    <NewsDetails v-if="news" :news="news" />
    <p v-else>Loading or not found...</p>
  </div>
</template>

<script setup>
import NewsDetails from '@/components/NewsDetails.vue'
const route = useRoute()
const { data: news } = await useFetch(`/api/news/${route.params.id}`)
</script>

<style scoped>
.details-container {
  padding: 7rem 2rem 3rem;
  background-color: #f9fafb;
}
</style>
