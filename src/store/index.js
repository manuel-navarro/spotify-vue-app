import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import search from "./modules/search";
import interceptors from "@/api/interceptors";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    search
  },
  plugins: [interceptors.authInterceptor],
  strict: process.env.NODE_ENV !== "production"
});
