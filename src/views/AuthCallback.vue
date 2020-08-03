<script>
import { mapActions } from "vuex";

function parseHashFragment(hashFragment) {
  const result = {};
  hashFragment
    .split("&")
    .map(part => part.replace("#", ""))
    .forEach(param => {
      const parts = param.split("=");
      result[parts[0]] = parts[1];
    });
  return result;
}

export default {
  name: "",
  methods: {
    ...mapActions("auth", ["setAccessToken", "setExpiryTime", "fetchUser"])
  },
  created() {
    const error = this.$route.query.error;
    if (error) {
      this.$router.push({
        name: "login",
        params: { error }
      });
    } else {
      const { access_token, expires_in } = parseHashFragment(this.$route.hash);
      const now = new Date();
      const expiryTime = new Date(now.getTime() + expires_in * 1000).getTime();

      this.setAccessToken(access_token);
      this.setExpiryTime(expiryTime);
      this.fetchUser();
      this.$router.push({ name: "home" });
    }
  }
};
</script>
