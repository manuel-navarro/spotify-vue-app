<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* Import CSS Variables in non scoped style to make them available
in other components and views */
@import "./styles/variables.css";
#app {
  color: var(--text-color);

  font-family: var(--text-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  margin: 0 auto;
  padding: 12px 24px;
}
h1,
h2 {
  margin: 0;
  text-align: left;
}
</style>
