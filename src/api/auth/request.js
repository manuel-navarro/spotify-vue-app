import axios from "axios";

const baseURL = process.env.VUE_APP_ENDPOINT_API_URL;
const request = axios.create({
  baseURL
});

export default request;
