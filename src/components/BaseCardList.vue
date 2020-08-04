<template>
  <div class="baseCardList">
    <h2 class="baseCardList__title">
      <BaseIcon
        class="baseCardList__icon"
        width="24"
        height="24"
        icon-title="Artists"
        icon-name="artist"
        variant="default"
        ><IconArtist /></BaseIcon
      >{{ title }}
    </h2>
    <div
      class="baseCardList__content"
      ref="content"
      :class="this.hasScroll ? 'baseCardList__content--showScroll ' : ''"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon";
import IconArtist from "@/components/IconArtist";

export default {
  name: "BaseCardList",
  components: {
    BaseIcon,
    IconArtist
  },
  props: {
    title: String
  },
  data() {
    return {
      hasScroll: false
    };
  },
  mounted() {
    this.checkContentScroll();
  },
  methods: {
    checkContentScroll() {
      const content = this.$refs.content;
      this.hasScroll = content.scrollWidth > content.clientWidth;
    }
  }
};
</script>

<style scoped>
.baseCardList__icon {
  margin-right: 12px;
}
.baseCardList__title {
  margin-top: 2em;
}
.baseCardList__content {
  display: flex;
  margin-top: 1em;
  overflow-x: auto;
}
.baseCardList__content--showScroll {
  overflow-x: scroll !important;
}
</style>
