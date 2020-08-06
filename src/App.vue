<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* TODO Move imports to main.js */
/* Import CSS Variables in non scoped style to make them available
in other components and views */
@import "./styles/variables.css";
@import "./styles/transitions.css";
@import "./styles/custom-scroll.css";
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
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
#app {
  color: var(--text-color);

  font-family: var(--text-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  margin: 0 auto;

  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-width: 480px;
  background: #313131;
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
/* Hide element but make it available for screen readers */
.screen-readers {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  border: 0;
}
</style>
