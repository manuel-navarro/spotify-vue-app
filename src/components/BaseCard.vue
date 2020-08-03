<template>
  <div class="baseCard">
    <div class="baseCard__img">
      <img :src="img" />
    </div>
    <div class="baseCard__details">
      <h1 class="baseCard__title">{{ title }}</h1>
      <h2 class="baseCard__subtitle" v-if="subtitle">{{ subtitle }}</h2>
      <slot></slot>
      <a :href="href" target="_blank" class="baseCard__listenButton">Listen</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
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

.baseCard__img,
.baseCard__details {
  padding: 1em;
}
.baseCard__img {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.baseCard__details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.baseCard img {
  width: 90px;
  height: 90px;
  border-radius: 90px;
  background-color: var(--light-gray-color);
  object-fit: cover;
  -o-object-position: center center;
  object-position: center center;
}
</style>
