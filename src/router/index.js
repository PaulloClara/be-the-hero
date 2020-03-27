import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import NewIncident from "../pages/NewIncident";

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
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/about",
      name: "about",
      component: About
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
    }
  ]
});
