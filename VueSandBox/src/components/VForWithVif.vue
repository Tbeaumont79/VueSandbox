<script setup lang="ts">
import { ref } from 'vue'
const codeLanguage = ref([
  {
    id: 0,
    name: 'JavaScript',
    value: 'js',
    isDone: true
  },
  {
    id: 1,
    name: 'TypeScript',
    value: 'ts',
    isDone: false
  },
  {
    id: 2,
    name: 'Vue',
    value: 'vue',
    isDone: true
  },
  {
    id: 3,
    name: 'React',
    value: 'react',
    isDone: false
  }
])
</script>
<template>
  <div class="flex gap-4">
    <div v-for="item in codeLanguage" :key="item.id">
      <h1 v-if="item.isDone" style="{{ item.isDone ?? color: 'orange' }}">{{ item.name }}</h1>
      <h1 :style="item.isDone ? { color: 'orange' } : { color: 'red' }">{{ item.name }}</h1>
    </div>
  </div>

</template>

