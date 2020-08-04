<template>
  <div class="baseItemGrid">
    <h2 class="baseItemGrid__title">
      <BaseIcon
        class="baseItemGrid__icon"
        width="24"
        height="24"
        icon-title="Artists"
        icon-name="artist"
        variant="default"
        ><IconMusic
      /></BaseIcon>
      {{ title }}
    </h2>
    <div class="baseItemGrid__content">
      <slot />
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon";
import IconMusic from "@/components/IconMusic";

export default {
  name: "BaseItemGrid",
  components: {
    BaseIcon,
    IconMusic
  },
  props: {
    title: String
  }
};
</script>

<style scoped>
.baseItemGrid__title {
  margin-top: 2em;
}
.baseItemGrid__content {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1em;
  overflow-x: auto;
}
</style>
