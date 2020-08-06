<template>
  <div
    class="iconLogo"
    v-bind:style="{ width: width + 'px', height: height + 'px' }"
  >
    <BaseIcon
      :width="width"
      :height="height"
      icon-title="Spotify Vue App logo"
      icon-name="logo"
      icon-color="#fff"
      ><IconMusic
    /></BaseIcon>
  </div>
</template>

<script>
import BaseIcon from "@/components/Base/BaseIcon";
import IconMusic from "@/components/Icon/IconMusic";
export default {
  name: "IconLogo",
  components: {
    BaseIcon,
    IconMusic
  },
  props: {
    width: {
      type: [Number, String],
      default: 40
    },
    height: {
      type: [Number, String],
      default: 40
    }
  }
};
</script>

<style scoped>
.iconLogo {
  background: var(--primary-lighter-color);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
