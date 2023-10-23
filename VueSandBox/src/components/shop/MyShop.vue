<script setup lang="ts">
import MyFiltersComp from './MyFiltersComp.vue'
import MyProductsComp from './MyProductsComp.vue'
import { provide, computed } from 'vue'
import { useProducts } from '../../composables/shop/useProducts'
import { MyFilters } from '../../interface/shop/filtersType'
import { filters } from '../../Databases/filters'
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
