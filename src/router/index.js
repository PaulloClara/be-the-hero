import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/Register";

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
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
});
