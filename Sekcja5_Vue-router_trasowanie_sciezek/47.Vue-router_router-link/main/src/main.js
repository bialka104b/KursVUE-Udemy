import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import router from "./router/index";

Vue.config.productionTip = false;
Vue.use(VueRouter)//dodajemy komponent VueRouter do naszej aplikacji globalnie

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router: router,
  components: { App },
  template: '<App/>'
});
