<script setup lang="ts">
import { ref } from 'vue'
import MyModalComponent from './MyModalComponent.vue'
const showModal = ref(false)
</script>
<template>
  <div class="flex justify-center">
    <button
      class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      @click="showModal = !showModal"
    >
      Checkout !
    </button>
    <Teleport to="header">
      <MyModalComponent :show="showModal" @close="showModal = false">
        <template #header>
          <h3 class="bg-red-400 text-lg font-semibold leading-6 text-gray-900">
            header
          </h3>
        </template>
      </MyModalComponent>
    </Teleport>
  </div>
</template>
