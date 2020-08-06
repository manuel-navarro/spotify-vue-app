<template>
  <section
    class="baseItemGrid"
    role="region"
    aria-live="polite"
    :aria-label="title"
  >
    <h1 class="baseItemGrid__title">
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
    </h1>
    <div class="baseItemGrid__content">
      <slot />
    </div>
  </section>
</template>

<script>
import BaseIcon from "@/components/Base/BaseIcon";
import IconMusic from "@/components/Icon/IconMusic";

export default {
  name: "BaseItemGrid",
  components: {
    BaseIcon,
    IconMusic
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.baseItemGrid__title {
  margin-top: 2em;
}
.baseItemGrid__content > div {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1em;
  overflow-x: auto;
}
</style>
