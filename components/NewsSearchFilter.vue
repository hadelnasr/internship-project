<template>
  <div class="flex flex-col md:flex-row md:items-center gap-4 justify-center mb-6 flex-wrap">
    <div class="relative w-full md:w-[40%]">
      <Search class="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search news by title or keyword..."
        class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
    </div>

    <div class="relative w-full md:w-[40%]">
      <User class="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
      <select
        v-model="selectedAuthor"
        class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        <option value="">All Authors</option>
        <option v-for="author in authors" :key="author" :value="author">
          {{ author }}
        </option>
      </select>
    </div>

    <button
      @click="resetFilters"
      class="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-xl shadow-sm hover:bg-blue-700 transition-all duration-200 w-fit self-start"
    >
      <RefreshCcw class="w-4 h-4" />
      <span class="text-sm">Reset</span>
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from '     '
import { Search, User, RefreshCcw } from 'lucide-vue-next'

const emit = defineEmits(['update:search', 'update:author'])

const searchQuery = ref('')
const selectedAuthor = ref('')
const authors = ['Bob', 'Emma', 'Taylor', 'Jack']

watch(searchQuery, () => emit('update:search', searchQuery.value))
watch(selectedAuthor, () => emit('update:author', selectedAuthor.value))

function resetFilters() {
  searchQuery.value = ''
  selectedAuthor.value = ''
  emit('update:search', '')
  emit('update:author', '')
}
</script>
