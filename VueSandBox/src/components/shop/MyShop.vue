<script setup lang="ts">
import MyFiltersComp from './MyFiltersComp.vue'
import MyProductsComp from './MyProductsComp.vue'
import { provide, computed } from 'vue'
import { useFilters } from '../../composables/shop/useFilters'
import { useProducts } from '../../composables/shop/useProducts'
import { MyFilters } from '../../interface/shop/filtersType'

const { filters } = useFilters()
const { products, filterProducts } = useProducts()

const filteredProducts = computed(() => {
  return filterProducts(filters as MyFilters)
})

provide('filters', filters)
provide('products', products)
provide('filteredProducts', filteredProducts)
</script>
<template>
  <MyFiltersComp />
  <MyProductsComp />
</template>
