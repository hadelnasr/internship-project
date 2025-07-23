<template>
  <div class="details">
    <img :src="news.image_url" alt="News image" class="detail-image" />
    <h1>{{ news.title }}</h1>
    <p class="meta">Author: {{ news.created_by_name }}</p>
    <p class="meta">Created at: {{ formatDate(news.created_at) }} | Updated at: {{ formatDate(news.updated_at) }}</p>
    <p class="desc">{{ news.description }}</p>
    <p class="desc">{{ news.content }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  news: {
    title: string
    description: string
    content: string
    image_url: string
    created_by_name: string
    created_at: string
    updated_at: string
  }
}>()

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString()
}
</script>

<style scoped>
.details {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  max-width: 900px;
  margin: 0 auto;
}

.detail-image {
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.meta {
  font-size: 0.95rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.desc {
  color: #374151;
  line-height: 1.7;
  font-size: 1.1rem;
  margin-top: 1.5rem;
}
</style>
