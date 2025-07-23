<template>
  <div>
    <NewsDetails v-if="news" :news="news" />
    <p v-else>Loading or not found...</p>
  </div>
</template>

<script setup>
import NewsDetails from '@/components/NewsDetails.vue'
const route = useRoute()
const { data: news, error } = await useFetch(`/api/news/${route.params.id}`)

if (error.value) {
  console.error(error.value)
}
</script>

<style scoped>

</style>
