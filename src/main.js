import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.filter("numberFormatter", (value, digits = 2) => {
  let si = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = si.length - 1; i > 0; i--) {
    if (value >= si[i].value) {
      break;
    }
  }
  return (value / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
