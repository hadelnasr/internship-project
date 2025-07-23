<template>
  <div>
    <nav class="navbar">
      <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      <NuxtLink to="/news" class="nav-link">News</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>

<script setup></script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #1f2937;
  padding: 1rem;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.nav-link {
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;
}
.nav-link:hover {
  color: #3b82f6;
}
</style>
