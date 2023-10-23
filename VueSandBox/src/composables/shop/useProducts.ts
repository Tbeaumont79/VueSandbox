import { products } from '../../Databases/products'
import { MyProducts } from '../../interface/shop/productsType'
import { MyFilters } from '../../interface/shop/filtersType'
export const useProducts = () => {
  const filterProducts = (filters: MyFilters) => {
    return products.value.filter((product: MyProducts) => {
      const activeColorFilter = filters.color.find((filter) => filter.checked)
      const activePriceFilter = filters.price.find((filter) => filter.checked)
      const activeFilter = activeColorFilter || activePriceFilter
      switch (activeFilter?.filterName) {
        case 'price': {
          const minPrice = parseInt(activeFilter.value)
          const maxPrice = filters.price[activeFilter.id + 1]?.value
            ? parseInt(filters.price[activeFilter.id + 1].value)
            : Infinity
          return (
            parseFloat(product.price) >= minPrice &&
            parseFloat(product.price) < maxPrice
          )
        }
        case 'color': {
          return product.color === activeFilter.value
        }
        default: {
          break
        }
      }
      return product
    })
  }
  return {
    products,
    filterProducts
  }
}
