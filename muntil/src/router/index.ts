import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import EventWindow from '@/views/EventWindow.vue'
import CategoryWindow from '@/views/CategoryWindow.vue'
import AccountWindow from '@/views/AccountWindow.vue'
import LoginWindow from '@/views/LoginWindow.vue'
import SupportWindow from '@/views/SupportWindow.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Events',
      component: EventWindow,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryWindow,
    },
    {
      path: '/account',
      name: 'Account',
      component: AccountWindow,
    },
    {
      path: '/login',
      name: 'Log in',
      component: LoginWindow,
    },
    {
      path: '/support',
      name: 'Help',
      component: SupportWindow,
    }
    // {
    //   path: '/urgency',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
