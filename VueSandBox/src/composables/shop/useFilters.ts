import { reactive } from 'vue'

export const useFilters = () => {
  const filters = reactive({
    price: [
      {
        id: 0,
        filterName: 'price',
        value: '0',
        label: '$0 - $25',
        checked: false
      },
      {
        id: 1,
        filterName: 'price',
        value: '25',
        label: '$25 - $50',
        checked: false
      },
      {
        id: 2,
        filterName: 'price',
        value: '50',
        label: '$50 - $75',
        checked: false
      },
      { id: 3, filterName: 'price', value: '75', label: '$75+', checked: false }
    ],
    color: [
      {
        id: 0,
        filterName: 'color',
        value: 'white',
        label: 'White',
        checked: false
      },
      {
        id: 1,
        filterName: 'color',
        value: 'beige',
        label: 'Beige',
        checked: false
      },
      {
        id: 2,
        filterName: 'color',
        value: 'blue',
        label: 'Blue',
        checked: false
      },
      {
        id: 3,
        filterName: 'color',
        value: 'brown',
        label: 'Brown',
        checked: false
      },
      {
        id: 4,
        filterName: 'color',
        value: 'green',
        label: 'Green',
        checked: false
      },
      {
        id: 5,
        filterName: 'color',
        value: 'purple',
        label: 'Purple',
        checked: false
      }
    ],
    size: [
      { id: 0, filterName: 'size', value: 'xs', label: 'XS', checked: false },
      { id: 1, filterName: 'size', value: 's', label: 'S', checked: true },
      { id: 2, filterName: 'size', value: 'm', label: 'M', checked: false },
      { id: 3, filterName: 'size', value: 'l', label: 'L', checked: false },
      { id: 4, filterName: 'size', value: 'xl', label: 'XL', checked: false },
      { id: 5, filterName: 'size', value: '2xl', label: '2XL', checked: false }
    ],
    category: [
      { value: 'all-new-arrivals', label: 'All New Arrivals', checked: false },
      { value: 'tees', label: 'Tees', checked: false },
      { value: 'objects', label: 'Objects', checked: false },
      { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
      { value: 'pants-and-shorts', label: 'Pants & Shorts', checked: false }
    ]
  })

  return {
    filters
  }
}
