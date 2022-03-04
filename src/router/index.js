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
  },
  {
    path: "/Newmarketer",
    name: "Newmarketer",
    component: Newmarketer,
  },
  {
    path: "/Marketerpage",
    name: "Marketerpage",
    component: Marketerpage,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
