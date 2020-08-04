<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* Import CSS Variables in non scoped style to make them available
in other components and views */
@import "./styles/variables.css";
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
body {
  background: #e8e8e8;
}
#app {
  color: var(--text-color);

  font-family: var(--text-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  margin: 0 auto;
  padding: 12px 24px;

  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
a {
  color: var(--primary-color);
}
a:hover,
a:visited {
  color: var(--primary-lighter-color);
}
h1,
h2 {
  margin: 0;
  text-align: left;
}
*:active,
*:focus {
  outline-color: var(--primary-color);
}
</style>
