import request from "@/api/request";

export default store => {
  request.interceptors.request.use(function(config) {
    if (store.getters["auth/getAccessToken"]) {
      config.headers.common[
        "Authorization"
      ] = `Bearer ${store.getters["auth/getAccessToken"]}`;
    }
    return config;
  }, null);
};
