<template>
  <BaseCard :img="img" :title="name" :href="href" type="album" class="album">
    <template #subtitle> {{ artists[0].name }} </template>
    <template #bottom class="album__extra">
      <span class="album__date" v-if="release_date"
        >Released on {{ formatDate }}
      </span>
      <span class="album__songs">{{ total_tracks }} songs</span>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "@/components/Base/BaseCard.vue";

export default {
  name: "Album",
  components: {
    BaseCard
  },
  props: {
    name: String,
    artists: Array,
    href: String,
    img: String,
    release_date: String, // Expected format: "YYYY-MM-DD", i.e. "2006-06-19"
    total_tracks: Number
  },
  computed: {
    formatDate() {
      const date = new Date(this.release_date);
      return date.toDateString();
    }
  }
};
</script>

<style scoped>
.album__extra {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
.album__songs,
.album__date {
  color: var(--light-gray-color);
  font-size: 15px;
}

@media (min-width: 480px) {
}

@media (min-width: 768px) {
  .album__songs,
  .album__date {
    font-size: 13px;
  }
}
@media (min-width: 1024px) {
  .album__songs,
  .album__date {
    font-size: 14px;
  }
}
@media (min-width: 1200px) {
  .album__songs,
  .album__date {
    font-size: 12px;
  }
}
</style>
