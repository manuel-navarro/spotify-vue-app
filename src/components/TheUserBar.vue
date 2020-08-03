<template>
  <div class="userBar">
    <img :href="userImage" class="userBar__image" v-if="userImage" />
    <BaseIcon
      v-else
      width="40"
      height="40"
      icon-title="Profile"
      icon-name="profile"
      variant="default"
      ><IconUserCircle
    /></BaseIcon>
    <h1>
      Welcome, <a :href="userURL" target="_blank">{{ userName }}</a
      >!
    </h1>
    <button @click="doLogout()" class="userBar__logout" title="Logout">
      <BaseIcon
        width="20"
        height="20"
        icon-title="Logout"
        icon-name="logout"
        variant="default"
        ><IconStandBy
      /></BaseIcon>
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BaseIcon from "@/components/BaseIcon";
import IconStandBy from "@/components/IconStandBy";
import IconUserCircle from "@/components/IconUserCircle";

export default {
  name: "TheUserBar",
  components: {
    BaseIcon,
    IconStandBy,
    IconUserCircle
  },
  computed: {
    ...mapGetters("auth", {
      user: "getUser"
    }),
    userName() {
      return this.user.display_name;
    },
    userURL() {
      return this.user.external_urls.spotify;
    },
    userImage() {
      // TODO: Add default image if user doesn't have any
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
  background: var(--light-gray-color);
  border-radius: 40px;
  width: 40px;
  height: 40px;
}
.userBar__logout {
  background: none;
  border: 0;
  cursor: pointer;
}
</style>
