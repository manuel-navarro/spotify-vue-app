<template>
  <div class="home">
    <h1>Welcome!</h1>
    <p>Access token is {{ getAccessToken }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {},
  computed: {
    ...mapGetters("auth", {
      getAccessToken: "getAccessToken"
    })
  }
};
</script>
