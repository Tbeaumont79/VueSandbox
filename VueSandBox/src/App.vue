<script setup lang="ts">
import MyHeader from './components/MyHeader.vue'
</script>

<template>
  <MyHeader />

  <div class="w-full h-screen text-gray-800  ">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
