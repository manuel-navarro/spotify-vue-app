import request from "@/api/request";

export default {
  me() {
    return request.get("me");
  }
};
