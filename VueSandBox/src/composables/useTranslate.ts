import { getCurrentInstance } from 'vue'

export const useTranslate = () => {
  const instance = getCurrentInstance()

  if (!instance) {
    throw new Error('useTranslate: Cannot get current instance.')
  }

  const $translate = instance?.appContext.config.globalProperties.$translate

  if (!$translate) {
    throw new Error(
      'useTranslate: $translate is not defined or not a function.'
    )
  }

  return { $translate }
}
