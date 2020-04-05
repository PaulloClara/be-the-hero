import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home";
import Register from "../pages/Register";
import NewIncident from "../pages/NewIncident";
import PageNotFound from "../pages/PageNotFound";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/incidents/new",
      name: "new-incident",
      component: NewIncident
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "*",
      name: "page-not-found",
      component: PageNotFound
    }
  ]
});
