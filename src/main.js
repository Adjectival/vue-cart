// modules
import Vue from 'vue'
import VueRouter from 'vue-router'
// dependencies
import App from './App.vue'
import store from './store/index.js'
import Products from './components/Products.vue'
import Cart from './components/Cart.vue'

Vue.use(VueRouter)
// Define app's routes
const routes = [
    { path: '/', component: Products },
    { path: '/cart', component: Cart }
]
// Register routes
const router = new VueRouter({
    routes
})

// App fundamentals
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
