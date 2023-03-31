import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import AppHome from "@/views/AppHome.vue";
import AppLogin from "@/views/AppLogin.vue";
import AppRegister from "@/views/AppRegister.vue";
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
    path: "/cadastre-se",
    name: "register",
    component: AppRegister,
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
