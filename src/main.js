import Vue from "vue";
import VueFeather from "vue-feather";
import VueSweetalert2 from "vue-sweetalert2";

import store from "./store";
import router from "./router";
import "./registerServiceWorker";

import App from "./App.vue";

Vue.use(VueFeather);
Vue.use(VueSweetalert2);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
