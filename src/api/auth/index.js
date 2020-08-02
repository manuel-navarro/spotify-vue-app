const ACCESS_TOKEN_KEY = "access_token";

// TODO: Move to a configuration file
const endpointAuthURL = "https://accounts.spotify.com";
const callbackURL = "http://localhost:8080/auth_callback";
const clientID = "b1f8054317964de89f8aae59ded08518";
const scopes = ["user-library-read"];

export default {
  getAuthorizationURL() {
    const params =
      "?client_id=" +
      clientID +
      "&response_type=token" +
      "&show_dialog=true" +
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
  }
};
