import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../pages/index.vue')
    },
    {
      path: '/alerts',
      name: 'alerts',
      component: () => import('../pages/alerts.vue')
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: () => import('../pages/buttons.vue')
    }
  ]
})

export default router
