// https://docs.vuestorefront.io/guide/vuex/vuex-conventions.html

export default {
  namespaced: true,
  state: {
    user: {},
    accessToken: "test_token",
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
    doLogin() {},
    doLogout() {},
    fetchUser() {},
    setAccessToken({ commit }, token) {
      commit("SET_ACCESS_TOKEN", token);
    },
    setExpiryTime({ commit }, time) {
      commit("SET_EXPIRY_TIME", time);
    }
  },
  getters: {
    getUser: state => state.user,
    getAccessToken: state => state.accessToken,
    getExpiryTime: state => state.expiryTime
  }
};
