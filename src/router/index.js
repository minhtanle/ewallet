import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: function () {
      return import(/* webpackChunkName: "home" */ "../views/index.vue");
    },
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: function () {
      return import(/* webpackChunkName: "login" */ "../views/login.vue");
    },
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: function () {
      return import(/* webpackChunkName: "register" */ "../views/register.vue");
    },
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      layout: "system",
    },
    component: function () {
      return import(/* webpackChunkName: "profile" */ "../views/profile.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
