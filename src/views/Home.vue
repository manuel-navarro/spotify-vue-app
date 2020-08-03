<template>
  <div class="home">
    <TheHeader />
    <ArtistList v-if="artists" :artists="artists" />
    <AlbumList v-if="albums" :albums="albums" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TheHeader from "@/components/TheHeader";
import ArtistList from "@/components/ArtistList";
import AlbumList from "@/components/AlbumList";

export default {
  name: "home",
  components: {
    TheHeader,
    ArtistList,
    AlbumList
  },
  methods: {
    getFirstImage(item) {
      // TODO: Get proper image size based on device
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
