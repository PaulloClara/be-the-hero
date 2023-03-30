import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import AppHome from "@/views/AppHome.vue";
import AppLogin from "@/views/AppLogin.vue";
import AppPageNotFound from "@/views/AppPageNotFound.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: AppHome,
  },
  {
    path: "/entrar",
    name: "login",
    component: AppLogin,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "page-not-found",
    component: AppPageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
