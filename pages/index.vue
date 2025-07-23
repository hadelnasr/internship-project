<template>
  <div class="homepage">
    <h1 class="title">Welcome to News</h1>
    <NuxtLink to="/news" class="news-button">
      Go to News Page
    </NuxtLink>
  </div>
</template>

<script setup>

</script>

<style scoped>
.homepage {
  text-align: center;
  padding: 4rem 1rem;
  background-color: #f9f9f9;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #222;
}

.news-button {
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: #2563eb; 
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.news-button:hover {
  background-color: #1e40af; 
}
</style>
