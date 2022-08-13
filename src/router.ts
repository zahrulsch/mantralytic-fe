import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'
import ProductCrawler from './views/ProductCrawler.vue'

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    meta: { pageName: "Beranda" },
    component: Home,
  },
  {
    path: "/product-crawler",
    meta: { pageName: "Crawler Produk" },
    component: ProductCrawler,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  const { pageName } = to.meta

  if (pageName) document.title = `${pageName} - Mantralytic`
  else document.title = 'Product Analytic - Mantralytic'
  
  next()
})

export default router