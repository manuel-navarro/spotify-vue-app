<template>
  <input
    class="theSearchBox"
    ref="searchBox"
    type="search"
    v-model="search"
    aria-label="Type here to search artists, albums or tracks"
    placeholder="Type here to search artists, albums or tracks"
  />
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TheSearchBox",
  created() {
    this.search = this.$route.query.q;
  },
  mounted() {
    this.focusInput();
  },
  methods: {
    ...mapActions("search", ["doSearch", "clearSearch"]),
    focusInput() {
      this.$refs.searchBox.focus();
    },
    updateRouterQuery(value) {
      const newQuery = Object.assign({}, this.$route.query, { q: value });
      this.$router
        .replace({
          query: newQuery
        })
        .catch(() => {});
    }
  },
  computed: {
    ...mapGetters("search", {
      searchFromStore: "getSearch"
    }),
    search: {
      get() {
        return this.searchFromStore;
      },
      set(value) {
        if (value) {
          this.doSearch(value);
        } else {
          this.clearSearch();
        }
        this.updateRouterQuery(value);
      }
    }
  }
};
</script>
<style scoped>
.theSearchBox {
  font-size: 20px;
  background: white;
  color: var(--dark-gray-color);
  border: 1px solid var(--light-gray-color);
  border-radius: 5px;
  height: 50px;
  width: 100%;
  padding: 5px 20px;
}
</style>
