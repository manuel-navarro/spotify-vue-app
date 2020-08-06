<template>
  <BaseCard :img="img" :title="name" :href="href" class="artist">
    <template #subtitle>
      <GenresList :genres="genres" />
    </template>
    <p class="artist__followers">{{ followers | numberFormatter }} followers</p>
  </BaseCard>
</template>

<script>
import BaseCard from "@/components/Base/BaseCard.vue";
import GenresList from "@/components/Genres/GenresList.vue";

export default {
  name: "Artist",
  components: {
    BaseCard,
    GenresList
  },
  props: {
    name: String,
    genres: Array[String],
    followers: Number,
    href: String,
    img: String
  }
};
</script>
<style scoped>
.artist__followers {
  font-size: 20px;
  color: var(--light-gray-color);
}
</style>
