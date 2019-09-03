import Vuex from "vuex";
import Vue from "vue";
import VuexPersistence from "vuex-persist";

import login from "./login";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    new VuexPersistence({ storage: global.localStorage, key: "state" }).plugin
  ],
  modules: {
    login
  }
});
