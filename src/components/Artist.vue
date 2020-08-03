<template>
  <div class="artist">
    <div class="artist__img">
      <img :src="img" />
    </div>
    <div class="artist__details">
      <h1>{{ name }}</h1>
      <h2 v-if="genres.length">{{ genres.join(", ") }}</h2>
      <p>{{ followers }} followers</p>
      <a :href="href" target="_blank">Listen</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Artist",
  props: {
    name: String,
    genres: Array[String],
    followers: Number,
    href: String,
    img: String
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  margin: 0;
}
.artist {
  flex: 0 0 calc(25% - 1em);
  margin-bottom: 1em;
  margin-right: 1em;
  border: 1px solid #cccccc;
  border-bottom-width: 4px;
  border-bottom-color: #999999;
  border-radius: 5px;
  display: flex;
}

.artist__img,
.artist__details {
  padding: 1em;
}
.artist__img {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.artist__details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.artist img {
  width: 90px;
  height: 90px;
  border-radius: 90px;
  background-color: gray;
  object-fit: cover;
  -o-object-position: center center;
  object-position: center center;
}
</style>
