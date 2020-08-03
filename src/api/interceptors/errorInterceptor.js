import request from "@/api/request";

export default store => {
  request.interceptors.response.use(null, async error => {
    const { status } = error.response;

    // 401 Unauthorized (probably access token is expired)
    if (status === 401) {
      // Force logout
      store.dispatch("auth/doLogout", { error: status });
    }

    // TODO: Manage other errors and provide feedback
  });
};
