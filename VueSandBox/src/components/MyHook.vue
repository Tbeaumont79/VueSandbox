<script setup lang="ts">
import { useUsername } from '../composables/useUsername'
import { ref } from 'vue'

const otherName = ref('')
const { username, updateUsername } = useUsername()
</script>
<template>
  <div class="h-screen flex flex-row justify-center h-screen mx-auto">
    <img src="../assets/hook.png" alt="hook" />
    <div class="flex flex-col justify-between p-5 my-auto h-1/2">
      <p v-font-size="22" class="text-bold font-bold text-color-white">
        L'idee de cet exercice est de travailler une notion : les composables il
        sont similaire au Hooks en React.
      </p>

      <p v-font-size="28" class="text-bold font-bold text-color-white">
        default name : {{ username }}
      </p>

      <form
        @submit.prevent="updateUsername(otherName)"
        class="flex flex-col gap-4"
      >
        <div
          class="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600"
        >
          <label for="name" class="block text-xs font-medium text-gray-900"
            >Name</label
          >
          <input
            type="text"
            name="name"
            id="name"
            v-model="otherName"
            class="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Jane Smith"
          />
        </div>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
