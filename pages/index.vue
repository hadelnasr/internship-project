<template>
  <div class="homepage">
    <div class="overlay">
      <h1 class="title">Welcome to Global News</h1>
      <NuxtLink to="/news" class="news-link">Go to News Page</NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.homepage {
  background-image: url('/back.gif'); /* Match the file name */
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 4rem 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.news-link {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #3a6ad1;
  color: white;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease;
}

.news-link:hover {
  background-color: #1e40af;
}
</style>
