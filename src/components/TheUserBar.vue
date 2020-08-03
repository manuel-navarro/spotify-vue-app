<template>
  <div class="userBar">
    <img :href="userImage" class="userBar__image" />
    <h1>Welcome, {{ userName }}!</h1>
    <button @click="doLogout" class="userBar__logout">Logout</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TheUserBar",
  computed: {
    ...mapGetters("auth", {
      user: "getUser"
    }),
    userName() {
      return this.user.display_name;
    },
    userImage() {
      const images = this.user.images;
      return images.length > 0 ? images[0].url : null;
    }
  },
  methods: {
    ...mapActions("auth", ["doLogout"])
  }
};
</script>
<style scoped>
.userBar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  white-space: nowrap;
  margin-left: 24px;
}
.userBar__image {
  background: #828282;
  border-radius: 40px;
  width: 40px;
  height: 40px;
}
</style>
