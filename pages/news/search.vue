<template>
  <div class="min-h-screen bg-gray-50 pt-28 px-4 sm:px-8">
    <h1 class="text-3xl font-extrabold text-center text-gray-800 mb-8">
      Discover News
    </h1>

    <div class="bg-white shadow-md rounded-xl p-6 mb-6">
      <NewsSearchFilter
        @update:search="search = $event"
        @update:author="author = $event"
      />
    </div>

    <div v-if="search || author" class="text-center mb-4">
      <span class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
        Showing results for: <span class="italic">{{ search || 'All' }}</span> by <span class="italic">{{ author || 'All authors' }}</span>
      </span>
    </div>

    <div v-if="search || author" class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="n in 6"
        :key="n"
        class="p-4 border rounded-xl shadow hover:shadow-lg transition bg-white animate-fade-in"
      >
        <div class="h-40 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
        <h2 class="font-semibold text-lg text-gray-800 mb-2">
           News Title
        </h2>
        <p class="text-sm text-gray-600 mb-1">
          Author: <strong>{{ author || 'Any' }}</strong>
        </p>
        <p class="text-xs text-gray-500">
          Keyword: <strong>{{ search || 'None' }}</strong>
        </p>
      </div>
    </div>

    <div v-else class="mt-12 text-center text-gray-400">
      <p>Try typing something or select an author to preview results</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from '             '
import NewsSearchFilter from '@/components/NewsSearchFilter.vue'

const search = ref('')
const author = ref('')

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
