import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/question',
      name: 'Question',
      component: () => import('../views/QuestionView.vue')
    },
    {
      path: '/round-2',
      name: 'Question2',
      component: () => import('../views/Question2View.vue')
    },
    {
      path: '/round-3',
      name: 'Question3',
      component: () => import('../views/Question3View.vue')
    },
    {
      path: '/finis',
      name: 'Hasil',
      component: () => import('../views/HasilView.vue')
    },
    {
      path: '/finis-2',
      name: 'Hasil-2',
      component: () => import('../views/Hasil2View.vue')
    },
    {
      path: '/Day-2',
      name: 'TebakKartu',
      component: () => import('../views/Day2/TebakKartuView.vue')
    },
    {
      path: '/board-1',
      name: 'Board-1',
      component: () => import('../views/Day2/Board1View.vue')
    },
    {
      path: '/board-2',
      name: 'Board-2',
      component: () => import('../views/Day2/Board2View.vue')
    },
    {
      path: '/board-3',
      name: 'Board-3',
      component: () => import('../views/Day2/Board3View.vue')
    },
    {
      path: '/board-4',
      name: 'Board-4',
      component: () => import('../views/Day2/Board4View.vue')
    },
  ]
})

export default router
