<template>
  <div class="baseCard">
    <div class="baseCard__imgContainer">
      <img :src="img" class="baseCard__img" />
      <a :href="href" target="_blank" class="baseCard__listenButton">
        <BaseIcon
          width="45"
          height="45"
          icon-title="Play"
          icon-name="play"
          variant="primary"
          ><IconPlay
        /></BaseIcon>
      </a>
    </div>
    <div class="baseCard__details">
      <h1 class="baseCard__title" :title="title">{{ title }}</h1>
      <h2 class="baseCard__subtitle" v-if="subtitle" :title="subtitle">
        {{ subtitle }}
      </h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon";
import IconPlay from "@/components/IconPlay";

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
  computed: {}
};
</script>

<style scoped>
.baseCard {
  flex: 0 0 calc(25% - 1em);
  margin-bottom: 1em;
  margin-right: 1em;
  border: 1px solid var(--light-gray-color);
  border-bottom-width: 4px;
  border-bottom-color: var(--gray-color);
  border-radius: 5px;
  display: flex;
}

.baseCard__imgContainer,
.baseCard__details {
  padding: 1em;
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
</style>
