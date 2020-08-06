<template>
  <div class="genresList">
    <span
      v-for="(genre, index) in genres"
      :key="index"
      class="genresList__item"
    >
      {{ genre + (index > genres.length ? ", " : "") }}
    </span>
  </div>
</template>

<script>
export default {
  name: "GenresList",
  props: {
    genres: Array[String],
    default: []
  }
};
</script>

<style scoped>
.genresList {
  --genreHeight: 20px;
}
.genresList {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  margin-top: 5px;

  /* Shows 2 lines as maximum */
  max-height: calc(calc(var(--genreHeight) + 2px) * 2);
  overflow: hidden;
}
.genresList__item {
  font-size: 12px;
  width: auto;
  padding: 2px 8px;
  height: var(--genreHeight);

  border-radius: 25px;
  color: var(--primary-text-color);
  background: var(--primary-lighter-color);
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
