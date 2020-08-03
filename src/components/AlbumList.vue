<template>
  <BaseCardList title="Albums">
    <Album
      v-for="album in albums.items"
      :key="album.id"
      :name="album.name"
      :img="getFirstImage(album)"
      :artists="album.artists"
      :href="album.external_urls.spotify"
    />
  </BaseCardList>
</template>

<script>
import BaseCardList from "@/components/BaseCardList";
import Album from "@/components/Album";

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
    getFirstImage(item) {
      // TODO: Get proper image size based on device
      return item.images.length > 0 ? item.images[0].url : null;
    }
  }
};
</script>

<style scoped></style>
