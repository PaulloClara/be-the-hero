import { createApp } from "vue";

import router from "@/router";
import App from "@/App.vue";

import "@/registerServiceWorker";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/config.scss";

createApp(App).use(router).mount("#app");
