import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import interceptors from "@/api/interceptors";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  },
  plugins: [interceptors.authInterceptor],
  strict: process.env.NODE_ENV !== "production"
});
