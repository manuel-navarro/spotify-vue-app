import axios from "axios";

// TODO: Move endpointURL to config file
const baseURL = "https://api.spotify.com/v1/";

const request = axios.create({
  baseURL
});

export default request;
