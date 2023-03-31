import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { guardCheckAuth } from "@/router/guard";

import AppHome from "@/views/AppHome.vue";
import AppLogin from "@/views/AppLogin.vue";
import AppRegister from "@/views/AppRegister.vue";
import AppRegisterIncident from "@/views/AppRegisterIncident.vue";
import AppPageNotFound from "@/views/AppPageNotFound.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: AppHome,
    children: [
      {
        path: "/incidentes/adicionar",
        name: "register-incident",
        meta: { requiresAuth: true },
        component: AppRegisterIncident,
      },
    ],
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

router.beforeEach(guardCheckAuth);

export default router;
