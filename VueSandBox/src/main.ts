import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import MyFormularVue from './components/MyFormular.vue'
import MyShop from './components/shop/MyShop.vue'
import Home from './components/Home.vue'
import MyHook from './components/MyHook.vue'
import MyModal from './components/modalImplementation/MyModal.vue'
import NotFound from './components/NotFound.vue'
import translator from './plugins/translator'
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: MyShop
    },
    {
      path: '/signIn',
      name: 'MyFormularVue',
      component: MyFormularVue
    },
    {
      path: '/myhook',
      name: 'MyHook',
      component: MyHook
    },
    {
      path: '/myModal',
      name: 'MyModal',
      component: MyModal
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

const app = createApp(App)
app.directive('font-size', {
  beforeMount(el, binding) {
    switch (binding.arg) {
      case 'large':
        el.style.fontSize = '32px'
        break
      case 'medium':
        el.style.fontSize = '24px'
        break
      case 'small':
        el.style.fontSize = '16px'
        break
      default:
        el.style.fontSize = binding.value + 'px'
    }
  },

  updated(el, binding) {
    el.style.fontSize = binding.value + 'px'
  }
})

app
  .use(router)
  .use(translator, {
    en: {
      shop: 'Boutique',
      home: 'Acceuil'
    },
    fr: {
      acceuil: 'Home',
      boutique: 'Shop'
    }
  })
  .mount('#app')
