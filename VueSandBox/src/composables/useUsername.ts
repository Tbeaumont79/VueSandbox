import { ref } from 'vue'

export function useUsername() {
  const username = ref('john')
  function updateUsername(newUsername: string) {
    username.value = newUsername
  }
  return { username, updateUsername }
}
