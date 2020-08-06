<template>
  <BaseCardList
    title="Artists"
    type="artist"
    :visible-rows="1"
    :show-more="true"
  >
    <transition-group appear name="fade" tag="div">
      <Artist
        v-for="artist in artists.items.slice(0, 4)"
        v-bind:key="artist.id"
        :name="artist.name"
        :genres="artist.genres"
        :img="getSmallerImage(artist)"
        :followers="artist.followers.total"
        :href="artist.external_urls.spotify"
      />
    </transition-group>
  </BaseCardList>
</template>

<script>
import BaseCardList from "@/components/Base/BaseCardList";
import Artist from "@/components/Artist/Artist";
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
    getSmallerImage(item) {
      const images = item.images;
      if (images.length > 0) {
        return images[images.length - 1].url;
      } else {
        return null;
      }
    }
  }
};
</script>

<style scoped></style>
