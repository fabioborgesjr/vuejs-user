import Axios from "axios";
import { URL } from "env";

export default {
  namespaced: true,
  actions: {
    async login({ commit }, form) {
      const headers = {
          Authorization: "Basic dWFhY2xpZW50OnVhYXNlY3JldA=="
        },
        { data } = await Axios.post(
          `${URL}/oauth/token`,
          { ...form, grant_type: "password" },
          { headers }
        );

      commit("save_token", data);
    }
  },
  mutations: {
    save_token(state, oauth) {
      state.oauth = oauth;
    }
  },
  state: {
    oauth: {}
  },
  getters: {
    user(state) {
      const [, body] = state.oauth.access_token.split("."),
        user = atob(body);

      if (user.scope) {
        user.scope = user.scope.split(",");
      }

      return JSON.parse(user);
    }
  }
};
