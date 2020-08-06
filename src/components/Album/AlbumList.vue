<template>
  <BaseCardList
    title="Albums"
    type="album"
    :visible-rows="2"
    :show-more="albums.items.length > 3"
  >
    <transition-group appear name="fade" tag="div">
      <Album
        v-for="album in albums.items.slice(0, 4)"
        :key="album.id"
        :name="album.name"
        :img="getSmallerImage(album)"
        :artists="album.artists"
        :href="album.external_urls.spotify"
        :release_date="album.release_date"
        :total_tracks="album.total_tracks"
      />
    </transition-group>
  </BaseCardList>
</template>

<script>
import BaseCardList from "@/components/Base/BaseCardList";
import Album from "@/components/Album/Album";

export default {
  name: "AlbumList",
  components: {
    BaseCardList,
    Album
  },
  props: {
    albums: Array[Object]
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
