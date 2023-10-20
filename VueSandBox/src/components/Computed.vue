<script setup lang="ts">
import { computed, reactive } from 'vue'
const author = reactive({
  name: 'John',
  books: [
    { title: 'Vue Js', price: 20 },
    { title: 'React learning', price: 30 },
    { title: 'Le rouge et le noir', price: 40 },
    { title: 'Le petit prince', price: 50 }
  ]
})
// Date en jj-mm-dd date.now()
const now = computed(() => Date().slice(0, 20))
const total = computed(() => {
  return author.books.reduce((acc, book) => acc + book.price, 0)
})
function calculateBooksMessage() {
  return author.books.length > 0 ? 'Yes' : 'No'
}
</script>
<template>
  <div class="header">
    <h1
      class="text-4xl text-orange-400 font-bold p-4 border-b border-orange-400"
    >
      {{ total }}
      {{ calculateBooksMessage() }}
      {{ now }}
    </h1>
  </div>
</template>
