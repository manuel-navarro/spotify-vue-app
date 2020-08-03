<template>
  <div class="baseItem">
    <div class="baseItem__imgContainer">
      <img :src="img" class="baseItem__img" />
      <a :href="href" target="_blank" class="baseItem__listenButton">Listen</a>
    </div>
    <div class="baseItem__details">
      <h1 class="baseItem__title" :title="title">{{ title }}</h1>
      <p class="baseItem__subtitle" v-if="subtitle" :title="subtitle">
        {{ subtitle }}
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseItem",
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
  flex: 0 0 calc(20% - 1.2em);
  height: 120px;
  margin-bottom: 1em;
  margin-right: 0.8em;
  padding: 0.1em;
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
</style>
