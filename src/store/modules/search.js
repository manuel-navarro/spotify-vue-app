import api from "@/api";

export default {
  namespaced: true,
  state: {
    search: "",
    results: {},
    isSearching: false
  },
  mutations: {
    SET_SEARCH(state, search) {
      state.search = search;
    },
    SET_RESULTS(state, results) {
      state.results = results;
    },
    SET_IS_SEARCHING(state, isSearching) {
      state.isSearching = isSearching;
    }
  },
  actions: {
    async doSearch({ commit, dispatch }, query) {
      dispatch("startSearching", query);

      try {
        const response = await api.spotify.search.search(query);
        commit("SET_RESULTS", response.data);
        commit("SET_IS_SEARCHING", false);
      } catch (e) {
        // TODO: Handle error and provide feedback
        console.log(e);
        commit("SET_IS_SEARCHING", false);
      }
    },
    clearSearch({ commit, dispatch }) {
      commit("SET_RESULTS", {});
      commit("SET_IS_SEARCHING", false);
      dispatch("setSearch", "");
    },
    startSearching({ commit, dispatch }, query) {
      commit("SET_IS_SEARCHING", true);
      dispatch("setSearch", query);
    },
    setSearch({ commit }, query) {
      commit("SET_SEARCH", query);
    }
  },
  getters: {
    getIsSearching: state => state.isSearching,
    getSearch: state => state.search,
    getResultAlbums: state => state.results.albums,
    getResultArtists: state => state.results.artists,
    getResultTracks: state => state.results.tracks
  }
};
