<script setup lang="ts">
import { ref } from 'vue'
const fontSize = ref(24)
// la doc precise quand meme qu'il faut utilise le vbind car c'est plus efficient et ssr friendly
</script>
<template>
  <div class="flex flex-row justify-center h-screen">
    <img src="../assets/randomText.png" alt="randomText" />

    <div class="flex flex-col justify-center mx-auto w-1/3">
      <p v-font-size="22" class="mt-3 text-bold font-bold text-color-white">
        L'idee de cet exercice est de travailler une notion : les customs
        directives il permet de definir des directives personnalisées.
      </p>
      <p class="mt-3" v-font-size:large>Normal font size</p>
      <p class="mt-3" v-font-size:small>Custom font size</p>
      <p class="mt-3" v-font-size="fontSize">Custom font size when clicked</p>
      <button
        @click="fontSize += 2"
        class="bg-blue-500 p-2 rounded text-white m-2 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
      >
        +
      </button>
    </div>
  </div>
</template>
