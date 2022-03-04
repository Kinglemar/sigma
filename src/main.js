import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import { api_base_url } from "./api";
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap-vue/dist/bootstrap-vue.css'

axios.defaults.baseURL = api_base_url
Vue.use(BootstrapVue)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
