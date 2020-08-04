const ACCESS_TOKEN_KEY = "access_token";
const EXPIRY_TIME_KEY = "expiry_time";

const scopes = ["user-library-read"];
const endpointAuthURL = process.env.VUE_APP_ENDPOINT_AUTH_URL;
const callbackURL = process.env.VUE_APP_ENDPOINT_CALLBACK_URL;
const clientID = process.env.VUE_APP_API_KEY;

export default {
  getAuthorizationURL(state) {
    const params =
      "?client_id=" +
      clientID +
      "&response_type=token" +
      "&show_dialog=true" +
      "&state=" +
      (state ? encodeURIComponent(state) : "") +
      "&redirect_uri=" +
      encodeURIComponent(callbackURL) +
      "&scope=" +
      encodeURIComponent(scopes.join("%20"));

    return endpointAuthURL + "/authorize" + params;
  },

  setAccessToken(accessToken) {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  },

  getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  },

  clearAccessToken() {
    localStorage.clear(ACCESS_TOKEN_KEY);
  },

  setExpiryTime(time) {
    localStorage.setItem(EXPIRY_TIME_KEY, time);
  },

  getExpiryTime() {
    return localStorage.getItem(EXPIRY_TIME_KEY);
  },

  clearExpiryTime() {
    localStorage.clear(EXPIRY_TIME_KEY);
  }
};
