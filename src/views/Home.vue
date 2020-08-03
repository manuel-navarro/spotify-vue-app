<template>
  <div class="home">
    <TheHeader />
    <div>{{ artists }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TheHeader from "@/components/TheHeader";

export default {
  name: "home",
  components: {
    TheHeader
  },
  computed: {
    ...mapGetters("search", {
      albums: "getResultAlbums",
      artists: "getResultArtists"
    })
  }
};
</script>
