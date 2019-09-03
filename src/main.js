import Vue from "vue";
import Vuelidate from "vuelidate";
import VueRouter from "vue-router";
import Axios from "axios";

import App from "./App.vue";
import router from "./routes";
import store from "./store/index";

import interceptor from "@/utils/interceptor";

Axios.interceptors.request.use(interceptor);
// import "./registerServiceWorker";

Vue.use(Vuelidate);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
