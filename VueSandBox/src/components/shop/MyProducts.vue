<script setup lang="ts">
import sweatImage from '../../assets/shop/sweat.png'
import pantsImage from '../../assets/shop/pants.png'
import teeShirtImage from '../../assets/shop/teeshirt.png'
import shoesImage from '../../assets/shop/shoes.png'
import sweatgImage from '../../assets/shop/sweatg.png'
import hatgImage from '../../assets/shop/hatg.png'
import baggImage from '../../assets/shop/bagg.png'
import pantsgImage from '../../assets/shop/pantg.png'
import { ref } from 'vue'
const products = ref([
  {
    id: 0,
    name: 'Sweat',
    imageAlt: "Front of men's Basic sweatshirt in purple.",
    imageSrc: sweatImage,
    price: '60 €',
    color: 'Purple'
  },
  {
    id: 1,
    name: 'Pants',
    imageAlt: "Front of men's Basic pants in purple.",
    imageSrc: pantsImage,
    price: '120 €',
    color: 'Purple'
  },
  {
    id: 2,
    name: 'T-Shirt',
    imageAlt: "Front of men's Basic Tee in purple.",
    imageSrc: teeShirtImage,
    price: '20 €',
    color: 'Purple'
  },
  {
    id: 3,
    name: 'Shoes',
    imageAlt: "Front of men's shoes in purple.",
    imageSrc: shoesImage,
    price: '420 €',
    color: 'Purple'
  },
  {
    id: 4,
    name: 'Sweat',
    imageAlt: "Front of men's Basic sweatshirt in green.",
    imageSrc: sweatgImage,
    price: '60 €',
    color: 'Green'

  },
  {
    id: 5,
    name: 'Hat',
    imageAlt: "Front of men's Basic hat in green.",
    imageSrc: hatgImage,
    price: '10 €',
    color: 'Green'
  },
  {
    id: 6,
    name: 'Bag',
    imageAlt: "Front of men's Basic bag in green.",
    imageSrc: baggImage,
    price: '1000 €',
    color: 'Green'
  },
  {
    id: 7,
    name: 'Pants',
    imageAlt: "Front of men's Basic pants in green.",
    imageSrc: pantsgImage,
    price: '120 €',
    color: 'Green'
  }
])
</script>
<template>
  <div
    class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
  >
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">
      Some products
    </h2>

    <div
      class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
      <div v-for="product in products" :key="product.id" class="group relative">
        <div
          class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
        >
          <img
            :src="product.imageSrc"
            :alt="product.imageAlt"
            class="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700 text-bold font-bold">
              <a>
                <span aria-hidden="true" class="absolute inset-0" />
                {{ product.name }}
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
          </div>
          <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
