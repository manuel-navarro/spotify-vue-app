<template>
  <header class="theHeader">
    <!-- TODO: Add APP logo here -->
    <div class="theHeader__logo">
      <IconLogo width="65" height="65" />
    </div>
    <TheSearchBox class="theHeader__searchBox" />
    <TheUserBar class="theHeader__userBar" />
  </header>
</template>
<script>
import TheUserBar from "@/components/TheUserBar";
import TheSearchBox from "@/components/TheSearchBox";
import IconLogo from "@/components/Icon/IconLogo";

export default {
  name: "TheHeader",
  components: {
    TheUserBar,
    TheSearchBox,
    IconLogo
  }
};
</script>
<style scoped>
.theHeader {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 24px;
  padding: 12px 24px;
  background: #191919;
}
.theHeader__searchBox {
  width: 90%;
  order: 3;
}
.theHeader__userBar {
  /* Allow to grow if username requires more space */
  flex: 1;
  order: 2;
}
.theHeader__logo {
  /* Do not allow grow or shrink */
  flex: 0 0 auto;
  width: 65px;
  height: 65px;
  order: 1;
}
@media (min-width: 480px) {
}
@media (min-width: 768px) {
  .theHeader {
    flex-direction: row;
  }
  .theHeader__searchBox {
    /* Allow to shring if userBar grows,
     initial width is 70% */
    flex: 0 1 70%;
    order: 2;
  }
  .theHeader__userBar {
    order: 3;
  }
}
@media (min-width: 1024px) {
}
@media (min-width: 1200px) {
}
</style>
