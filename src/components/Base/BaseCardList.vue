<template>
  <section
    class="baseCardList"
    role="region"
    aria-live="polite"
    :aria-label="title"
  >
    <h1 class="baseCardList__title">
      <BaseIcon
        class="baseCardList__icon"
        width="24"
        height="24"
        :icon-title="title"
        :icon-name="type"
        variant="default"
      >
        <IconArtist v-if="isArtist" />
        <IconAlbum v-else-if="isAlbum" />
      </BaseIcon>
      {{ title }}
    </h1>
    <div
      class="baseCardList__content"
      ref="content"
      :class="
        this.visibleRows ? `baseCardList__content--show${this.visibleRows}` : ''
      "
    >
      <slot />
    </div>
    <button class="baseCardList__showMore" v-if="showMore">Show more</button>
  </section>
</template>

<script>
import BaseIcon from "@/components/Base/BaseIcon";
import IconArtist from "@/components/Icon/IconArtist";
import IconAlbum from "@/components/Icon/IconAlbum";

export default {
  name: "BaseCardList",
  components: {
    BaseIcon,
    IconArtist,
    IconAlbum
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
    visibleRows: {
      type: Number,
      default: null
    },
    showMore: {
      type: Boolean,
      default: false
    }
  },
  mounted() {},
  computed: {
    isArtist() {
      return this.type === "artist";
    },
    isAlbum() {
      return this.type === "album";
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
.baseCardList__showMore {
  cursor: pointer;
  font-weight: bold;
  margin-top: 1em;
  background: 0;
  border: 0;
  text-transform: uppercase;
  color: var(--primary-color);
}
.baseCardList__showMore:hover {
  color: var(--primary-lighter-color);
}
.baseCardList__content > div {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1em;
}
.baseCardList__content--show1 {
  overflow: hidden;
  height: calc(var(--card-height) + 1em);
}
.baseCardList__content--show2 {
  overflow: hidden;
  height: calc(var(--card-height) * 2px + 1em);
}
</style>
