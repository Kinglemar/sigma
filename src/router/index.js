import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import dashboard from '../views/user-views/Dashboard'
import Marketerpage from '../views/user-views/Marketerpage'
import Newmarketer from '../views/user-views/Newmarketer'
import UserEntryPages from '../entry-pages/UserEntryPages'

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

  // set restrictions to user pages

  {
    path: '/dashboard',
    component: UserEntryPages,
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: dashboard,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: '/dashboard/marketerpage',
        name: 'Marketerpage',
        component: Marketerpage,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: '/dashboard/newmarketer',
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

// check authentication of route before redirect

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('Sigma_Admin_Token') === null) {
      next('/')
    }
    else next();
  } else if (to.matched.some((record) => record.meta.guest)) {
    next()
  }
});

export default router
