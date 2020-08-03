<template>
  <BaseCard :img="img" :title="name" :subtitle="getGenres" :href="href">
    <p>{{ followers | numberFormatter }} followers</p>
  </BaseCard>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";

export default {
  name: "Artist",
  components: {
    BaseCard
  },
  props: {
    name: String,
    genres: Array[String],
    followers: Number,
    href: String,
    img: String
  },
  computed: {
    getGenres() {
      return this.genres.length ? this.genres.join(", ") : "";
    }
  }
};
</script>
