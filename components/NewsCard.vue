<template>
  <div class="news-card" @click="$router.push(`/news/${news.id}`)">
    <h2>{{ news.title }}</h2>
    <p>{{ news.description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  news: {
    id: string
    title: string
    description: string
  }
}>()
</script>

<style scoped>
.news-card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.news-card h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #111827;
}

.news-card p {
  color: #4b5563;
}

.news-card:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}
</style>
