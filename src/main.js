import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "./registerServiceWorker";

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
