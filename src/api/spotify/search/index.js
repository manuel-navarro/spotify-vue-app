import request from "@/api/request";

export default {
  search(query) {
    const params = {
      query,
      type: "album,artist,playlist,track"
    };
    return request.get("search", {
      params
    });
  }
};
