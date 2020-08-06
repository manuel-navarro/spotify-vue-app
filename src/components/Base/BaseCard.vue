<template>
  <article class="baseCard">
    <div class="baseCard__imgContainer">
      <img :src="img" class="baseCard__img" :alt="title" />
      <a :href="href" target="_blank" class="baseCard__listenButton">
        <BaseIcon
          width="45"
          height="45"
          icon-title="Play in Spotify"
          icon-name="play"
          variant="primary"
          ><IconPlay
        /></BaseIcon>
      </a>
    </div>
    <div class="baseCard__details">
      <h1 class="baseCard__title" :title="title">{{ title }}</h1>
      <h2 class="baseCard__subtitle" v-if="subtitleSlotPassed">
        <slot name="subtitle"></slot>
      </h2>
      <div class="baseCard__detailsContent">
        <slot></slot>
        <slot name="bottom" class="baseCard__bottom"></slot>
      </div>
    </div>
  </article>
</template>

<script>
import BaseIcon from "@/components/Base/BaseIcon";
import IconPlay from "@/components/Icon/IconPlay";

export default {
  name: "BaseCard",
  components: {
    BaseIcon,
    IconPlay
  },
  props: {
    title: String,
    subtitle: Array[String],
    href: String,
    img: String,
    type: String
  },
  computed: {
    subtitleSlotPassed() {
      return !!this.$slots.subtitle;
    }
  }
};
</script>
<style>
:root {
  --card-height: 185px;
}
</style>
<style scoped>
.baseCard {
  flex: 0 0 100%;
  margin-bottom: 1em;
  background: #3a3a3a;
  border-radius: 5px;
  display: flex;
  margin-right: 1em;
  height: var(--card-height);
}
.baseCard:hover {
  background: #5a5a5a;
}
.baseCard__imgContainer,
.baseCard__details {
  padding: 1em;
}
.baseCard__detailsContent {
  display: flex;
  flex-direction: column;
  flex: auto;
  align-items: flex-start;
  justify-content: flex-end;
  text-align: left;
}
.baseCard__imgContainer {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
}
.baseCard__title {
  font-size: 18px;
  text-overflow: ellipsis;
  overflow: auto;
  flex: 0 0 auto;
  max-height: 50px;
}
.baseCard__subtitle {
  font-size: 15px;
}
.baseCard__details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.baseCard__img {
  width: 90px;
  height: 90px;
  border-radius: 90px;
  background-color: var(--light-gray-color);
  object-fit: cover;
  -o-object-position: center center;
  object-position: center center;
}

@media (min-width: 480px) {
}

@media (min-width: 768px) {
  .baseCard {
    flex: 0 0 calc(50% - 1em);
  }
}
@media (min-width: 1200px) {
  .baseCard {
    flex: 0 0 calc(25% - 1em);
  }
}
</style>
