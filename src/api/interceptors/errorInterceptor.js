import request from "@/api/request";

export default store => {
  request.interceptors.response.use(null, async error => {
    const { status, statusText } = error.response;
    // 401 Unauthorized (probably access token is expired)
    if (status === 401) {
      store.dispatch("auth/doLogin", store.getters["search/getSearch"]);
    } else {
      // Force logout
      store.dispatch("auth/doLogout", statusText);
    }
    // TODO: Manage other errors and provide feedback
  });
};
