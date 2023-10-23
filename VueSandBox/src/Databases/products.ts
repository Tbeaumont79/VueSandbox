import { MyProducts } from '../interface/shop/productsType'
import { ref } from 'vue'
import sweatImage from '../assets/shop/sweat.png'
import pantsImage from '../assets/shop/pants.png'
import teeShirtImage from '../assets/shop/teeshirt.png'
import shoesImage from '../assets/shop/shoes.png'
import sweatgImage from '../assets/shop/sweatg.png'
import hatgImage from '../assets/shop/hatg.png'
import baggImage from '../assets/shop/bagg.png'
import pantsgImage from '../assets/shop/pantg.png'

export const products = ref<MyProducts[]>([
  {
    id: 0,
    name: 'Sweat',
    imageAlt: "Front of men's Basic sweatshirt in purple.",
    imageSrc: sweatImage,
    price: '60 €',
    color: 'purple'
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
    color: 'purple'
  },
  {
    id: 3,
    name: 'Shoes',
    imageAlt: "Front of men's shoes in purple.",
    imageSrc: shoesImage,
    price: '420 €',
    color: 'purple'
  },
  {
    id: 4,
    name: 'Sweat',
    imageAlt: "Front of men's Basic sweatshirt in green.",
    imageSrc: sweatgImage,
    price: '60 €',
    color: 'green'
  },
  {
    id: 5,
    name: 'Hat',
    imageAlt: "Front of men's Basic hat in green.",
    imageSrc: hatgImage,
    price: '10 €',
    color: 'green'
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
    color: 'green'
  }
])
