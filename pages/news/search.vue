<template>
  <div class="min-h-screen bg-gray-50 pt-28 px-4 sm:px-8">
    <h1 class="text-3xl font-extrabold text-center text-gray-800 mb-8">
      Discover News
    </h1>

    <div class="bg-white shadow-md rounded-xl p-6 mb-6">
      <NewsSearchFilter
        @update:search="updateSearch"
        @update:author="updateAuthor"
      />
    </div>

    <div v-if="search || author" class="text-center mb-4">
      <span class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
        Showing results for: 
            <span class="italic">
              {{ search || 'All' }}
            </span>
           by 
            <span class="italic">
             {{ author || 'All authors' }}
            </span>
        </span>
    </div>


    <div v-if="error" class="text-center mt-12 text-red-600">
      {{ error }}
    </div>

    <div v-if=" !error && news.length > 0 " class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

     <NuxtLink
       v-for="item in news":key="item.id":to="`/news/${item.id}`"
       class="block bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-5"
>
        <img :src="item.image_url" alt="news image"class="w-full h-44 object-cover rounded-md mb-4"/> 

        <h2 class="text-sm text-red-600 font-medium mb-1">
          {{ item.title }}
       </h2>

        <p class="text-sm text-indigo-600 font-medium mb-1">
          Keyword: 
          <span class="font-semibold">
            {{ search || 'N/A' }}
          </span>
        </p>

        <p class="text-sm text-indigo-600 font-medium mb-1">
          Author:
           <span class="font-semibold">
            {{ item.created_by_name }}
          </span>
        </p>

        <p class="text-violet-900 text-sm line-clamp-3">
          {{ item.homepageDescription }}
        </p>
      </NuxtLink>

    </div>

    <div v-if=" !error && news.length === 0 && (search || author)" class="mt-12 text-center text-gray-400">
      <p>No results found for the given search or author.</p>
    </div>

    <div v-if="!search && !author" class="mt-12 text-center text-gray-400">
      <p>Type or select an author to show results</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import NewsSearchFilter from '@/components/NewsSearchFilter.vue'



const search = ref('')
const author = ref('')
const news = ref([])
const loading = ref(false)
const error = ref('')



async function fetchNews() {
  if (!search.value && !author.value) {
    news.value = []
    error.value = ''
    return
  }

  loading.value = true
  error.value = ''

  const params = new URLSearchParams()
  if (search.value) params.append('search', search.value)
  if (author.value) params.append('author', author.value)

  const url = `/api/news/searchFilter?${params.toString()}`

  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`)

    const data = await res.json()
    news.value = Array.isArray(data) ? data : []
  } catch (err) {
    console.error('Fetch failed:', err)
    error.value = `Failed to fetch news: ${err.message}`
    news.value = []
  } finally {
    loading.value = false
  }
}


watch([search, author], fetchNews, { immediate: true })

function updateSearch(val) {
  search.value = val.trim()
}

function updateAuthor(val) {
  author.value = val.trim()
}
</script>

<style>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.4s ease-in-out;
}
</style>
