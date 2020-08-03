<template>
  <input
    class="searchBox"
    type="search"
    aria-label="Search artists, albums or tracks"
    placeholder="Search artists, albums or tracks"
  />
</template>

<script>
export default {
  name: "SearchBox"
};
</script>
<style scoped>
.searchBox {
  font-size: 20px;
  background: white;
  border: 1px solid #9e9e9e;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  padding: 5px 10px;
}
</style>
