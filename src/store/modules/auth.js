import api from "@/api";

export default {
  namespaced: true,
  state: {
    user: {},
    accessToken: api.auth.getAccessToken() || "",
    expiryTime: ""
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_ACCESS_TOKEN(state, token) {
      state.accessToken = token;
    },
    SET_EXPIRY_TIME(state, time) {
      state.expiryTime = time;
    }
  },
  actions: {
    doLogin() {
      try {
        const url = api.auth.getAuthorizationURL();
        if (url) {
          window.location.href = url;
        }
      } catch (e) {
        // TODO: Handle error and provide feedback
        console.log(e);
      }
    },
    doLogout() {},
    async fetchUser({ commit }) {
      try {
        const response = await api.spotify.users.me();
        commit("SET_USER", response.data);
      } catch (e) {
        // TODO: Handle error and provide feedback
        console.log(e);
      }
    },
    setAccessToken({ commit }, token) {
      commit("SET_ACCESS_TOKEN", token);
      api.auth.setAccessToken(token);
    },
    setExpiryTime({ commit }, time) {
      commit("SET_EXPIRY_TIME", time);
      api.auth.setExpiryTime(time);
    }
  },
  getters: {
    getUser: state => state.user,
    getAccessToken: state => state.accessToken,
    getExpiryTime: state => state.expiryTime
  }
};
