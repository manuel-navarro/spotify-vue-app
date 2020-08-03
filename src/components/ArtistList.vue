<template>
  <BaseCardList title="Artists">
    <Artist
      v-for="artist in artists.items.slice(0, 3)"
      :key="artist.id"
      :name="artist.name"
      :genres="artist.genres"
      :img="getFirstImage(artist)"
      :followers="artist.followers.total"
      :href="artist.external_urls.spotify"
    />
  </BaseCardList>
</template>

<script>
import BaseCardList from "@/components/BaseCardList";
import Artist from "@/components/Artist";
export default {
  name: "ArtistList",
  components: {
    BaseCardList,
    Artist
  },
  props: {
    artists: Array[Object]
  },
  methods: {
    getFirstImage(item) {
      // TODO: Get proper image size based on device
      return item.images.length > 0 ? item.images[0].url : null;
    }
  }
};
</script>

<style scoped></style>
