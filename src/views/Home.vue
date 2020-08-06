<template>
  <div class="home">
    <TheHeader />
    <ArtistList v-if="artistsExists" :artists="artists" />
    <AlbumList v-if="albumsExists" :albums="albums" />
    <TrackGrid v-if="tracksExists" :tracks="tracks" />
    <div v-if="!search" class="home__message">
      <p class="home__messageHighlight">Hi! :-)</p>
      <p>
        Type in the search box to start using this app. Hope you like it!
      </p>
    </div>
    <div v-else-if="isSearching" class="home__searching">
      <BaseIcon
        width="60"
        height="60"
        variant="primary"
        icon-title="Searching"
        icon-name="searching"
      >
        <IconLoading />
      </BaseIcon>
      <p>
        Searching...
      </p>
    </div>
    <div v-else-if="noResults" class="home__message">
      <p>
        Oops! No results found for
        <span class="home__search">{{ search }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TheHeader from "@/components/TheHeader";
import ArtistList from "@/components/Artist/ArtistList";
import AlbumList from "@/components/Album/AlbumList";
import TrackGrid from "@/components/Track/TrackGrid";
import BaseIcon from "@/components/Base/BaseIcon";
import IconLoading from "@/components/Icon/IconLoading";

export default {
  name: "home",
  components: {
    BaseIcon,
    IconLoading,
    TheHeader,
    ArtistList,
    AlbumList,
    TrackGrid
  },
  computed: {
    ...mapGetters("search", {
      isSearching: "getIsSearching",
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
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.home__searching,
.home__message {
  font-size: 22px;
  flex: auto;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home__messageHighlight {
  font-size: 30px;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0;
}
.home__search {
  font-weight: bold;
  color: var(--secondary-color);
}
.home__searching {
  flex-direction: column;
}
</style>
