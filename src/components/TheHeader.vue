<template>
  <header class="theHeader">
    <TheSearchBox class="theHeader__searchBox" />
    <TheUserBar />
  </header>
</template>
<script>
import TheUserBar from "@/components/TheUserBar";
import TheSearchBox from "@/components/TheSearchBox";
export default {
  name: "TheHeader",
  components: {
    TheUserBar,
    TheSearchBox
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
