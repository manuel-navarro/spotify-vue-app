<template>
  <div class="theSearchBox">
    <BaseIcon
      class="theSearchBox__img"
      width="20"
      height="20"
      icon-title="Profile"
      icon-name="profile"
      variant="default"
      ><IconSearch
    /></BaseIcon>
    <input
      class="theSearchBox__input"
      ref="searchBox"
      type="search"
      v-model="search"
      aria-label="Type here to search artists, albums or tracks"
      placeholder="Type here to search artists, albums or tracks"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import _ from "lodash";
import BaseIcon from "@/components/BaseIcon";
import IconSearch from "@/components/IconSearch";

export default {
  name: "TheSearchBox",
  components: {
    BaseIcon,
    IconSearch
  },
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
      set: _.debounce(function(value) {
        if (value) {
          this.doSearch(value);
        } else {
          this.clearSearch();
        }
        this.updateRouterQuery(value);
      }, 500)
    }
  }
};
</script>
<style scoped>
.theSearchBox {
  display: flex;
  align-items: center;
}
.theSearchBox__img {
  margin-right: 10px;
}
.theSearchBox__input {
  font-size: 20px;
  background: none;
  border: none;
  border-bottom: 1px solid var(--light-gray-color);
  height: 50px;
  width: 100%;
  padding: 8px 20px 5px 10px;
}
.theSearchBox__input:focus {
  outline: none;
  border: none;
  border-bottom: 2px solid var(--primary-color);
}
</style>
