<template>
  <div class="details">
    <h1>{{ news.title }}</h1>
    <p>{{ news.content }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  news: {
    title: string
    content: string
  }
}>()
</script>

<style scoped>
.details {
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.details h1 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}
.details p {
  color: #374151;
}
</style>
