import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import search from "./modules/search";
import plugins from "@/api/interceptors";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    search
  },
  plugins: [plugins.authInterceptor, plugins.errorInterceptor],
  strict: process.env.NODE_ENV !== "production"
});
