<template>
  <div class="news-list">
    <NewsCard v-for="item in news" :key="item.id" :news="item" />
  </div>
</template>

<script setup>
import NewsCard from '@/components/NewsCard.vue'
const { data: news } = await useFetch('/api/news')
</script>

<style scoped>
.news-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 7rem 2rem 3rem;
  background: #f3f4f6;
}
</style>