<template>
  <BaseCard
    :img="img"
    :title="name"
    :subtitle="artists[0].name"
    :href="href"
    type="album"
  ></BaseCard>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";

export default {
  name: "Album",
  components: {
    BaseCard
  },
  props: {
    name: String,
    artists: Array,
    href: String,
    img: String
  },
  computed: {}
};
</script>

<style scoped></style>
