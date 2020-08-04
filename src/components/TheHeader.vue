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
import IconLogo from "@/components/IconLogo";

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
  gap: 24px;
}
.theHeader__searchBox {
  /* Allow to shring if userBar grows,
     initial width is 70% */
  flex: 0 1 70%;
}
.theHeader__userBar {
  /* Allow to grow if username requires more space */
  flex: 1;
}
.theHeader__logo {
  /* Do not allow grow or shrink */
  flex: 0 0 auto;
  width: 65px;
  height: 65px;
}
</style>
