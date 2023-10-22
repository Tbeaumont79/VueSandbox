<script lang="ts">
import { defineAsyncComponent } from 'vue'

import LoadingComponent from './LoadingComp.vue'
import ErrorComponent from './ErrorComp.vue'

export const MyAsyncComp = defineAsyncComponent({
  loader: () => import('./ImageCard.vue'),
  loadingComponent: LoadingComponent,
  delay: 30,
  errorComponent: ErrorComponent,
  timeout: 5000
})
</script>
<template></template>
