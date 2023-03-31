import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "@/router";
import App from "@/App.vue";

import "@/registerServiceWorker";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/config.scss";

createApp(App).use(createPinia()).use(router).mount("#app");
