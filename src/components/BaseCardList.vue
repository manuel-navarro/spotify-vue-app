<template>
  <div class="baseCardList">
    <h2 class="baseCardList__title">{{ title }}</h2>
    <div class="baseCardList__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCardList",
  components: {},
  props: {
    title: String
  }
};
</script>

<style scoped>
.baseCardList__title {
  margin-top: 2em;
}
.baseCardList__content {
  display: flex;
  margin-top: 1em;
  overflow-x: auto;
}
</style>
