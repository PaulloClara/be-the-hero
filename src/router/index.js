import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import Login from "../views/Login";
import About from "../views/About";

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
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
