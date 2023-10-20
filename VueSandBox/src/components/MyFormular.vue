<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const email = ref('')
const isLogged = ref(false)

const onSubmit = () => {
  console.log(username.value)
  console.log(password.value)
  isLogged.value = !isLogged.value
}
//
</script>

<template>
  <div class="h-screen w-1/3">
    <img
      src="src/assets/sushi.png"
      alt="sushi"
      class="h-48 w-48 m-auto gap-y-4 object-cover rounded-full"
    />
    <form @submit.prevent="onSubmit" method="post">
      <div class="flex justify-center flex-col">
        <label class="p-2" for="Username">Username</label>
        <input
          class="border rounded shadow focus:outline-none text-orange-400 p-1"
          type="text"
          v-model="username"
        />
        <label class="p-2" for="Email">Email</label>
        <input
          class="border rounded shadow focus:outline-none text-orange-400 p-1"
          type="text"
          v-model="email"
        />
        <label class="p-2" for="Username">Password</label>
        <input
          class="border rounded shadow focus:outline-none text-orange-400 p-1"
          type="password"
          v-model="password"
        />

        <button
          type="submit"
          value="Submit"
          class="radius mt-5 p-2 bg-blue-400"
          :disabled="isLogged"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
