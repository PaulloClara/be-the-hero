import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import VHome from "@/views/HomeView.vue";
import VNewIncident from "@/views/NewIncident/NewIncident.vue";
import VRegister from "@/views/Register.vue";
import VLogin from "@/views/Login.vue";
import VProfile from "@/views/Profile.vue";
import VPageNotFound from "@/views/PageNotFound.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: VHome,
  },
  {
    path: "/incidentes/adicionar",
    name: "new-incident",
    component: VNewIncident,
  },
  {
    path: "/login",
    name: "login",
    component: VLogin,
  },
  {
    path: "/cadastre-se",
    name: "register",
    component: VRegister,
  },
  {
    path: "/perfil",
    name: "profile",
    component: VProfile,
  },
  {
    path: "*",
    name: "page-not-found",
    component: VPageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
