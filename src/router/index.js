import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "@/configs/firebase";

// Auth Guards
const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;

  if (!user) {
    next({ name: "Login" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () => import("../views/login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () => import("../views/register.vue"),
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("../views/logout.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/index.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/transaction",
    name: "Transaction",
    component: () => import("../views/index.vue"),
    beforeEnter: requireAuth,
    children: [
      {
        path: "new",
        name: "NewTransaction",
        component: () => import("../views/index.vue"),
      },
    ],
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/profile.vue"),
    beforeEnter: requireAuth,
    children: [
      {
        path: "wallet",
        name: "Profile.Wallet",
        meta: {
          isChild: true,
        },
        component: () => import("../views/wallet.vue"),
      },
      {
        path: "wallet/:id/update",
        name: "Profile.Wallet.Update",
        meta: {
          isChild: true,
        },
        component: () => import("../views/wallet/update.vue"),
      },
    ],
  },
  {
    path: "/wallet",
    name: "Wallet",
    component: () => import("../views/wallet.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/budget",
    name: "Budget",
    component: () => import("../views/index.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Error404",
    component: () => import("../views/404.vue"),
  },
];

routes.map((route) => {
  if (route.children) {
    route.children.map(
      (child) =>
        (child.meta = {
          isChild: true,
        })
    );
  }
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
