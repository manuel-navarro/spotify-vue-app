<template>
  <div class="baseItemGrid">
    <h2 class="baseItemGrid__title">{{ title }}</h2>
    <div class="baseItemGrid__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseItemGrid",
  components: {},
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
