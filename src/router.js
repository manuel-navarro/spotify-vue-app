import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import store from "@/store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      props: route => ({
        errorMessage: route.params.error
      }),
      component: Login
    },
    /**
     * View used as callback from Spotify Web API Authorization flow.
     * SUCCESS: access_token and other params will be received as a Hash Fragment
     * FAIL: error_code will be received as Query param
     */
    {
      path: "/auth_callback",
      name: "auth_callback",
      component: () =>
        import(
          /* webpackChunkName: "auth_callback" */ "./views/AuthCallback.vue"
        )
    }
  ]
});

router.beforeEach(function(to, from, next) {
  if (
    !store.getters["auth/getAccessToken"] &&
    to.name !== "login" &&
    to.name !== "auth_callback"
  ) {
    store.dispatch("auth/doLogin");
    next(false);
  }

  next();
});

export default router;
