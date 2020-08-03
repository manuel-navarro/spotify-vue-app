<template>
  <header class="theHeader">
    <SearchBox class="theHeader__searchBox" />
    <TheUserBar />
  </header>
</template>
<script>
import TheUserBar from "@/components/TheUserBar";
import SearchBox from "@/components/SearchBox";
export default {
  name: "TheHeader",
  components: {
    TheUserBar,
    SearchBox
  }
};
</script>
<style scoped>
.theHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.theHeader__searchBox {
  flex: 0 1 70%;
}
</style>
