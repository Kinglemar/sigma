import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Newmarketer from "../views/Newmarketer.vue";
import Marketerpage from "../views/Marketerpage.vue";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Newmarketer",
    name: "Newmarketer",
    component: Newmarketer,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Marketerpage",
    name: "Marketerpage",
    component: Marketerpage,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (localStorage.getItem('app_token') === null) {
//       next('/Home')
//     }
//     else next();
//   }
// });

export default router;
