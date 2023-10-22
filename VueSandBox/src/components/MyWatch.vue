<script setup lang="ts">
import { ref, watch } from 'vue'
const basicString = ref('intiale String value')
// trigger un side effect en reponse d'une update de state (une watch)
watch(basicString, (newValue, oldValue) => {
  console.log(newValue, oldValue)
})
</script>
<template>
  <div>
    <input type="text" v-model="basicString" />
  </div>
</template>
