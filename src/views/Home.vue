<template>
  <div class="home">
    <TheHeader />
    <div v-if="artists">
      <h2>Artists</h2>
      <div class="artistsList">
        <Artist
          v-for="artist in artists.items.slice(0, 3)"
          :key="artist.id"
          :name="artist.name"
          :genres="artist.genres"
          :img="getFirstImage(artist)"
          :followers="artist.followers.total"
          :href="artist.external_urls.spotify"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TheHeader from "@/components/TheHeader";
import Artist from "@/components/Artist";

export default {
  name: "home",
  components: {
    TheHeader,
    Artist
  },
  methods: {
    getFirstImage(item) {
      return item.images.length > 0 ? item.images[0].url : null;
    }
  },
  computed: {
    ...mapGetters("search", {
      albums: "getResultAlbums",
      artists: "getResultArtists"
    })
  }
};
</script>
<style scoped>
h2 {
  margin-top: 2em;
}
.artistsList {
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
  overflow-x: auto;
}
</style>
