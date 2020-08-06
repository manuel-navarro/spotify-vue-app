<template>
  <BaseItem
    class="track"
    :img="img"
    :title="name"
    :subtitle="artists[0].name"
    :href="href"
    type="track"
  >
    <div class="track__extra">
      <div class="track__duration">{{ duration | formatDuration }}</div>
      <div class="track__explicit" v-if="explicit">EXPLICIT</div>
    </div>
  </BaseItem>
</template>

<script>
import BaseItem from "@/components/Base/BaseItem.vue";

export default {
  name: "Track",
  components: {
    BaseItem
  },
  props: {
    name: String,
    artists: Array,
    href: String,
    img: String,
    duration: Number,
    explicit: Boolean
  },
  computed: {},
  filters: {
    formatDuration(value) {
      let s = value;
      // Pad to 2 or 3 digits, default is 2
      function pad(n, z) {
        z = z || 2;
        return ("00" + n).slice(-z);
      }

      let ms = s % 1000;
      s = (s - ms) / 1000;
      let secs = s % 60;
      s = (s - secs) / 60;
      let mins = s % 60;
      let hrs = (s - mins) / 60;

      return (
        (hrs > 0 ? hrs + ":" : "") + (mins > 0 ? mins + ":" : "") + pad(secs)
      );
    }
  }
};
</script>

<style scoped>
.track__extra {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex: 1 1 100%;
  width: 100%;
}
.track__duration {
  font-size: 0.8em;
  color: var(--gray-color);
}
.track__explicit {
  font-size: 0.6em;
  background: var(--default-bg-color);
  color: var(--default-text-color);
  border-radius: 2px;
  padding: 2px 5px;
}
</style>
