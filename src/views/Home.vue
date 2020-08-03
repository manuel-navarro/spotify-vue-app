<template>
  <div class="home">
    <TheHeader />
    <ArtistList v-if="artistsExists" :artists="artists" />
    <AlbumList v-if="albumsExists" :albums="albums" />
    <TrackGrid v-if="tracksExists" :tracks="tracks" />
    <div v-if="!search" class="home__message">
      <p>
        Hi! Type in the search box to start using this app. Hope you like it!
      </p>
    </div>
    <div v-else-if="noResults" class="home__message">
      <p>Oops! No results found for {{ search }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TheHeader from "@/components/TheHeader";
import ArtistList from "@/components/ArtistList";
import AlbumList from "@/components/AlbumList";
import TrackGrid from "@/components/TrackGrid";

export default {
  name: "home",
  components: {
    TheHeader,
    ArtistList,
    AlbumList,
    TrackGrid
  },
  methods: {
    getFirstImage(item) {
      // TODO: Get proper image size based on device
      return item.images.length > 0 ? item.images[0].url : null;
    }
  },
  computed: {
    ...mapGetters("search", {
      search: "getSearch",
      albums: "getResultAlbums",
      artists: "getResultArtists",
      tracks: "getResultTracks"
    }),
    noResults() {
      return !this.artistsExists && !this.albumsExists && !this.tracksExists;
    },
    artistsExists() {
      return this.artists && this.artists.total > 0;
    },
    albumsExists() {
      return this.albums && this.albums.total > 0;
    },
    tracksExists() {
      return this.tracks && this.tracks.total > 0;
    }
  }
};
</script>
<style scoped>
.home__message {
  font-size: 22px;
}
</style>
