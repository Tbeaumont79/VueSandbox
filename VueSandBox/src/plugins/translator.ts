import { App } from 'vue'

interface translatorOptions {
  [key: string]: string | translatorOptions
}

export default {
  install: (app: App, options: translatorOptions) => {
    // inject a globally available $translate() method
    app.config.globalProperties.$translate = (key: string) => {
      return key
        .split('.')
        .reduce((output: translatorOptions | string, input: string) => {
          if (typeof output === 'object') {
            return output[input] || ''
          }
          return ''
        }, options)
    }
  }
}
