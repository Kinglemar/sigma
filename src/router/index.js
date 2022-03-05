import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import dashboard from '../views/user-views/Dashboard'
import Marketerpage from '../views/user-views/Marketerpage'
import Newmarketer from '../views/user-views/Newmarketer'
import UserEntryPages from '../entry-pages/UserEntryPages.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      guest: true,
    },
  },

  {
    path: '/dashboard',
    component: UserEntryPages,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: dashboard,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: '/dashboard/Marketerpage',
        name: 'Marketerpage',
        component: Marketerpage,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: '/dashboard/Newmarketer',
        name: 'Newmarketer',
        component: Newmarketer,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('app_token') === null) {
      next('/')
    }
    else next();
  } else if (to.matched.some((record) => record.meta.guest)) {
    next()
  }
});

export default router
