export default {
  namespaced: true,
  state: {
    user: {},
    accessToken: "test_token",
    expiryTime: ""
  },
  mutations: {},
  actions: {},
  getters: {
    getUser: state => state.user,
    getAccessToken: state => state.accessToken,
    getExpiryTime: state => state.expiryTime
  }
};
