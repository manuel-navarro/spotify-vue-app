<template>
  <BaseItemGrid title="Songs">
    <transition-group appear name="fade" tag="div">
      <Track
        v-for="track in tracks.items"
        :key="track.id"
        :name="track.name"
        :img="getFirstImage(track.album)"
        :artists="track.artists"
        :duration="track.duration_ms"
        :explicit="track.explicit"
        :href="track.external_urls.spotify"
      />
    </transition-group>
  </BaseItemGrid>
</template>

<script>
import BaseItemGrid from "@/components/Base/BaseItemGrid";
import Track from "@/components/Track/Track";

export default {
  name: "TrackList",
  components: {
    BaseItemGrid,
    Track
  },
  props: {
    tracks: Array[Object]
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
