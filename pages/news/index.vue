<template>
  <div class="news-grid">
    <NewsCard v-for="item in news" :key="item.id" :news="item" />
  </div>
</template>

<script setup>
import NewsCard from '@/components/NewsCard.vue'
const { data: news } = await useFetch('/api/news')
</script>

<style scoped>
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  background: #fdfdfd;
}
</style>
