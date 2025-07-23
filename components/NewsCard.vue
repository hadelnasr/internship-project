<template>
  <div class="card" @click="$router.push(`/news/${news.id}`)">
    <img :src="news.image_url" alt="News" class="card-img" />
    <div class="card-content">
      <h2 class="card-title">{{ news.title }}</h2>
      <p class="card-desc">{{ news.homepageDescription }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  news: {
    id: string
    title: string
    homepageDescription: string
    image_url: string
  }
}>()
</script>

<style scoped>
.card {
  display: flex;
  background: #fff;
  padding: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  gap: 1.5rem;
  align-items: center;
}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.card-img {
  width: 200px;
  height: auto;
  object-fit: contain;
  border-radius: 0.5rem;
  flex-shrink: 0;
}

.card-content {
  flex: 1;
}

.card-title {
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.card-desc {
  color: #4b5563;
  font-size: 1rem;
}
@media (max-width: 768px) {
  .card {
    flex-direction: column;
    text-align: center;
  }

  .card-img {
    width: 100%;
    height: auto;
  }
}
</style>
