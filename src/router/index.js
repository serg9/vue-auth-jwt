import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../store/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    meta: { requiresAuth: true, requiresAdmin: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const auth = useAuthStore()
  const isAuth = auth.isAuthenticated
  if (to.meta.requiresAuth && !isAuth) {
    return { name: 'login' }
  }
  if (to.name === 'login' && isAuth) {
    return { name: 'dashboard' }
  }
  if (to.meta.requiresAdmin) {
    if (!auth.user || auth.user.role !== 'admin') {
      return { name: 'dashboard' }
    }
  }
  return true
})

export default router
