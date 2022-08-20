import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'
import ProductCrawler from './views/ProductCrawler.vue'
import ProductStatistic from './views/ProductStatistic.vue'
import SingleProductStatistic from './views/SingleProductStatistic.vue'

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
  {
    path: "/product-statistic",
    meta: { pageName: "Statistik Produk" },
    component: ProductStatistic,
  },
  {
    path: "/product-statistic/:id",
    meta: { pageName: "Statistik Produk" },
    component: SingleProductStatistic,
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