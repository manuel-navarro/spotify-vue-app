<template>
  <article class="baseItem">
    <div class="baseItem__imgContainer">
      <img :src="img" class="baseItem__img" />
      <div>
        <a :href="href" target="_blank" class="baseItem__listenButton">
          <BaseIcon
            width="25"
            height="25"
            icon-title="Play song in Spotify"
            icon-name="play"
            variant="primary"
            ><IconPlay /></BaseIcon
        ></a>
      </div>
    </div>
    <div class="baseItem__details">
      <h1 class="baseItem__title" :title="title">{{ title }}</h1>
      <p class="baseItem__subtitle" v-if="subtitle" :title="subtitle">
        {{ subtitle }}
      </p>
      <slot></slot>
    </div>
  </article>
</template>

<script>
import BaseIcon from "@/components/Base/BaseIcon";
import IconPlay from "@/components/Icon/IconPlay";

export default {
  name: "BaseItem",
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
.baseItem {
  display: flex;
  flex: 0 0 100%;
  height: 120px;
  margin-bottom: 1em;
  padding: 0.4em;
  border-radius: 5px;
  background: white;
}
.baseItem:hover {
  background: #f2f2f2;
  border-radius: 5px;
}
.baseItem__title {
  font-size: 18px;
  font-weight: bold;
  max-height: 50px;
  text-overflow: ellipsis;
  overflow: auto;
  flex: 0 0 auto;
}
.baseItem__subtitle {
  font-size: 14px;
  margin: 5px 0;
}
.baseItem__imgContainer,
.baseItem__details {
  padding: 0.5em;
}
.baseItem__imgContainer {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 15px;
}
.baseItem__details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 100%;
}
.baseItem__img {
  width: 60px;
  height: 60px;
  border-radius: 5px;
  background-color: var(--light-gray-color);
  object-fit: cover;
  -o-object-position: center center;
  object-position: center center;
}
@media (min-width: 480px) {
}
@media (min-width: 768px) {
  .baseItem {
    flex: 0 0 calc(50% - 1.2em);
    margin-right: 0.8em;
  }
}
@media (min-width: 1024px) {
  .baseItem {
    flex: 0 0 calc(33% - 1.2em);
    margin-right: 0.8em;
  }
}
@media (min-width: 1200px) {
  .baseItem {
    flex: 0 0 calc(25% - 1.2em);
    margin-right: 0.8em;
  }
}
</style>
